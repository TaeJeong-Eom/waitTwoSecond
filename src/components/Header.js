import React from 'react';
import logo from '../logo.svg';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  width: 100%;
  background-color: #282c34;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
`;

const LogoTitle = styled.div`
  display: flex;
  align-items: center;
`;

const AppLogo = styled.img`
  height: 40vmin;
  pointer-events: none;
`;

const AppTitle = styled.h1`
  font-size: 1.5em;
`;

const AppMenu = styled.nav`
  margin-top: 20px;
`;

function Header() {
  return (
    <HeaderContainer>
      <LogoTitle>
        <AppLogo src={logo} alt="logo" />
        <AppTitle>My React Plan</AppTitle>
      </LogoTitle>
      <AppMenu>
        {/* Navigation items can be added here */}
      </AppMenu>
    </HeaderContainer>
  );
}

export default Header;
