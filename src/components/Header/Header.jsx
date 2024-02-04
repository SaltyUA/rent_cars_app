import {
  HeaderContainer,
  LogoLink,
  NavWrap,
  Navigation,
  StyledLink,
} from './Header.styled';
import logo from '../../assets/images/logo.webp';
export const Header = () => {
  return (
    <header>
      <HeaderContainer>
        <Navigation>
          <LogoLink to="/">
            <img src={logo} alt="logo" />
          </LogoLink>
          <NavWrap>
            <StyledLink to="/catalog">Catalog</StyledLink>
            <StyledLink to="/favorites">Favorites</StyledLink>
          </NavWrap>
        </Navigation>
      </HeaderContainer>
    </header>
  );
};
