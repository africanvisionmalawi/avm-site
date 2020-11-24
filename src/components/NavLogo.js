import React from "react";
// import PropTypes from 'prop-types'
import { Link } from "gatsby";
import styled from "styled-components";
import logo from "../img/logo-full.png";
// import heroStyles from './heroimage.module.css'

const LogoLink = styled(Link)`
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  display: block;
  height: 120px;
  position: absolute;
  top: 0;
  width: auto;
  z-index: 2000;
  @media (min-width: 768px) {
    height: 160px;
  }
`;
const LogoImg = styled.img`
  display: block;
  height: 120px;
  width: auto;
  @media (min-width: 768px) {
    height: 160px;
  }
`;

const NavLogo = styled.figure`
  margin-bottom: 0;
`;

const navLogo = Û => (
  <LogoLink to="/">
    <NavLogo>
      <LogoImg src={logo} alt="" />
    </NavLogo>
  </LogoLink>
);

export default navLogo;
