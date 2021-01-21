import "@fontsource/raleway";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import { withPrefix } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/nav/main";
import SubNavBar from "../components/nav/sub";
import NavLogo from "../components/NavLogo";
import "./css/all.css";
import layoutStyles from "./layout.module.css";
import useSiteMetadata from "./SiteMetadata";

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <div className={`mainContainer ${layoutStyles.container}`}>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix("/")}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix("/")}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix("/")}img/og-image.jpg`}
        />
      </Helmet>
      <Header>
        <HeaderInner>
          <NavLogo />
          <Navbar />
        </HeaderInner>
      </Header>
      <SubNavBar />
      <Wrapper>
        <div className={layoutStyles.container__top}>
          <div className="main-body">{children}</div>
        </div>
        <div className={layoutStyles.container__lower}>
          <Footer />
        </div>
      </Wrapper>
    </div>
  );
};

// const TopNav = styled.div`
//   background: red;
//   position: sticky;
//   top: 0;
//   z-index: 2000;
// `;

const Header = styled.div`
  background: #c27e34;
  box-shadow: inset 0px -4px 8px -5px #482a1e;
  height: auto;
`;

const HeaderInner = styled.div`
  margin: 0 auto;
  max-width: 1180px;
  position: relative;
  width: 100%;
`;

const Wrapper = styled.div`
  background: #fff;
  margin: 0 auto;
  max-width: 1920px;
  position: relative;
  width: 100%;
`;

export default TemplateWrapper;
