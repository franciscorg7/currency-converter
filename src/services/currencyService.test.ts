import { describe, expect, it, vi } from "vitest";
import { getCurrencyCodes, getCurrencyConversion } from "./currencyService";

vi.mock("../api/axiosConfig", () => {
  return {
    api: {
      get: vi.fn(),
    },
  };
});

// Import after mock so we can access the same instance
import { api } from "../api/axiosConfig";

describe("currencyService", () => {
  it("getCurrencyCodes requests /currencies.json and returns the data", async () => {
    vi.mocked(api.get).mockResolvedValueOnce({
      data: { eur: "Euro", usd: "United States Dollar" },
    } as never);

    await expect(getCurrencyCodes()).resolves.toEqual({
      eur: "Euro",
      usd: "United States Dollar",
    });

    expect(api.get).toHaveBeenCalledWith("/currencies.json");
  });

  it("getCurrencyConversion requests /currencies/{from}.json and returns the nested rates", async () => {
    vi.mocked(api.get).mockResolvedValueOnce({
      data: { eur: { usd: 1.23, gbp: 0.85 } },
    } as never);

    await expect(getCurrencyConversion("eur")).resolves.toEqual({
      usd: 1.23,
      gbp: 0.85,
    });

    expect(api.get).toHaveBeenCalledWith("/currencies/eur.json");
  });
});

