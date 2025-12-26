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

export const getTotalUSD = () =>
  buyers.reduce((acc, b) => acc + b.amountUSD, 0);

export const SOFTCAP = 100_000;
export const REFERRAL_PERCENT = 10;
export const MIN_BUY = 50;
export const MAX_BUY = 20_000;
