import { useCallback, type ChangeEvent } from "react";
import { useCurrency } from "../context/CurrencyContext";
import { CurrencySelect } from "./CurrencySelect";

const CurrencyInput = () => {
  const { setAmount, fromCurrency, setFromCurrency } = useCurrency();

  const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(Number(e.target.value).toFixed(2)));
  };

  const handleCurrencyChange = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      const newCurrency = e.target.value;
      setFromCurrency(newCurrency);
    },
    [],
  );

  return (
    <div className="flex flex-col">
      <input
        className="w-1/2"
        type="text"
        placeholder="Enter amount"
        onChange={handleAmountChange}
      />
      <CurrencySelect value={fromCurrency} onChange={handleCurrencyChange} />
    </div>
  );
};

export default CurrencyInput;
