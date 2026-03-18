import { describe, expect, it, vi } from "vitest";
import { renderHook, waitFor } from "@testing-library/react";
import useConversion from "./useConversion";

vi.mock("../services/currencyService", () => {
  return {
    getCurrencyCodes: vi.fn(),
    getCurrencyConversion: vi.fn(),
  };
});

import {
  getCurrencyCodes,
  getCurrencyConversion,
} from "../services/currencyService";

describe("useConversion", () => {
  it("fetches currency codes on mount", async () => {
    vi.mocked(getCurrencyCodes).mockResolvedValueOnce({
      eur: "Euro",
      usd: "United States Dollar",
    });

    const { result } = renderHook(() => useConversion());

    await waitFor(() => {
      expect(result.current.currencyCodes).toEqual({
        eur: "Euro",
        usd: "United States Dollar",
      });
    });
  });

  it("fetchConversionRates stores rates returned by the service", async () => {
    vi.mocked(getCurrencyCodes).mockResolvedValueOnce({});
    vi.mocked(getCurrencyConversion).mockResolvedValueOnce({ usd: 1.23 });

    const { result } = renderHook(() => useConversion());

    await result.current.fetchConversionRates("eur");

    await waitFor(() => {
      expect(result.current.conversionRates).toEqual({ usd: 1.23 });
    });

    expect(getCurrencyConversion).toHaveBeenCalledWith("eur");
  });
});

