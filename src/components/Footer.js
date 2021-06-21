import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const maxWidth = '999px';
const minWidth = '1000px';

const Container = styled.div`
  @media screen and (max-width: ${maxWidth}) {
    display: ${(prop) => (!prop.menuProp ? 'initial' : 'none')};
  }
`;

const Footer = () => {
  const navOpen = useSelector((state) => state.nav.navOpen);

  return (
    <Container menuProp={navOpen}>
      <nav-bottom>
        <div>Our company</div>

        <ul>
          <li>How we work</li>
          <li>Why Insure?</li>
          <li>View plans</li>
          <li>Reviews</li>
        </ul>

        <div>Help me</div>

        <div>FAQ</div>
        <ul>
          <li>Terms of use</li>
          <li>Privacy policy</li>
          <li>Cookies</li>
        </ul>

        <div>Contact</div>

        <ul>
          <li>Sales</li>
          <li>Support</li>
          <li>Live chat</li>
        </ul>

        <div>Others</div>

        <ul>
          <li>Careers</li>
          <li>Press</li>
          <li>Licenses</li>
        </ul>
      </nav-bottom>
    </Container>
  );
};

export default Footer;
