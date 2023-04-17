import React from 'react';
import styled from 'styled-components';
import logoIcon from '../image/logo-icon.png';

const FooterBox = styled.div`
  width: 100%;
  min-width: 800px;
  height: 322px;
  background-color: #232629;
`;

const FooterWrapper = styled.footer`
  max-width: 1264px;
  margin: 0 auto;
  padding: 32px 12px 12px;
  display: flex;
  justify-content: space-around;
  color: #9199a1;
  font-size: 13px;
`;

const FooterLogo = styled.div`
  margin: -12px 0px 32px;
  width: 32px;
  heigh: 37px;
  cursor: pointer;
`;

const FooterMenuTitle = styled.p`
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 24px;
  color: #babfc4;
  cursor: pointer;
`;

const FooterSubBox = styled.div`
  padding: 0px 12px 24px 0px;
`;
const FooterSubMenu = styled.ul`
  > li {
    margin-bottom: 8px;
    cursor: pointer;
    :hover {
      color: #babfc4;
    }
  }
`;

const LastSubBox = styled.div`
  width: 273px;
  padding: 0px 12px 24px 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 11px;
`;

const LastBoxMenu = styled.ul`
  display: flex;
  width: 260px;
  justify-content: space-between;
`;

function Footer() {
  return (
    <FooterBox>
      <FooterWrapper>
        <FooterLogo>
          <img src={logoIcon} alt="stackoverflow" />
        </FooterLogo>
        <FooterSubBox>
          <FooterMenuTitle>STACK OVERFLOW</FooterMenuTitle>
          <FooterSubMenu>
            <li>Questions</li>
            <li>Help</li>
          </FooterSubMenu>
        </FooterSubBox>
        <FooterSubBox>
          <FooterMenuTitle>PRODUCTS</FooterMenuTitle>
          <FooterSubMenu>
            <li>Teams</li>
            <li>Advertising</li>
            <li>Collectives</li>
            <li>Talent</li>
          </FooterSubMenu>
        </FooterSubBox>
        <FooterSubBox>
          <FooterMenuTitle>COMPANY</FooterMenuTitle>
          <FooterSubMenu>
            <li>About</li>
            <li>Press</li>
            <li>Work Here</li>
            <li>Legal</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Contact Us</li>
            <li>Cookie Settings</li>
            <li>Cookie Policy</li>
          </FooterSubMenu>
        </FooterSubBox>
        <FooterSubBox>
          <FooterMenuTitle>STACK EXCHANGE NETWORK</FooterMenuTitle>
          <FooterSubMenu>
            <li>Technology</li>
            <li>Culture & recreation</li>
            <li>Life & arts</li>
            <li>Science</li>
            <li>Professional</li>
            <li>Business</li>
            <br />
            <li>API</li>
            <li>Data</li>
          </FooterSubMenu>
        </FooterSubBox>
        <LastSubBox>
          <LastBoxMenu>
            <li>Blog</li>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>LinkedIn</li>
            <li>Instagram</li>
          </LastBoxMenu>
          <p>
            Site design / logo © 2023 Stack Exchange Inc; user contributions
            licensed under <span>CC BY-SA.</span> <br />
            rev 2023.2.16.43246
          </p>
        </LastSubBox>
      </FooterWrapper>
    </FooterBox>
  );
}

export default Footer;
