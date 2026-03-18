import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CurrencySelect } from "./CurrencySelect";

vi.mock("../hooks/useConversion", () => {
  return {
    default: () => ({
      currencyCodes: {
        eur: "Euro",
        usd: "United States Dollar",
      },
    }),
  };
});

describe("CurrencySelect", () => {
  it("renders options from currencyCodes and calls onChange", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();

    render(<CurrencySelect value="eur" onChange={onChange} />);

    const select = screen.getByRole("combobox");
    expect(select).toHaveValue("eur");

    expect(
      screen.getByRole("option", { name: "Euro (EUR)" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("option", { name: "United States Dollar (USD)" }),
    ).toBeInTheDocument();

    await user.selectOptions(select, "usd");
    expect(onChange).toHaveBeenCalled();
  });
});
