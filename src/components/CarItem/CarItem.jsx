import {
  Button,
  CarCard,
  CarItemStyle,
  DescriptItem,
  DescriptList,
  DescriptListWrap,
  DescriptionWrap,
  Heart,
  ImgWrap,
  Span,
  TitleH3,
  TitleWrap,
} from './CarItem.styled';
import sprite from '../../assets/images/sprite.svg';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavoriteCars } from '../../redux/selectors';
import { addFavoriteCar, deleteFavoriteCar } from '../../redux/favorite/slice';
import { setIsShowModal, setModalCar } from '../../redux/modal/slice';

export const CarItem = ({ car }) => {
  const dispatch = useDispatch();
  const favoriteCarsId = useSelector(selectFavoriteCars);

  const {
    id,
    make,
    model,
    year,
    img,
    rentalPrice,
    rentalCompany,
    type,
    functionalities,
    address,
  } = car;
  const cityCountry = address?.split(', ').slice(-2);

  const [isCarFavorite, setIsCarFavorite] = useState(false);

  useEffect(() => {
    if (favoriteCarsId?.some((car) => car.id === id)) {
      setIsCarFavorite(true);
    } else {
      setIsCarFavorite(false);
    }
  }, [favoriteCarsId, id]);

  const onClickHeart = () => {
    isCarFavorite
      ? dispatch(deleteFavoriteCar(id))
      : dispatch(addFavoriteCar(car));
  };

  const handleModal = () => {
    dispatch(setIsShowModal(true));
    dispatch(setModalCar(car));
  };

  return (
    <CarItemStyle>
      <CarCard>
        <ImgWrap $url={img}>
          <Heart
            onClick={onClickHeart}
            fill={isCarFavorite ? '#3470FF' : 'none'}
            stroke={isCarFavorite ? '#3470FF' : ' #FFF'}
          >
            <use href={`${sprite}#icon-heart`} />
          </Heart>
        </ImgWrap>
        <DescriptionWrap>
          <TitleWrap>
            <TitleH3>
              {make} <Span>{model}</Span>, {year}
            </TitleH3>
            <p>{rentalPrice}</p>
          </TitleWrap>
          <DescriptListWrap height="36px">
            <DescriptList $overflow="hidden">
              <DescriptItem>{cityCountry[0]}</DescriptItem>
              <DescriptItem>{cityCountry[1]}</DescriptItem>
              <DescriptItem>{rentalCompany}</DescriptItem>
              <DescriptItem>Premium</DescriptItem>
            </DescriptList>
            <DescriptList $overflow="hidden">
              <DescriptItem>{type}</DescriptItem>
              <DescriptItem>{make}</DescriptItem>
              <DescriptItem>{model}</DescriptItem>
              <DescriptItem>{id}</DescriptItem>
              <DescriptItem>{functionalities[0]}</DescriptItem>
            </DescriptList>
          </DescriptListWrap>
        </DescriptionWrap>
      </CarCard>
      <Button onClick={handleModal}>Learn more</Button>
    </CarItemStyle>
  );
};
