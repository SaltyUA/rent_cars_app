import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CarsListStyle, EmptyPage, LoadMore } from './CarsList.styled';
import {
  selectAllCars,
  selectCars,
  selectFilter,
  selectFilterCars,
  selectIsLoading,
} from '../../redux/selectors';
import { getAllCarsThunk, getCarsThunk } from '../../redux/cars/thunk';
import { filterCarsSet, filterDelete } from '../../redux/filter/slice';
import { formatPrice } from '../../utils/formatPrice';
import { perPage } from '../../api/carsAPI';
import { CarItem } from '../CarItem/CarItem';
import Skeleton from 'react-loading-skeleton';
import { resetCars } from '../../redux/cars/slice';

export const CarsList = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const cars = useSelector(selectCars);
  const allCars = useSelector(selectAllCars);
  const filterCars = useSelector(selectFilterCars);
  const filter = useSelector(selectFilter);

  const [page, setPage] = useState(0);
  const [isLoadMore, setIsLoadMore] = useState(false);

  useEffect(() => {
    allCars.length === 0 && dispatch(getAllCarsThunk());
  }, [dispatch, allCars]);

  useEffect(() => {
    if (page === 0) {
      dispatch(resetCars());
      setPage(page + 1);
      return;
    }

    dispatch(getCarsThunk(page));
  }, [dispatch, page]);

  useEffect(() => {
    if (filter === null) {
      return;
    }

    const {
      brand,
      priceTo,
      mileage: { from, to },
    } = filter;

    if (brand === 'all' && priceTo === 'all' && from === '' && to === '') {
      dispatch(filterDelete());
      return;
    }

    const filterBrandCars =
      brand !== 'all' && allCars.filter((car) => car.make === brand);

    const filterBrandPriceCars =
      priceTo !== 'all'
        ? filterBrandCars
          ? filterBrandCars.filter(
              (car) => formatPrice(car.rentalPrice) <= priceTo
            )
          : allCars.filter((car) => formatPrice(car.rentalPrice) <= priceTo)
        : false;

    let filterBrandPriceMileageCars = false;

    if (from !== '' && to !== '' && priceTo !== 'all') {
      filterBrandPriceMileageCars = filterBrandPriceCars.filter(
        (car) => car.mileage > parseInt(from) && car.mileage < parseInt(to)
      );
    } else {
      if (from !== '' && to !== '' && brand !== 'all') {
        filterBrandPriceMileageCars = filterBrandCars.filter(
          (car) => car.mileage > parseInt(from) && car.mileage < parseInt(to)
        );
      } else {
        filterBrandPriceMileageCars = allCars.filter(
          (car) => car.mileage > parseInt(from) && car.mileage < parseInt(to)
        );
      }
    }

    if (from !== '' && to !== '') {
      dispatch(filterCarsSet(filterBrandPriceMileageCars));
    } else {
      if (priceTo !== 'all') {
        dispatch(filterCarsSet(filterBrandPriceCars));
      } else {
        if (brand !== 'all') {
          dispatch(filterCarsSet(filterBrandCars));
        } else {
          return;
        }
      }
    }
  }, [dispatch, filter, allCars]);

  const totalPage = Math.ceil(allCars.length / perPage);

  const onClickLoadMore = () => {
    if (page === totalPage - 1) {
      setIsLoadMore(true);
    }
    setPage(page + 1);
  };

  return (
    <>
      {isLoading ? (
        <Skeleton count={3} width={276} height={426} inline />
      ) : filter ? (
        filterCars?.length > 0 ? (
          <CarsListStyle>
            {filterCars?.map((car) => (
              <CarItem car={car} key={car.id} />
            ))}
          </CarsListStyle>
        ) : (
          <EmptyPage>
            <p>Sorry. Nothing found for your search</p>
          </EmptyPage>
        )
      ) : (
        cars?.length > 0 && (
          <>
            <CarsListStyle>
              {cars?.map((car) => (
                <CarItem car={car} key={car.id} />
              ))}
            </CarsListStyle>
            <LoadMore
              type="button"
              onClick={onClickLoadMore}
              display={isLoadMore ? 'none' : 'block'}
            >
              Load more
            </LoadMore>
          </>
        )
      )}
    </>
  );
};
