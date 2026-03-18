import type { ChangeEvent } from "react";
import useConversion from "../hooks/useConversion";

type CurrencySelectProps = {
  value: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
};

export const CurrencySelect = ({ value, onChange }: CurrencySelectProps) => {
  const { currencyCodes } = useConversion();

  return (
    <select
      className="cursor-pointer w-1/2"
      name="currency-select"
      id="currency-select"
      value={value}
      onChange={onChange}
    >
      {Object.entries(currencyCodes)
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
