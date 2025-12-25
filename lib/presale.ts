export interface Buyer {
    wallet: string;
    amountUSD: number;
  }
  
  let buyers: Buyer[] = [];
  
  export const getBuyers = () => buyers;
  
  export const addBuyer = (wallet: string, amountUSD: number) => {
    buyers.push({ wallet, amountUSD });
  
    // Trigger custom event za refresh AdminPanela i ProgressBar-a
    const event = new Event("presale_update");
    window.dispatchEvent(event);
  };
  
  export const getTotalUSD = () => {
    return buyers.reduce((acc, b) => acc + b.amountUSD, 0);
  };
  
  export const SOFTCAP = 100_000; // 100k USD
  