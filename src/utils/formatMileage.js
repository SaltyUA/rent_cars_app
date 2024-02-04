export const formatMileage = (mileage) => {
  const mileageLength = mileage.toString().length;
  if (mileageLength <= 3) {
    return mileage;
  }
  const mileageStringArr = mileage.toString().split('');
  mileageStringArr.splice(mileageLength - 3, 0, ',');
  return mileageStringArr.join('');
};
