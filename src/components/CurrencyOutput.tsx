import { useCallback, useEffect, type ChangeEvent } from "react";
import useConversion from "../hooks/useConversion";
import { useCurrency } from "../context/CurrencyContext";
import { formatCurrency } from "../utils/currency.util";
import { CurrencySelect } from "./CurrencySelect";

const CurrencyOutput = () => {
  const { amount, fromCurrency, toCurrency, setToCurrency } = useCurrency();
  const { conversionRates, fetchConversionRates } = useConversion();

  const rate = conversionRates?.[toCurrency];
  const convertedAmount =
    rate && amount ? Number((amount * rate).toFixed(2)) : 0;

  useEffect(() => {
    fetchConversionRates(fromCurrency);
  }, [fromCurrency, fetchConversionRates]);

  const handleCurrencyChange = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      setToCurrency(e.target.value);
    },
    [],
  );

  return (
    <div className="flex flex-col">
      <input
        className="w-1/2"
        disabled
        type="text"
        value={formatCurrency(convertedAmount, toCurrency)}
      />
      <CurrencySelect value={toCurrency} onChange={handleCurrencyChange} />
    </div>
  );
};

export default CurrencyOutput;
