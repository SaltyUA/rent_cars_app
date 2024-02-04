export const createBrandsObject = (catalog) => {
  const brands = catalog?.map((car) => car.make);
  const uniqueBrandsArray = brands.filter(
    (brand, index, array) => array.indexOf(brand) === index
  );
  const uniqueBrandsObject = [
    { value: '', label: 'All Brands' },
    ...uniqueBrandsArray.map((brand) => {
      return { value: brand, label: brand };
    }),
  ];
  return uniqueBrandsObject;
};
