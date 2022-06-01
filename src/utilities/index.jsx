/**
 * @function formatCurrency
 * Format numbar as currency (US Dollars)
 *
 * @param {number}} number
 * @returns {string} number formatted as currency
 *
 * @example
 *  formatCurrency(0)
 *  // => $0.00
 *  @example
 *  formatCurrency(1.5)
 *  // => $1.50
 * 
 */
export function formatCurrency(number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(number);
}
