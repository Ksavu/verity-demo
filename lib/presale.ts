export interface Buyer {
  wallet: string;
  amountUSD: number;
  referral?: string;
}

let buyers: Buyer[] = [];

export const getBuyers = () => buyers;

export const addBuyer = (
  wallet: string,
  amountUSD: number,
  referral?: string
) => {
  buyers.push({ wallet, amountUSD, referral });

  window.dispatchEvent(new Event("presale_update"));
};

export const getTotalUSD = () => {
  return (
    INITIAL_FILLED_USD +
    buyers.reduce((acc, b) => acc + b.amountUSD, 0)
  );
};

export const SOFTCAP = 200_000;
export const REFERRAL_PERCENT = 10;
export const MIN_BUY = 50;
export const MAX_BUY = 20_000;
export const INITIAL_FILLED_USD = 100_000; // already filled (team / seed)
