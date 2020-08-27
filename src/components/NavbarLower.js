import React from "react";
import { styled } from "linaria/react";
import Breadcrumbs from "./Breadcrumbs";
import Search from "./search";
const searchIndices = [{ name: `Pages`, title: `Pages` }];

const Section = styled.div`
  background: #fff;
  margin: 0 auto;
  max-width: 980px;
  padding: 2.5em 12px 0.5em;
  position: relative;
  width: 100%;
  @media (min-width: 480px) {
    padding: 0.5em 100px 12px;
  }
`;

const SearchCont = styled.div`
  position: absolute;
  right: 12px;
  top: 0;
  z-index: 100;
  @media (min-width: 992px) {
    right: 4px;
  }
`;

const NavbarLower = (props) => {
  return (
    <Section>
      <Breadcrumbs path={props.path} />
      <SearchCont>
        <Search indices={searchIndices} />
      </SearchCont>
    </Section>
  );
};

export default NavbarLower;
