const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: "CAD",
  style: "currency",
  minimumFractionDigits: 0,
});

export function formatCurrency(value: number) {
    return CURRENCY_FORMATTER.format(value);
}