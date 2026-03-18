import { describe, expect, it } from "vitest";
import { renderHook } from "@testing-library/react";
import { CurrencyProvider, useCurrency } from "./CurrencyContext";

describe("CurrencyContext", () => {
  it("throws if useCurrency is used outside CurrencyProvider", () => {
    expect(() => renderHook(() => useCurrency())).toThrow(
      /within a CurrencyProvider/i,
    );
  });

  it("provides default values inside the provider", () => {
    const { result } = renderHook(() => useCurrency(), {
      wrapper: ({ children }) => <CurrencyProvider>{children}</CurrencyProvider>,
    });

    expect(result.current.amount).toBe(0);
    expect(result.current.fromCurrency).toBe("eur");
    expect(result.current.toCurrency).toBe("usd");
    expect(typeof result.current.setAmount).toBe("function");
  });
});

