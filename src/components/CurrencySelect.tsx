import { useMemo, type ChangeEvent } from "react";
import useConversion from "../hooks/useConversion";

type CurrencySelectProps = {
  value: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  className?: string;
};

export const CurrencySelect = ({
  value,
  onChange,
  className,
}: CurrencySelectProps) => {
  const { currencyCodes } = useConversion();

  const orderedCodes = useMemo(
    () =>
      Object.entries(currencyCodes)?.sort((a, b) => a[1].localeCompare(b[1])),
    [currencyCodes],
  );

  return (
    <select
      className={
        "w-full cursor-pointer rounded-lg border border-slate-800 bg-slate-950/40 px-3 py-2 text-sm text-slate-100 shadow-sm outline-none transition hover:border-slate-700 focus:border-slate-600 focus:ring-2 focus:ring-slate-400/30 disabled:cursor-not-allowed disabled:opacity-60 " +
        (className ?? "")
      }
      name="currency-select"
      id="currency-select"
      value={value}
      onChange={onChange}
    >
      {orderedCodes
        .filter(([code, name]) => !!code && !!name)
        .map(([code, name]) => {
          return (
            <option value={code} key={code}>
              {`${name} (${code.toUpperCase()})`}
            </option>
          );
        })}
    </select>
  );
};
