import { useCallback, type ChangeEvent } from "react";
import { useCurrency } from "../context/CurrencyContext";
import { CurrencySelect } from "./CurrencySelect";

const CurrencyInput = () => {
  const { setAmount, fromCurrency, setFromCurrency } = useCurrency();

  const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    if (!raw) {
      setAmount(0);
      return;
    }
    const parsed = Number(raw);
    setAmount(Number.isFinite(parsed) ? Number(parsed.toFixed(2)) : 0);
  };

  const handleCurrencyChange = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      const newCurrency = e.target.value;
      setFromCurrency(newCurrency);
    },
    [setFromCurrency],
  );

  return (
    <section className="flex flex-col gap-3 text-left">
      <header className="flex items-baseline justify-between">
        <h2 className="text-sm font-medium tracking-tight text-white">From</h2>
      </header>

      <div className="flex flex-col gap-2">
        <CurrencySelect value={fromCurrency} onChange={handleCurrencyChange} />
        <input
          className="w-full rounded-lg border border-slate-800 bg-slate-950/40 px-3 py-2 text-sm text-slate-100 shadow-sm outline-none transition placeholder:text-slate-500 hover:border-slate-700 focus:border-slate-600 focus:ring-2 focus:ring-slate-400/30"
          type="text"
          placeholder="0.00"
          onChange={handleAmountChange}
        />
      </div>

      <p className="text-xs text-slate-400">
        Enter an amount and pick the base currency.
      </p>
    </section>
  );
};

export default CurrencyInput;
