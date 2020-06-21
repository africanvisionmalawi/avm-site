import React from "react";
import { Link } from "gatsby";
import styled, { css } from "styled-components";

let crumbLink = "";
let crumbLinkArray = [];
const getLinks = (currentLink, index) => {
  crumbLink = crumbLink + "/" + currentLink;
  crumbLinkArray.push(crumbLink);

  return crumbLinkArray[index];
};

const Breadcrumbs = (props) => {
  //   console.log("path is " + props.path);
  const crumb = props.path.split("/");
  const crumbFiltered = crumb.filter(
    (value) => Object.keys(value).length !== 0
  );

  //   console.log("crumb is " + crumbFiltered);
  return (
    <Section>
      <Links>
        <HomeLink to="/">Home</HomeLink>
        {crumbFiltered.map((c, i) => (
          <React.Fragment key={i}>
            {i < crumbFiltered.length - 1 ? (
              <CrumbLink to={`${getLinks(c, i)}/`}>
                {c.replace(/-/g, " ")}
              </CrumbLink>
            ) : (
              <CrumbCurrent>{c.replace(/-/g, " ")}</CrumbCurrent>
            )}
          </React.Fragment>
        ))}
      </Links>
    </Section>
  );
};

const Section = styled.div`
  background: #fff;
  margin: 0 auto;
  max-width: 750px;
  padding: 2.5em 12px 0.5em;
  position: relative;
  width: 100%;
  @media (min-width: 480px) {
    padding: 0.5em 100px 12px;
  }
  @media (min-width: 800px) {
    padding-left: 80px;
  }
  @media (min-width: 900px) {
    padding-left: 12px;
  }
  @media (min-width: 992px) {
    padding-left: 0;
  }
`;

const Links = styled.div`
  text-transform: capitalize;
`;

const CrumbLinkBase = css`
  color: #ababad;
  display: inline-block;
  font-size: 0.8em;
  text-transform: capitalize;
`;

const CrumbDividerBase = css`
  &:before {
    color: #cacaca;
    content: ">";
    display: inline-block;
    margin: 0 8px;
  }
`;

const HomeLink = styled(Link)`
  ${CrumbLinkBase}
  &:link,
  &:visited {
    color: #ababad;
  }
`;

const CrumbCurrent = styled.span`
  ${CrumbLinkBase}
  ${CrumbDividerBase}
`;

const CrumbLink = styled(Link)`
  ${CrumbLinkBase}
  ${CrumbDividerBase}
  &:link,
  &:visited {
    color: #ababad;
  }
`;

export default Breadcrumbs;
