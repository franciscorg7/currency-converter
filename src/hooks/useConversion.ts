import { useCallback, useEffect, useState } from "react";
import {
  getCurrencyCodes,
  getCurrencyConversion,
} from "../services/currencyService";

const useConversion = () => {
  const [currencyCodes, setCurrencyCodes] = useState<Record<string, string>>(
    {},
  );
  const [conversionRates, setConversionRates] = useState<
    Record<string, number>
  >({});

  useEffect(() => {
    getCurrencyCodes().then((response: Record<string, string>) => {
      setCurrencyCodes(response);
    });
  }, []);

  /**
   * Gets the currency conversion rates for the specified base currency.
   *
   * @param from - the base currency
   */
  const fetchConversionRates = useCallback(async (from: string) => {
    const response = await getCurrencyConversion(from);
    setConversionRates(response);
  }, []);

  return {
    currencyCodes,
    conversionRates,
    fetchConversionRates,
  };
};

export default useConversion;
