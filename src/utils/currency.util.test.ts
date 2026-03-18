import { describe, expect, it } from "vitest";
import { formatCurrency, getSymbol } from "./currency.util";

describe("currency.util", () => {
  it("getSymbol returns the currency symbol for a code", () => {
    expect(getSymbol("USD", "en-US")).toBe("$");
    expect(getSymbol("EUR", "en-US")).toBe("€");
  });

  it("formatCurrency formats amounts using the given currency code", () => {
    expect(formatCurrency(12.5, "USD", "en-US")).toBe("$12.50");
    expect(formatCurrency(0, "EUR", "en-US")).toBe("€0.00");
  });
});

