import { React } from 'react';

import styled from 'styled-components';
import { AppBar, Toolbar, Box, Button } from '@mui/material';

const NavBar = styled(AppBar)`
  display: flex;
  width: 100vh;
  height: 100vh;
  background-image: url('./MainPhoto2.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const NavLinks = styled(Toolbar)`
  color: #ffffff;
  font-family: 'Poiret One';
  font-weight: 600;
  font-size: 30px;
  display: flex;
  height: 100px;
  background-color: #00000020;
`;

const Logo = styled(Box)`
  font-size: 20px;
  letter-spacing: 8px;
  text-transform: uppercase;
  margin-left: 40px;
  margin-right: auto;
  &:hover {
    cursor: pointer;
  }
`;

const NavButton = styled(Button)`
  letter-spacing: 1px !important;
  text-transform: none !important;
  color: #ffffff !important;
  font-size: 20px !important;
  padding-left: 20px !important;
  padding-right: 20px !important;
  border-radius: 50px !important;
`;

function Navbar() {
  return (
    <NavBar position="static" style={{ boxShadow: '#36384c 0px 5px 15px' }}>
      <NavLinks>
        <Logo>Анна Бурлакова</Logo>
        <NavButton>Про Себе</NavButton>
        <NavButton>Портфоліо</NavButton>
        <NavButton>Послуги</NavButton>
        <NavButton>Відгуки</NavButton>
        <NavButton>Контакти</NavButton>
      </NavLinks>
    </NavBar>
  );
}

export default Navbar;
