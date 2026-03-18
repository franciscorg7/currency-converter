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
    [setToCurrency],
  );

  return (
    <section className="flex flex-col gap-3 text-left">
      <header className="flex items-baseline justify-between">
        <h2 className="text-sm font-medium tracking-tight text-white">To</h2>
      </header>

      <div className="flex flex-col gap-2">
        <CurrencySelect value={toCurrency} onChange={handleCurrencyChange} />
        <input
          className="w-full rounded-lg border border-slate-800 bg-slate-950/30 px-3 py-2 text-sm text-slate-100 shadow-sm outline-none transition placeholder:text-slate-500 hover:border-slate-700 focus:border-slate-600 focus:ring-2 focus:ring-slate-400/30 disabled:cursor-not-allowed disabled:opacity-70"
          disabled
          type="text"
          value={formatCurrency(convertedAmount, toCurrency)}
        />
      </div>
    </section>
  );
};

export default CurrencyOutput;
