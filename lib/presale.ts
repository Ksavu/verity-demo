export type Buyer = {
    address: string;
    amountUSD: number;
  };
  
  let buyers: Buyer[] = [];
  
  export const getBuyers = () => buyers;
  
  export const getTotalUSD = () =>
    buyers.reduce((acc, b) => acc + b.amountUSD, 0);
  
  export const addBuyer = (address: string, amountUSD: number) => {
    buyers.push({ address, amountUSD });
  };
  