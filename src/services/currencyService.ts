import { api } from "../api/axiosConfig";

export const getCurrencyCodes = async () => {
  const response = await api.get("/currencies.json");
  return response.data as Record<string, string>;
};

export const getCurrencyConversion = async (from: string) => {
  const response = await api.get(`/currencies/${from}.json`);
  return response.data?.[from] as Record<string, number>;
};
