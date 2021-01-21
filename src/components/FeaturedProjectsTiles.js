import { Box, Flex } from "@chakra-ui/core";
// import BackgroundImage from "gatsby-background-image";
import { graphql, Link, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import projectLinkStyles from "./projects.module.css";

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
        {displayHeading === true ? <Heading>Our work</Heading> : ""}
        <Flex wrap="wrap" className={projectLinkStyles.featuredProjects}>
          {projects.map((project) => (
            <Tile
              className={
                project.id === currentProject ? projectLinkStyles.active : ``
              }
              width={[project.colWidth.base, project.colWidth.md]}
              key={project.id}
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
        </Flex>
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
    src: "/sams-village/",
    imageIdDesktop: "PhotoVillageDesktop",
    imageIdMobile: "PhotoVillageMobile",
    colWidth: {
      base: "100%",
      md: "100%",
    },
    hasMobileImage: true,
  },
  {
    id: "water",
    name: "Water",
    src: "/water/",
    imageId: "PhotoWater",
    colWidth: {
      base: "100%",
      md: "50%",
    },
    hasMobileImage: false,
  },
  {
    id: "health",
    name: "Health",
    src: "/health/",
    imageId: "PhotoHealth",
    colWidth: {
      base: "100%",
      md: "50%",
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
      base: "100%",
      md: "100%",
    },
    hasMobileImage: true,
  },
  {
    id: "environment",
    name: "Environment",
    src: "/environment/",
    imageId: "PhotoEnvironment",
    colWidth: {
      base: "100%",
      md: "50%",
    },
    hasMobileImage: false,
  },
  {
    id: "celebrate",
    name: "Celebrate & Give",
    src: "/celebrate-and-give/",
    imageId: "PhotoCelebrate",
    colWidth: {
      base: "100%",
      md: "50%",
    },
    hasMobileImage: false,
  },
];

const Container = styled.section`
  margin: 0 auto 3rem;
  max-width: 1080px;
  position: relative;
  width: 100%;
`;

const TileCont = styled.div``;

const Tile = styled(Box)`
  overflow: hidden;
  padding: 4px;
  position: relative;
  & img {
    border-radius: 4px;
  }
`;

// & img {
//     transition: transform 0.8s ease-in-out;
//     border-radius: 4px;
//   }
//   &:hover img {
//     transform: scale(1.01);
//   }

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
  // font-size: 3.2em;
  margin: 0 0 0.5em;
  text-align: center;
`;
// margin: 2rem 0 1rem;
// text-align: center;

const SubHeading = styled.span`
  color: #fff;
  display: inline-block;
  font-size: 2.4rem;
  margin: 0 9px;
  padding: 0 0.6em;
  text-align: center;
  text-shadow: 5px 0px 15px rgba(150, 150, 150, 0.84);
  z-index: 3;
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
  z-index: 2;
  &:hover {
    span {
      font-size: 2.8rem;
      border-bottom: 1px solid #fff;
      transition: all 0.5s ease-in-out;
    }
  }
`;

export default FeaturedProjects;
