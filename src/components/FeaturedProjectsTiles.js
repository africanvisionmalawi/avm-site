import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "antd";
import Img from "gatsby-image";
// import BackgroundImage from "gatsby-background-image";
import { Link, useStaticQuery, graphql } from "gatsby";
import projectLinkStyles from "./projects.module.css";
import styled from "styled-components";

const FeaturedProjects = ({ currentProject, displayHeading }) => {
  const featuredImage = useStaticQuery(
    graphql`
      query {
        PhotoVillageDesktop: file(
          relativePath: { eq: "mainphoto_village-ver3.jpg" }
        ) {
          ...photoTileFixedLgRect
        }
        PhotoVillageMobile: file(
          relativePath: { eq: "mainphoto_village-ver3.jpg" }
        ) {
          ...photoTileFixedMdRect
        }
        PhotoWater: file(relativePath: { eq: "mainphoto_water.jpg" }) {
          ...photoTileFixedMdRect
        }
        PhotoHealth: file(relativePath: { eq: "mainphoto_health.jpg" }) {
          ...photoTileFixedMdRect
        }
        PhotoEducationDesktop: file(
          relativePath: { eq: "mainphoto_education.jpg" }
        ) {
          ...photoTileFixedLgRect
        }
        PhotoEducationMobile: file(
          relativePath: { eq: "mainphoto_education.jpg" }
        ) {
          ...photoTileFixedMdRect
        }
        PhotoEnvironment: file(
          relativePath: { eq: "mainphoto_environment.jpg" }
        ) {
          ...photoTileFixedMdRect
        }
        PhotoCelebrate: file(relativePath: { eq: "mainphoto_celebrate.jpg" }) {
          ...photoTileFixedMdRect
        }
      }
    `
  );

  return (
    <Container>
      <TileCont>
        {displayHeading === true ? <Heading>Featured projects</Heading> : ""}
        <Row className={projectLinkStyles.featuredProjects}>
          {projects.map((project) => (
            <Tile
              className={
                project.id === currentProject ? projectLinkStyles.active : ``
              }
              key={project.id}
              xs={project.colWidth.xs}
              sm={project.colWidth.sm}
            >
              <TileLink to={project.src}>
                <Overlay>
                  <SubHeading>{project.name}</SubHeading>
                </Overlay>
                <Img
                  fluid={
                    project.hasMobileImage === true
                      ? [
                          featuredImage[project.imageIdMobile].childImageSharp
                            .fluid,
                          {
                            ...featuredImage[project.imageIdDesktop]
                              .childImageSharp.fluid,
                            media: `(min-width: 576px)`,
                          },
                        ]
                      : featuredImage[project.imageId].childImageSharp.fluid
                  }
                  alt=""
                  imgStyle={{ objectFit: "contain" }}
                />
              </TileLink>
            </Tile>
          ))}
        </Row>
      </TileCont>
    </Container>
  );
};

FeaturedProjects.propTypes = {
  currentProject: PropTypes.string,
  displayHeading: PropTypes.bool,
};

const projects = [
  {
    id: "village",
    name: "Sam's Village",
    src: "/projects/sams-village/",
    imageIdDesktop: "PhotoVillageDesktop",
    imageIdMobile: "PhotoVillageMobile",
    colWidth: {
      xs: 24,
      sm: 24,
    },
    hasMobileImage: true,
  },
  {
    id: "water",
    name: "Water",
    src: "/water/",
    imageId: "PhotoWater",
    colWidth: {
      xs: 24,
      sm: 12,
    },
    hasMobileImage: false,
  },
  {
    id: "health",
    name: "Health",
    src: "/health/",
    imageId: "PhotoHealth",
    colWidth: {
      xs: 24,
      sm: 12,
    },
    hasMobileImage: false,
  },
  {
    id: "education",
    name: "Education",
    src: "/education/",
    imageIdDesktop: "PhotoEducationDesktop",
    imageIdMobile: "PhotoEducationMobile",
    colWidth: {
      xs: 24,
      sm: 24,
    },
    hasMobileImage: true,
  },
  {
    id: "environment",
    name: "Environment",
    src: "/environment/",
    imageId: "PhotoEnvironment",
    colWidth: {
      xs: 24,
      sm: 12,
    },
    hasMobileImage: false,
  },
  {
    id: "celebrate",
    name: "Celebrate & Give",
    src: "/celebrate-and-give/",
    imageId: "PhotoCelebrate",
    colWidth: {
      xs: 24,
      sm: 12,
    },
    hasMobileImage: false,
  },
];

const Container = styled.section`
  margin: 0 auto 3rem;
  max-width: 980px;
  position: relative;
  width: 100%;
`;

const TileCont = styled.div``;

const Tile = styled(Col)`
  overflow: hidden;
  padding: 4px;
  position: relative;
  & img {
    border-radius: 4px;
  }
`;

const TileLink = styled(Link)`
  border-radius: 4px;
  display: block;
  overflow: hidden;
  position: relative;
  & img {
    border-radius: 4px;
    height: 100%;
    width: 100%;
  }
`;

const Heading = styled.h2`
  margin: 2rem 0 1rem;
  text-align: center;
`;

const Overlay = styled.div`
  align-items: center;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  position: absolute;
  top: left;
  width: 100%;
  z-index: 900;
`;

const SubHeading = styled.span`
  border-radius: 4px;
  color: #fff;
  display: inline-block;
  font-size: 2.4rem;
  margin: 0 9px;
  padding: 0 0.6em;
  text-align: center;
  text-shadow: 5px 0px 15px rgba(150, 150, 150, 0.84);
  z-index: 1000;
`;

export default FeaturedProjects;
