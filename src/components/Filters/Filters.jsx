import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  ButtonSearch,
  Form,
  InputWrap,
  Label,
  WrapSecondInput,
  firstSelectStyles,
  secondSelectStyles,
  MileageInputWrap,
  PriceInputText,
  PriceInputSymbol,
  MileageInputText,
  MileageInput,
} from './Filters.styled';
import Select from 'react-select';
import { formatMileage } from '../../utils/formatMileage';
import { selectCarBrands } from '../../redux/selectors';
import { filterSet } from '../../redux/filter/slice';

export const Filters = () => {
  const dispatch = useDispatch();
  const carBrands = useSelector(selectCarBrands);

  const [brand, setBrand] = useState({ value: 'all', label: 'Enter the text' });
  const [toPrice, setToPrice] = useState({ value: 'all', label: '' });
  const [mileageTo, setMileageTo] = useState('');
  const [mileageFrom, setMileageFrom] = useState('');
  const [formatedPriceTo, setformatedPriceTo] = useState('');
  const [formatedPriceFrom, setformatedPriceFrom] = useState('');

  const pricesArray = [{ value: 'all', label: 'All' }];
  for (let index = 10; index < 501; index += 10) {
    pricesArray.push({ value: index, label: index });
  }

  const handleSubmit = () => {
    if (mileageFrom !== '' && mileageTo === '') setMileageTo(99998);
    else if (mileageTo !== '' && mileageFrom === '') setMileageFrom(1);

    if (mileageFrom === 1 && mileageTo === 99998) {
      setMileageFrom('');
      setMileageTo('');
    }

    const commonFilter = {
      brand: brand.value,
      priceTo: toPrice.value,
      mileage: {
        from: mileageFrom,
        to: mileageTo,
      },
    };
    dispatch(filterSet(commonFilter));
  };

  const handleChange = (e) => {
    const { value } = e.target;
    const valueWithComa = formatMileage(value);

    switch (e.target.name) {
      case 'mileageFrom':
        setMileageFrom(value);
        setformatedPriceFrom(valueWithComa);
        break;
      case 'mileageTo':
        setMileageTo(value);
        setformatedPriceTo(valueWithComa);
        break;
      default:
        break;
    }
  };

  return (
    <Form>
      <InputWrap>
        <Label>Car brand</Label>
        <Select
          onChange={setBrand}
          options={carBrands}
          isSearchable
          styles={firstSelectStyles}
          value={brand}
        />
      </InputWrap>
      <InputWrap>
        <Label>Price/ 1 hour</Label>
        <Select
          onChange={setToPrice}
          options={pricesArray}
          isSearchable
          styles={secondSelectStyles}
          value={toPrice}
        />
        <PriceInputText>To</PriceInputText>
        <PriceInputSymbol>$</PriceInputSymbol>
      </InputWrap>
      <InputWrap>
        <Label>Сar mileage / km</Label>
        <MileageInputWrap>
          <MileageInput
            type="number"
            name="mileageFrom"
            value={mileageFrom}
            onChange={handleChange}
            min="1"
            max="99998"
            $radius="14px 0px 0px 14px"
            $border="1px solid rgba(138, 138, 137, 0.20)"
          />
          <MileageInputText>From : {formatedPriceFrom}</MileageInputText>
          <WrapSecondInput>
            <MileageInput
              type="number"
              name="mileageTo"
              value={mileageTo}
              onChange={handleChange}
              min={mileageFrom}
              max="99999"
              $radius="0px 14px 14px 0px"
              $padding="14px 14px 14px 48px"
            />
            <span></span>
            <MileageInputText>To : {formatedPriceTo}</MileageInputText>
          </WrapSecondInput>
        </MileageInputWrap>
      </InputWrap>
      <ButtonSearch type="button" onClick={handleSubmit}>
        Search
      </ButtonSearch>
    </Form>
  );
};
