import { Container } from '../../App.styled';
import { CarsList } from '../../components/CarsList/CarsList';
import { Filters } from '../../components/Filters/Filters';

const Catalog = () => {
  return (
    <Container>
      <Filters />
      <CarsList />
    </Container>
  );
};

export default Catalog;
