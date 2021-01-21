import {
  Box,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  useDisclosure,
} from "@chakra-ui/core";
import { Link } from "gatsby";
import React, { useState } from "react";
import styled from "styled-components";
import { navLinks } from "../../constants/nav";
import CartLink from "../CartLink";
import CtaButton from "../CtaButton";
// import Search from "../search";
const searchIndices = [{ name: `Pages`, title: `Pages` }];
// const { SubMenu } = Menu;

const SubNavBar = () => {
  const [current, setCurrent] = useState("mail");
  const [drawerVisible, setDrawerVisible] = useState(false);

  const handleClick = (e) => {
    setCurrent(e.key);
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <NavCont>
      <Nav>
        <Flex
          justify="space-between"
          flexWrap="nowrap"
          display={["none", "none", "flex"]}
        >
          <CtaButton
            link="https://www.crowdfunder.co.uk/apf/step/basics/7nPGOrqW"
            text="Fundraise for us"
            placement="header"
          />
          <CtaButton
            link="https://www.charitycheckout.co.uk/1113786/"
            text="Donate"
            placement="header"
          />
        </Flex>
        <MobileNav>
          <NavIcons>
            <Flex justify="space-between" flexWrap="nowrap">
              <Box display={["none", "flex"]}>
                <CtaButton
                  link="https://www.crowdfunder.co.uk/apf/step/basics/7nPGOrqW"
                  text="Fundraise for us"
                  placement="header"
                />
              </Box>
              <CtaButton
                link="https://www.charitycheckout.co.uk/1113786/"
                text="Donate"
                placement="header"
              />
            </Flex>
            <IconsCont>{/* <Search indices={searchIndices} /> */}</IconsCont>
            <IconsCont>
              <CartLink variant="orange" />
            </IconsCont>
            <IconsCont>
              <MobileNavIcon
                type="primary"
                onClick={onOpen}
                ref={btnRef}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <title>Hamburger</title>
                <path
                  d="M24,19v2a1,1,0,0,1-1,1H1a.94.94,0,0,1-.7-.3A1,1,0,0,1,0,21V19a1,1,0,0,1,.3-.7A.94.94,0,0,1,1,18H23a1,1,0,0,1,1,1Zm0-8v2a.94.94,0,0,1-.3.7,1,1,0,0,1-.7.3H1a.94.94,0,0,1-.7-.3A.94.94,0,0,1,0,13V11a.94.94,0,0,1,.3-.7A.94.94,0,0,1,1,10H23a1,1,0,0,1,.7.3A.94.94,0,0,1,24,11Zm0-8V5a1,1,0,0,1-1,1H1a.94.94,0,0,1-.7-.3A1,1,0,0,1,0,5V3a.94.94,0,0,1,.3-.7A.94.94,0,0,1,1,2H23a1,1,0,0,1,.7.3A.94.94,0,0,1,24,3Z"
                  fill="#f99d1c"
                />
              </MobileNavIcon>
            </IconsCont>
          </NavIcons>
        </MobileNav>

        <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent backgroundColor="#fff">
            <DrawerCloseButton />
            <Menu>
              {navLinks.map((link, i) => (
                <>
                  {link.length > 1 ? (
                    <li>
                      <label for={`m${i}`}>{link[0].name}</label>
                      <input type="checkbox" id={`m${i}`} />
                      <ul>
                        {link[1].map((subMenu) => (
                          <>
                            <li>
                              <Link to={subMenu.url}>{subMenu.name}</Link>
                            </li>
                          </>
                        ))}
                      </ul>
                    </li>
                  ) : (
                    <li>
                      <Link to={link[0].url}>{link[0].name}</Link>
                    </li>
                  )}
                </>
              ))}
            </Menu>
          </DrawerContent>
        </Drawer>
      </Nav>
    </NavCont>
  );
};

const NavCont = styled.div`
  background: rgba(255, 255, 255, 0.7);
  position: sticky;
  top: 0;
  z-index: 7;
`;
const Nav = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-wrap: nowrap;
  margin: 0 auto;
  max-width: 1060px;
  width: 100%;
`;

const BtnsCont = styled.div`
  display: flex;
`;

const IconsCont = styled.div`
  align-items: center;
  display: flex;
  height: 41px;
  justify-content: center;

  // width: 35px;
`;

const Menu = styled.ul`
  font-size: 1em;
  padding: 1em;

  &,
  & ul {
    list-style-type: none;
  }

  & ul {
    max-height: 0;
    opacity: 0;
    transition: all 0.5s;
    visibility: hidden;
  }

  & li {
    margin-bottom: 0.5em;
  }
  & label {
    color: #b75906;
    cursor: pointer;
  }
  & input[type="checkbox"] {
    display: none;
  }
  & input:checked + ul {
    max-height: 999px;
    opacity: 1;
    visibility: visible;
  }
`;

const MobileNav = styled.div`
  align-items: flex-end;
  height: 48px;
  justify-content: flex-end;
  margin: 4px 16px 0 0;
  position: sticky;
  text-transform: uppercase;
  top: 10px;
  width: 100%;
  @media (min-width: 370px) {
    flex-direction: row;
  }
  @media (min-width: 768px) {
    display: none;
  }
`;

const NavIcons = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const MobileNavIcon = styled.svg`
  cursor: pointer;
  display: block;
  fill: #fff;
  height: 28px;
  width: 28px;
`;

const NavMenu = styled.div`
  min-width: 450px;
`;

export default SubNavBar;
