import React, { useState } from "react";
import { Link } from "gatsby";
import { Box, Flex, useDisclosure } from "@chakra-ui/core";
import { navLinks } from "../../constants/nav";
import CartLink from "../CartLink";
import styled from "styled-components";
// import Search from "../search";
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
    <>
      <DesktopNav>
        <Flex justify="space-between" align="center" ml="120px" width="100%">
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
                              <Link to={subMenu.url}>{subMenu.name}</Link>
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
          <Flex flexWrap="nowrap">
            <IconCont>{/* <Search indices={searchIndices} /> */}</IconCont>
            <IconCont>
              <CartLink />
            </IconCont>
          </Flex>
        </Flex>
      </DesktopNav>
    </>
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
    z-index: 2000;
  }
  & ul li {
    display: flex;
    flex-wrap: nowrap;
    font-size: 0.9em;
    line-height: 1.4;
    padding: 8px 0;
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

  text-transform: uppercase;

  @media (min-width: 768px) {
    align-items: middle;
    display: flex;
  }
`;

const IconCont = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  right: 40px;
  top: 0;
  width: 35px;
`;

const NavIcons = styled.div`
  display: flex;
`;

export default Navbar;
