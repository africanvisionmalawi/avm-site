import React from "react";
import { Link } from "gatsby";
import { Menu, Row, Col, Drawer } from "antd";
// import github from '../img/github-icon.svg'
import CtaButton from "../components/CtaButton";
import CartLink from "../components/CartLink";
// import NavBarLinks from "../components/NavBarLinks";
import navbarStyles from "./navbar.module.css";
import styled from "styled-components";
const { SubMenu } = Menu;
const DesktopNav = styled.nav`
  display: none;
  position: relative;
  @media (min-width: 992px) {
    display: flex;
    margin: 0 1em 0 auto;
  }
`;

const MobileNav = styled.div`
  align-items: center;
  display: flex;
  height: 68px;
  justify-content: flex-end;
  margin: 4px 0 0;
  width: 100%;
  @media (min-width: 992px) {
    display: none;
  }
`;

const MobileNavIcon = styled.svg`
  cursor: pointer;
  display: block;
  fill: #fff;
  height: 28px;
  margin-right: 15px;
  margin-left: 8px;
  width: 28px;
`;

const Navbar = class extends React.Component {
  componentDidMount() {
    // Get all "navbar-burger" elements
    // const $navbarBurgers = Array.prototype.slice.call(
    //   document.querySelectorAll(".navbar-burger"),
    //   0
    // );
    // // Check if there are any navbar burgers
    // if ($navbarBurgers.length > 0) {
    //   // Add a click event on each of them
    //   $navbarBurgers.forEach(el => {
    //     el.addEventListener("click", () => {
    //       // Get the target from the "data-target" attribute
    //       const target = el.dataset.target;
    //       const $target = document.getElementById(target);
    //       const $documentEl = document.querySelector(".mainContainer");
    //       // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    //       el.classList.toggle("is-active");
    //       $target.classList.toggle("is-active");
    //       $documentEl.classList.toggle("mobNavOpen");
    //     });
    //   });
    // }
  }

  state = {
    current: "mail",
    drawerVisible: false,
  };

  handleClick = (e) => {
    console.log("click ", e);
    this.setState({
      current: e.key,
    });
  };

  // Mobile nav drawer
  showDrawer = () => {
    this.setState({
      drawerVisible: true,
    });
  };

  onClose = () => {
    this.setState({
      drawerVisible: false,
    });
  };

  render() {
    return (
      <nav
        className={`navbar is-transparent ${navbarStyles.navbarTop}`}
        role="navigation"
        aria-label="main-navigation"
      >
        <DesktopNav>
          <Row type="flex" align="middle">
            <Col md={24}>
              <Row justify="space-between" align="middle">
                <Col sm={24} md={16}>
                  <Row type="flex" align="middle">
                    <div id="navMenu" className="navbar-menu">
                      <Menu
                        onClick={this.handleClick}
                        selectedKeys={[this.state.current]}
                        mode="horizontal"
                      >
                        <Menu.Item key="whyMalawi">
                          <Link
                            className="navbar-item navbar-single"
                            to="/why-malawi"
                          >
                            Why Malawi?
                          </Link>
                        </Menu.Item>
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
                              to="/about-us/thank-yous"
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
                          <Menu.Item>Current Projects</Menu.Item>
                          <Menu.Item>Past Projects</Menu.Item>
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
                        </SubMenu>
                        <Menu.Item key="shop">
                          <Link
                            className="navbar-item navbar-parent"
                            to="/shop"
                          >
                            Shop
                          </Link>
                        </Menu.Item>
                      </Menu>
                    </div>
                  </Row>
                </Col>
                <div className={navbarStyles.cartLinkCont}>
                  <CartLink />
                </div>
              </Row>
            </Col>
          </Row>
        </DesktopNav>
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
        <MobileNav>
          <div className={navbarStyles.cartLinkCont}>
            <CartLink />
          </div>
          <MobileNavIcon
            type="primary"
            onClick={this.showDrawer}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <title>Hamburger</title>
            <path
              d="M24,19v2a1,1,0,0,1-1,1H1a.94.94,0,0,1-.7-.3A1,1,0,0,1,0,21V19a1,1,0,0,1,.3-.7A.94.94,0,0,1,1,18H23a1,1,0,0,1,1,1Zm0-8v2a.94.94,0,0,1-.3.7,1,1,0,0,1-.7.3H1a.94.94,0,0,1-.7-.3A.94.94,0,0,1,0,13V11a.94.94,0,0,1,.3-.7A.94.94,0,0,1,1,10H23a1,1,0,0,1,.7.3A.94.94,0,0,1,24,11Zm0-8V5a1,1,0,0,1-1,1H1a.94.94,0,0,1-.7-.3A1,1,0,0,1,0,5V3a.94.94,0,0,1,.3-.7A.94.94,0,0,1,1,2H23a1,1,0,0,1,.7.3A.94.94,0,0,1,24,3Z"
              fill="#fff"
            />
          </MobileNavIcon>
        </MobileNav>

        <Drawer
          placement="right"
          closable={true}
          onClose={this.onClose}
          visible={this.state.drawerVisible}
        >
          <Menu
            onClick={this.handleClick}
            selectedKeys={[this.state.current]}
            mode="vertical"
          >
            <Menu.Item key="whyMalawi">
              <Link className="navbar-item navbar-single" to="/why-malawi">
                Why Malawi?
              </Link>
            </Menu.Item>
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
                <Link className="navbar-item" to="/about-us/where-we-work">
                  Where we work
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link className="navbar-item" to="/about-us/how-we-started">
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
                <Link className="navbar-item" to="/about-us/thank-yous">
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
              <Menu.Item>Current Projects</Menu.Item>
              <Menu.Item>Past Projects</Menu.Item>
              <Menu.Item>Stories from the field</Menu.Item>
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
                <Link className="navbar-item" to="/get-involved/donate/">
                  Donate
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link className="navbar-item" to="/get-involved/fundraise/">
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
                <Link className="navbar-item" to="/get-involved/volunteering/">
                  Volunteer with us
                </Link>
              </Menu.Item>
            </SubMenu>
            <Menu.Item key="shop">
              <Link className="navbar-item navbar-parent" to="/shop">
                Shop
              </Link>
            </Menu.Item>
          </Menu>
        </Drawer>
      </nav>
    );
  }
};

export default Navbar;
