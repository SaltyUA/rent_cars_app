export const formatPrice = (price) => {
  const result = parseInt(price.replace('$', ''));
  return result;
};
