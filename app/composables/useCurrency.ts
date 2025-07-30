export const useCurrency = (localeCode: string, currencyCode: string) => {
  const currency = (amount: number) => {
    return amount.toLocaleString(localeCode, { style: 'currency', currency: currencyCode });
  }
  return { currency };
}
