import {
  Box,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  useDisclosure,
} from "@chakra-ui/react";
import { Link } from "gatsby";
import React, { useState } from "react";
import styled from "styled-components";
import CartLink from "../components/CartLink";
import CtaButton from "../components/CtaButton";
import { navLinks } from "../constants/nav";
import navbarStyles from "./navbar.module.css";
// import Search from "./search";
const searchIndices = [{ name: `Pages`, title: `Pages` }];
// const { SubMenu } = Menu;

const Navbar = () => {
  const [current, setCurrent] = useState("mail");
  const [drawerVisible, setDrawerVisible] = useState(false);

  const handleClick = (e) => {
    setCurrent(e.key);
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <div
      className={`navbar is-transparent ${navbarStyles.navbarTop}`}
      role="navigation"
      aria-label="main-navigation"
    >
      <DesktopNav className="main">
        <Flex align="center">
          <Box width={["100%"]}>
            <Flex justify="space-between" align="middle">
              <Box width={"100%"}>
                <div id="navMenu" className="navbar-menu">
                  <Menu>
                    {navLinks.map((link, index) => (
                      <>
                        {link.length > 1 ? (
                          <li>
                            <Link to={link[0].url}>{link[0].name}</Link>
                            <ul>
                              {link[1].map((subMenu) => (
                                <>
                                  {!subMenu.mobileOnly && (
                                    <li>
                                      <Link to={subMenu.url}>
                                        {subMenu.name}
                                      </Link>
                                    </li>
                                  )}
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
                </div>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </DesktopNav>
      <DesktopNav>
        <div className={navbarStyles.navbarBtns}>
          <CtaButton
            link="https://www.crowdfunder.co.uk/apf/step/basics/7nPGOrqW"
            text="Fundraise for us"
            className={navbarStyles.navBarBtn}
          />
          <CtaButton
            link="https://www.charitycheckout.co.uk/1113786/"
            text="Donate"
            className={navbarStyles.navBarBtn}
          />
        </div>
        <NavIcons>
          <div className={navbarStyles.iconCont}>
            {/* <Search indices={searchIndices} /> */}
          </div>
          <div className={navbarStyles.iconCont}>
            <CartLink />
          </div>
        </NavIcons>
      </DesktopNav>
      <MobileNav>
        <NavIcons>
          <CtaButton
            link="https://www.charitycheckout.co.uk/1113786/"
            text="Donate"
            className={navbarStyles.navBarBtn}
          />
          <div className={navbarStyles.iconCont}>
            {/* <Search indices={searchIndices} /> */}
          </div>
          <div className={navbarStyles.iconCont}>
            <CartLink />
          </div>
          <div className={navbarStyles.iconCont}>
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
                fill="#fff"
              />
            </MobileNavIcon>
          </div>
        </NavIcons>
      </MobileNav>

      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent backgroundColor="#fff">
          <DrawerCloseButton />
          <ul className={navbarStyles.mobileMenu}>
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
          </ul>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

const Menu = styled.ul`
  align-items: center;
  color: #fff;
  display: flex;
  height: 40px;
  justify-content: flex-start;
  margin: 0;
  min-width: 640px;
  padding: 0 8px;
  width: 100%;
  & a {
    display: block;
  }
  &,
  & li {
    list-style-type: none;
  }
  & a {
    padding: 0 8px;
  }
  & a:link,
  & a:visited {
    color: #fff;
  }
  & > li {
    align-items: center;
    display: flex;
    height: 40px;
    margin: 0 12px;
    position: relative;
  }

  & ul {
    box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
    display: block;
    margin: 0;
    min-width: 160px;
    padding: 1rem 0.5rem;
    position: absolute;
    transform: translateY(-50%);
    transition: transform 0.4s ease-in, visiblity 0.4s ease-in-out;
    visibility: hidden;
    z-index: 1000;
  }
  & ul li {
    display: flex;
    flex-wrap: nowrap;
    padding: 8px;
  }
  & ul li a {
    background: #fff;
    font-size: 0.9em;
    text-transform: capitalize;
  }
  & ul li a:hover {
  }
  & li:hover,
  & li:hover ul {
    background: #fff;
    a:link,
    a:visited {
      color: #b75906;
    }
    a:hover {
      color: #262626;
    }
  }
  & li:hover ul {
    display: block;
    top: 40px;
    transform: translateY(0);
    transition: visiblity 0.2s ease-in-out;
    visibility: visible;
  }
`;

const DesktopNav = styled.div`
  display: none;
  position: relative;
  &.main {
    text-transform: uppercase;
  }
  @media (min-width: 768px) {
    display: flex;
    &.main {
      margin: 0 1em 0 0;
    }
  }
`;

const MobileNav = styled.div`
  // align-items: flex-end;
  // display: flex;
  // flex-direction: column;
  // flex-wrap: nowrap;
  height: 48px;
  // height: 68px;
  justify-content: flex-end;
  margin: 4px 0 0;
  // overflow-y: auto;
  position: sticky;
  text-transform: uppercase;
  top: 10px;
  // -webkit-overflow-scrolling: touch;
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
`;

const MobileNavIcon = styled.svg`
  cursor: pointer;
  display: block;
  fill: #fff;
  height: 28px;
  // margin-right: 15px;
  // margin-left: 8px;
  width: 28px;
`;

const NavMenu = styled.div`
  min-width: 450px;
`;

export default Navbar;
