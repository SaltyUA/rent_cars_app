import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
  background-color: #000;
  border-bottom: 1px solid #fff;
`;

export const LogoLink = styled(Link)`
  width: 200px;
`;

export const NavWrap = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const Navigation = styled.nav`
  padding: 20px 96px;
  margin: 0 auto;
  width: 1440px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const StyledLink = styled(NavLink)`
  padding: 8px 16px;
  color: #ffffff; /* White text color */

  border-radius: 20px;
  transition:
    color 0.3s,
    text-shadow 0.3s,
    border 0.3s;
  border: 1px solid #ffffff;

  &:hover,
  &:focus {
    color: #00baff; /* Blue text color on hover/focus */
    text-shadow:
      0 0 5px #00baff,
      0 0 10px #00baff,
      0 0 20px #00baff,
      0 0 40px #00baff,
      0 0 80px #00baff;

    border-color: #00baff;
  }

  &.active {
    color: #00baff;
    text-shadow:
      0 0 5px #00baff,
      0 0 10px #00baff,
      0 0 20px #00baff,
      0 0 40px #00baff,
      0 0 80px #00baff;

    border-color: #00baff;
  }
`;
