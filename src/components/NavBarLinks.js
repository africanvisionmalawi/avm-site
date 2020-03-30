import React from "react";
import { Link } from "gatsby";
import { Menu } from "antd";
import navbarStyles from "./navbar.module.css";

const { SubMenu } = Menu;

const NavBarLinks = () => {
  return (
    <div>
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
    </div>
  );
};

export default NavBarLinks;
