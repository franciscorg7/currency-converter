const getSymbol = (code: string, locale = "en-US") => {
  const formatter = new Intl.NumberFormat(locale, {
    style: "currency",
    currency: code,
  });

  return (
    formatter.formatToParts(0).find((part) => part.type === "currency")
      ?.value ?? ""
  );
};

const formatCurrency = (amount: number, code: string, locale = "en-US") => {
  const formatter = new Intl.NumberFormat(locale, {
    style: "currency",
    currency: code,
  });

  return formatter.format(amount);
};

export { getSymbol, formatCurrency };
