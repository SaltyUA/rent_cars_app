import { useEffect } from 'react';
import sprite from '../../assets/images/sprite.svg';
import {
  ModalContainer,
  CloseBtnWrapper,
  BackdropModal,
  ModalCarWrap,
  ModalCard,
  ModalImgWrap,
  ModalDescriptionWrap,
  Block,
  ModalTitleH3,
  Description,
  ModalTitleH4,
  ConditionsList,
  ConditionsItem,
} from './Modal.styled';
import {
  Button,
  DescriptItem,
  DescriptList,
  DescriptListWrap,
  Span,
} from '../CarItem/CarItem.styled';
import { formatMileage } from '../../utils/formatMileage';
import { useDispatch, useSelector } from 'react-redux';
import { selectModalCar } from '../../redux/selectors';
import { setIsShowModal } from '../../redux/modal/slice';

export const Modal = () => {
  const {
    id,
    make,
    model,
    year,
    img,
    rentalPrice,
    mileage,
    type,
    functionalities,
    address,
    fuelConsumption,
    engineSize,
    description,
    accessories,
    rentalConditions,
  } = useSelector(selectModalCar);
  const dispatch = useDispatch();

  const cityCountryFormat = address?.split(', ').slice(-2);
  const conditionsArr = rentalConditions.split('\n');

  const age = (conditionWithAge) => {
    const conditionWithAgeArr = conditionWithAge.split(': ');
    return conditionWithAgeArr;
  };

  const onKeyDown = (e) => {
    if (e.code === 'Escape') {
      dispatch(setIsShowModal(false));
    }
  };

  const onClickClose = () => {
    dispatch(setIsShowModal(false));
  };

  const onClickBackDrop = (e) => {
    if (e.currentTarget === e.target) {
      dispatch(setIsShowModal(false));
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  });

  return (
    <BackdropModal onClick={onClickBackDrop}>
      <ModalContainer>
        <CloseBtnWrapper onClick={onClickClose}>
          <use href={`${sprite}#icon-x`} />
        </CloseBtnWrapper>
        <ModalCarWrap>
          <ModalCard>
            <ModalImgWrap $url={img} />
            <ModalDescriptionWrap>
              <Block>
                <ModalTitleH3>
                  {make}
                  <Span> {model}</Span>, {year}
                </ModalTitleH3>
                <DescriptListWrap>
                  <DescriptList>
                    <DescriptItem>{cityCountryFormat[0]}</DescriptItem>
                    <DescriptItem>{cityCountryFormat[1]}</DescriptItem>
                    <DescriptItem>Id: {id}</DescriptItem>
                    <DescriptItem>Year: {year}</DescriptItem>
                    <DescriptItem>Type: {type}</DescriptItem>
                  </DescriptList>
                  <DescriptList>
                    <DescriptItem>
                      Fuel Consumption: {fuelConsumption}
                    </DescriptItem>
                    <DescriptItem>Engine Size: {engineSize}</DescriptItem>
                  </DescriptList>
                </DescriptListWrap>
                <Description>{description}</Description>
              </Block>
              <Block>
                <ModalTitleH4>Accessories and functionalities:</ModalTitleH4>
                <DescriptListWrap>
                  <DescriptList>
                    {accessories?.map((item) => (
                      <DescriptItem key={item + '-key'}>{item}</DescriptItem>
                    ))}
                  </DescriptList>
                  <DescriptList>
                    {functionalities?.map((item) => (
                      <DescriptItem key={item + '-key'}>{item}</DescriptItem>
                    ))}
                  </DescriptList>
                </DescriptListWrap>
              </Block>
              <Block>
                <ModalTitleH4>Rental Conditions:</ModalTitleH4>
                <DescriptListWrap $gap="8px">
                  <ConditionsList>
                    <ConditionsItem>
                      {age(conditionsArr[0])[0]}:
                      <Span>{age(conditionsArr[0])[1]}</Span>
                    </ConditionsItem>
                    <ConditionsItem>{conditionsArr[1]}</ConditionsItem>
                  </ConditionsList>
                  <ConditionsList>
                    <ConditionsItem>{conditionsArr[2]}</ConditionsItem>
                    <ConditionsItem>
                      Mileage: <Span>{formatMileage(mileage)}</Span>
                    </ConditionsItem>
                    <ConditionsItem>
                      Price: <Span>{rentalPrice}</Span>
                    </ConditionsItem>
                  </ConditionsList>
                </DescriptListWrap>
              </Block>
            </ModalDescriptionWrap>
          </ModalCard>
          <Button
            width="148px"
            onClick={() => (window.location.href = 'tel:+380730000000')}
          >
            Rental car
          </Button>
        </ModalCarWrap>
        ;
      </ModalContainer>
    </BackdropModal>
  );
};
