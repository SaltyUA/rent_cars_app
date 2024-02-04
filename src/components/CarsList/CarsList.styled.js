import styled from 'styled-components';

export const CarsListStyle = styled.ul`
  display: flex;
  flex-wrap: wrap;
  row-gap: 50px;
  column-gap: 29px;
  margin-bottom: 100px;
`;

export const LoadMore = styled.button`
  display: ${(props) => props.display || 'block'};
  color: #3470ff;
  font-size: 16px;
  font-weight: 500;
  text-decoration-line: underline;
  margin: 0 auto;
  padding: 15px;
  cursor: pointer;

  &:hover,
  &:focus {
    color: #3470ff;
  }
`;
export const EmptyPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 22px;
  color: #3470ff75;
  margin: 0 auto;
`;
