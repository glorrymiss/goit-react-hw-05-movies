import { FooterBack, List, StyledLink } from './Footer.styled';

export const Footer = () => {
  return (
    <FooterBack>
      <List>
        <li>
          <StyledLink to="#">Media center</StyledLink>
        </li>
        <li>
          <StyledLink to="#">Privacy</StyledLink>
        </li>
        <li>
          <StyledLink to="#">Contact us</StyledLink>
        </li>
      </List>
    </FooterBack>
  );
};
