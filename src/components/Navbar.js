import React, { useState } from "react";
import { Link } from "gatsby";
import { Menu,  Col } from "antd";
import {
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Flex
} from "@chakra-ui/core";

import CtaButton from "../components/CtaButton";
import CartLink from "../components/CartLink";
import navbarStyles from "./navbar.module.css";
import styled from "styled-components";
import Search from "./search";
const searchIndices = [{ name: `Pages`, title: `Pages` }];
const { SubMenu } = Menu;

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
          <Col md={24}>
            <Flex justify="space-between" align="middle">
              <Col sm={24} md={16}>
                <Flex align="middle">
                  <div id="navMenu" className="navbar-menu">
                    <Menu
                      onClick={handleClick}
                      selectedKeys={[current]}
                      mode="horizontal"
                    >
                      <SubMenu
                        key="aboutUs"
                        title={
                          <Link
                            className={`navbar-link navbar-parent ${navbarStyles.navbarArrow}`}
                            to="/about-us"
                          >
                            About us
                          </Link>
                        }
                      >
                        <Menu.Item>
                          <Link className="navbar-item" to="/about-us/team">
                            Team
                          </Link>
                        </Menu.Item>
                        <Menu.Item>
                          <Link
                            className="navbar-item"
                            to="/about-us/where-we-work"
                          >
                            Where we work
                          </Link>
                        </Menu.Item>
                        <Menu.Item>
                          <Link
                            className="navbar-item"
                            to="/about-us/how-we-started"
                          >
                            How we started
                          </Link>
                        </Menu.Item>
                        <Menu.Item>
                          <Link
                            className="navbar-item"
                            to="/about-us/african-vision-malawi-our-new-name"
                          >
                            African Vision Malawi - our new name
                          </Link>
                        </Menu.Item>
                        <Menu.Item>
                          <Link
                            className="navbar-item"
                            to="/get-involved/thank-yous"
                          >
                            Thank yous
                          </Link>
                        </Menu.Item>
                      </SubMenu>
                      <SubMenu
                        key="ourWork"
                        title={
                          <Link
                            className={`navbar-link navbar-parent ${navbarStyles.navbarArrow}`}
                            to="/projects"
                          >
                            Our work
                          </Link>
                        }
                      >
                        <Menu.Item>
                          <Link to="/projects">Projects</Link>
                        </Menu.Item>
                        <Menu.Item>
                          <Link to="/events">Events</Link>
                        </Menu.Item>
                        <Menu.Item>
                          <Link to="/projects/stories-from-the-field/">
                            Stories from the field
                          </Link>
                        </Menu.Item>
                      </SubMenu>
                      <SubMenu
                        key="getInvolved"
                        title={
                          <Link
                            className={`navbar-link navbar-parent ${navbarStyles.navbarArrow}`}
                            to="/get-involved"
                          >
                            Get involved
                          </Link>
                        }
                      >
                        <Menu.Item>
                          <Link
                            className="navbar-item"
                            to="/get-involved/donate/"
                          >
                            Donate
                          </Link>
                        </Menu.Item>
                        <Menu.Item>
                          <Link
                            className="navbar-item"
                            to="/get-involved/fundraise/"
                          >
                            Fundraise for us
                          </Link>
                        </Menu.Item>
                        <Menu.Item>
                          <Link
                            className="navbar-item"
                            to="/get-involved/holiday-in-france-for-us/"
                          >
                            Holiday in France for us
                          </Link>
                        </Menu.Item>
                        <Menu.Item>
                          <Link
                            className="navbar-item"
                            to="/get-involved/fundraise-with-easy-fundraising/"
                          >
                            Shop online for us
                          </Link>
                        </Menu.Item>
                        <Menu.Item>
                          <Link
                            className="navbar-item"
                            to="/get-involved/use-your-baggage-allowance-to-lilongwe/"
                          >
                            Take a suitcase to Lilongwe for us!
                          </Link>
                        </Menu.Item>
                        <Menu.Item>
                          <Link
                            className="navbar-item"
                            to="/get-involved/vacancies/"
                          >
                            Work for us
                          </Link>
                        </Menu.Item>
                        <Menu.Item>
                          <Link
                            className="navbar-item"
                            to="/get-involved/volunteering/"
                          >
                            Volunteer with us
                          </Link>
                        </Menu.Item>
                        <Menu.Item>
                          <Link
                            className="navbar-item"
                            to="/get-involved/thank-yous"
                          >
                            Thank yous
                          </Link>
                        </Menu.Item>
                      </SubMenu>
                      <Menu.Item key="shop">
                        <Link className="navbar-item navbar-parent" to="/shop">
                          Shop
                        </Link>
                      </Menu.Item>
                    </Menu>
                  </div>
                </Flex>
              </Col>                          
            </Flex>
          </Col>
        </Flex>
      </DesktopNav>      
      <DesktopNav>
        <div className={navbarStyles.navbarBtns}>
          <CtaButton
            link="https://fundraise.charitycheckout.co.uk/africanvisionmalawi/fundraising/start#!/"
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
            <Search indices={searchIndices} />                
          </div>
          <div className={navbarStyles.iconCont}>
            <CartLink />
          </div>            
        </NavIcons> 
      </DesktopNav>  
      <MobileNav>
        <NavIcons>
          <div className={navbarStyles.iconCont}>
            <Search indices={searchIndices} />                
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

      <Drawer
        placement="right"        
        onClose={onClose}
        isOpen={isOpen}        
      >
      <DrawerOverlay />
      <DrawerContent backgroundColor="#fff">
        <DrawerCloseButton />
        <ul className={navbarStyles.mobileMenu}>
          <li>
            <label for="m1">About Us</label>
            <input type="checkbox" id="m1" />
            <ul>
              <li>
                <Link
                  className="navbar-item navbar-single"
                  to="/about-us/"
                >
                  About Us Index
                </Link>
              </li>
              <li>
                <Link
                  className="navbar-item navbar-single"
                  to="/about-us/malawi"
                >
                  Malawi
                </Link>
              </li>
              <li>
                <Link className="navbar-item" to="/about-us/team">
                  Team
                </Link>
              </li>
              <li>
                <Link className="navbar-item" to="/about-us/where-we-work">
                  Where we work
                </Link>
              </li>
              <li>
                <Link className="navbar-item" to="/about-us/how-we-started">
                  How we started
                </Link>
              </li>
              <li>
                <Link
                  className="navbar-item"
                  to="/about-us/african-vision-malawi-our-new-name"
                >
                  African Vision Malawi - our new name
                </Link>
              </li>
              <li>
                <Link className="navbar-item" to="/about-us/thank-yous">
                  Thank yous
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <label for="m2">Our work</label>
            <input type="checkbox" id="m2" />
            <ul>              
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <Link to="/events">Events</Link>
              </li>
              <li>
                <Link to="/projects/stories-from-the-field/">
                  Stories from the field
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <label for="m3">Get involved</label>
            <input type="checkbox" id="m3" />
            <ul>
              <li>
                <Link to="/get-involved/">Get Involved Index</Link>
              </li>
              <li>
                <Link className="navbar-item" to="/get-involved/donate/">
                  Donate
                </Link>
              </li>
              <li>
                <Link className="navbar-item" to="/get-involved/fundraise/">
                  Fundraise for us
                </Link>
              </li>
              <li>
                <Link
                  className="navbar-item"
                  to="/get-involved/holiday-in-france-for-us/"
                >
                  Holiday in France for us
                </Link>
              </li>
              <li>
                <Link
                  className="navbar-item"
                  to="/get-involved/fundraise-with-easy-fundraising/"
                >
                  Shop online for us
                </Link>
              </li>
              <li>
                <Link
                  className="navbar-item"
                  to="/get-involved/use-your-baggage-allowance-to-lilongwe/"
                >
                  Take a suitcase to Lilongwe for us!
                </Link>
              </li>
              <li>
                <Link className="navbar-item" to="/get-involved/volunteering/">
                  Volunteer with us
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link className="navbar-item navbar-parent" to="/shop">
              Shop
            </Link>
          </li>
        </ul>
      </DrawerContent>
      </Drawer>
    </div>
  );
};

const DesktopNav = styled.div`
  display: none;
  position: relative;
  &.main {
    text-transform: uppercase;
  }
  @media (min-width: 920px) {
    display: flex;
    &.main {
      margin: 0 1em 0 0;
    }
  }
`;



const MobileNav = styled.div`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 48px;
  // height: 68px;
  justify-content: flex-end;
  margin: 4px 0 0;
  text-transform: uppercase;
  width: 100%;
  @media (min-width: 370px) {
    flex-direction: row;
  }
  @media (min-width: 920px) {
    display: none;
  }
`;

const NavIcons = styled.div`
  display: flex;
`

const MobileNavIcon = styled.svg`
  cursor: pointer;
  display: block;
  fill: #fff;
  height: 28px;
  // margin-right: 15px;
  // margin-left: 8px;
  width: 28px;
`;

export default Navbar;
