import { FooterBack, StyledLink, Title } from './Footer.styled';

export const Footer = () => {
  return (
    <FooterBack>
      <Title>General information</Title>
      <ul>
        <li>
          <StyledLink to="#">Media center</StyledLink>
        </li>
        <li>
          <StyledLink to="#">Privacy</StyledLink>
        </li>
        <li>
          <StyledLink to="#">Contact us</StyledLink>
        </li>
      </ul>
    </FooterBack>
  );
};
