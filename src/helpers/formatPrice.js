/**
 * Takes a Number (integer or float)and returns a formatted price
 * in dollars and cents
 * Example: formatPrice(7.2); // "$7.20"
 * Example: formatPrice(7); // "$7.00"
 * Example: formatPrice(2.34999); // "$2.35"
 *
 * @param {Number} price
 * @returns {string} The formatted price
 */
const formatPrice = (price) => `$${price.toFixed(2)}`;

export default formatPrice;
