import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container } from '../../App.styled';
import {
  CarsListStyle,
  EmptyPage,
} from '../../components/CarsList/CarsList.styled';
import { selectFavoriteCars } from '../../redux/selectors';
import { CarItem } from '../../components/CarItem/CarItem';

const Favorite = () => {
  const favoriteCars = useSelector(selectFavoriteCars);

  return (
    <Container>
      {favoriteCars?.length > 0 ? (
        <CarsListStyle>
          {favoriteCars?.map((car, index) => (
            <CarItem car={car} key={car.id} index={index} />
          ))}
        </CarsListStyle>
      ) : (
        <EmptyPage>
          <p>
            Please select your favorite cars in the{' '}
            <Link to="/catalog">Сatalog</Link>.
          </p>
        </EmptyPage>
      )}
    </Container>
  );
};

export default Favorite;
