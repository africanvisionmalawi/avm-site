import React from "react";
import { Link } from "gatsby";
import styled, { css } from "styled-components";

const Section = styled.div`
  background: #fff;
  margin: 0 auto;
  max-width: 750px;
  padding: 3em 2em 0;
  position: relative;
  width: 100%;
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

const HomeLink = styled(Link)`
  ${CrumbLinkBase}
`;

const CrumbLink = styled(Link)`
  ${CrumbLinkBase}
  &:before {
    color: #cacaca;
    content: ">";
    display: inline-block;
    margin: 0 8px;
  }
`;

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
          <CrumbLink to={`${getLinks(c, i)}/`}>
            {c.replace(/-/g, " ")}
          </CrumbLink>
        ))}
      </Links>
    </Section>
  );
};

export default Breadcrumbs;
