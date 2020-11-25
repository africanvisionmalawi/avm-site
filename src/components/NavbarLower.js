import React from "react";
import { styled } from "linaria/react";
import Breadcrumbs from "./Breadcrumbs";
// import Search from "./search";
// const searchIndices = [{ name: `Pages`, title: `Pages` }];

const Section = styled.div`
  background: #fff;
  margin: 0 auto;
  max-width: 1080px;
  padding: 2.5em 12px 0.5em;
  position: relative;
  width: 100%;
  & div {
    display: none;
  }
  @media (min-width: 480px) {
    & div {
      display: block;
    }
    padding: 0.5em 100px 12px;
  }
  @media (min-width: 768px) {
    padding: 0.5em 0 12px 120px;
  }
  @media (min-width: 1140px) {
    padding: 0.5em 0 12px 80px;
  }
`;

// const SearchCont = styled.div`
//   position: absolute;
//   right: 12px;
//   top: 0;
//   z-index: 100;
//   @media (min-width: 992px) {
//     right: 4px;
//   }
// `;

const NavbarLower = (props) => {
  return <Section>{props.path && <Breadcrumbs path={props.path} />}</Section>;
};

export default NavbarLower;
