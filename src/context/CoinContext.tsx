import axios from "axios";
import { createContext, useEffect, useState } from "react";

export interface Coin {
  id: string;
  name: string;
  current_price: number; // Correct property name for price
  symbol: string;
  image: string;
  market_cap: number;
  high_24h: number; // Correct type for high_24h
}

interface CoinContextTypes {
  coins: Coin[];
  setCurrency: React.Dispatch<React.SetStateAction<{ name: string; symbol: string }>>;
  currency: { name: string; symbol: string };
}

export const CoinContext = createContext<CoinContextTypes>({
  coins: [],
  setCurrency: () => {},
  currency: { name: "usd", symbol: "$" },
});

export const CoinProvider = ({ children }: { children: React.ReactNode }) => {
  const [coins, setCoins] = useState<Coin[]>([]);
  const [currency, setCurrency] = useState({ name: "usd", symbol: "$" });

  const fetchAllCoins = async () => {
    try {
      const { data } = await axios.get(
        `https://api.coingecko.com/api/v3/coins/markets`,
        {
          params: { vs_currency: currency.name },
          headers: {
            accept: "application/json",
            "x-cg-demo-api-key": import.meta.env.VITE_API_KEY,
          },
        }
      );
      setCoins(data);
      console.log('Coins fetched:', data);
    } catch (error) {
      console.log('Error fetching coins:', error);
    }
  };

  useEffect(() => {
    fetchAllCoins();
  }, [currency]);

  return (
    <CoinContext.Provider value={{ coins, setCurrency, currency }}>
      {children}
    </CoinContext.Provider>
  );
};
