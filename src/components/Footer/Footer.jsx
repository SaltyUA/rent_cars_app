import { FooterStyle, LinkStyle } from './Footer.styled';

const Footer = () => {
  return (
    <footer>
      <FooterStyle>
        <p>Contact us:</p>
        <LinkStyle href="tel:+380730000000" target="_blank">
          +380730000000
        </LinkStyle>
        <p>Developed by Vladyslav Litvishko</p>
      </FooterStyle>
    </footer>
  );
};

export default Footer;
