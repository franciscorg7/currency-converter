import { createContext, useContext, useState, type ReactNode } from "react";

interface CurrencyContextType {
  amount: number;
  fromCurrency: string;
  toCurrency: string;
  setAmount: (value: number) => void;
  setFromCurrency: (currency: string) => void;
  setToCurrency: (currency: string) => void;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(
  undefined,
);

export const CurrencyProvider = ({ children }: { children: ReactNode }) => {
  const [amount, setAmount] = useState<number>(0);
  const [fromCurrency, setFromCurrency] = useState<string>("eur");
  const [toCurrency, setToCurrency] = useState<string>("usd");

  return (
    <CurrencyContext.Provider
      value={{
        amount,
        fromCurrency,
        toCurrency,
        setAmount,
        setFromCurrency,
        setToCurrency,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCurrency = () => {
  const context = useContext(CurrencyContext);

  if (!context)
    throw new Error("useCurrency must be used within a CurrencyProvider");

  return context;
};
