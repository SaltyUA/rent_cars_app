import styled from 'styled-components';
import background from '../../assets/images/bc-des-x1.webp';
import { Link } from 'react-router-dom';

export const BackgroundContainer = styled.div`
  background: radial-gradient(
      circle,
      rgba(0, 0, 0, 0.3785889355742297) 0%,
      rgba(49, 110, 158, 0.5) 48%,
      rgba(0, 0, 0, 0.9332107843137255) 100%
    ),
    url(${background});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: top right;
  background-color: #313131;
  height: 90vh;
`;

export const Title = styled.h1`
  font-size: 50px;
  font-weight: 600;
  color: #121417;
  text-shadow:
    0 0 5px #00baff,
    0 0 10px #00baff,
    0 0 20px #00baff,
    0 0 40px #00baff,
    0 0 80px #00baff;
`;

export const SubText = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  color: #ffffff;
  width: 350px;
`;

export const StartButton = styled(Link)`
  display: inline-block;
  margin-top: 20px;

  font-weight: 600;
  font-weight: 14px;
  line-height: calc(20 / 14);
  color: #fff;

  padding: 12px 50px;
  border-radius: 12px;

  background-color: #3470ff;

  transition: background-color 0.3s;

  &:is(:hover, :focus) {
    background-color: #0b44cd;
  }
`;
