import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import { SimpleGrid, Box } from "@chakra-ui/core";
import { Link, useStaticQuery, graphql } from "gatsby";
import projectLinkStyles from "./projects.module.css";
import styled from "styled-components";

const HomepageProjectsCols = (props) => {
  const featuredImage = useStaticQuery(
    graphql`
      query {
        PhotoVillage: file(relativePath: { eq: "mainphoto_village-ver3.jpg" }) {
          ...photoTileFixedMdRect
        }
        PhotoHealth: file(relativePath: { eq: "mainphoto_health.jpg" }) {
          ...photoTileFixedMdRect
        }
        PhotoEducation: file(relativePath: { eq: "mainphoto_education.jpg" }) {
          ...photoTileFixedMdRect
        }
      }
    `
  );

  return (
    <Box>
      {props.displayHeading === true ? <Heading>What we do</Heading> : ""}
      <SimpleGrid columns={[1, 1, 3]} spacing="1em">
        {props.ourWork.map((project) => (
          <Box p={2} key={project.id} bg="#fff" borderRadius="8px">
            <Box>
              {project.imageId && (
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
              )}
            </Box>
            <Box mt={{ base: 4 }} width="100%">
              <Excerpt>
                <Title>{project.name}</Title>
                <p>{project.excerpt}</p>
                <Link to={project.url}>Find out more</Link>
              </Excerpt>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

const projects = [
  {
    id: "village",
    name: "Sam's Village",
    src: "/projects/sams-village/",
    imageId: "PhotoVillage",
    colWidth: {
      xs: 24,
      sm: 10,
    },
    hasMobileImage: false,
    layout: "default",
    excerpt:
      "Sam’s Training Village is a self-sustaining training village, built on a 17-acre site. The construction phase is now almost complete and the objective is to support a move away from hand-outs and to create self-sufficient training programmes that can support thousands of local people. This will improve their lives in terms of creating employment, organic farming, orphan support, reforestation, HIV prevention and many other important areas.",
  },
  {
    id: "health",
    name: "Health",
    src: "/health/",
    imageId: "PhotoHealth",
    colWidth: {
      xs: 24,
      sm: 10,
    },
    hasMobileImage: false,
    layout: "alt",
    excerpt:
      "One of our big forthcoming projects is to build a Waiting Home for new mothers at the Maternity Unit. This second stage will provide essential care for pre-term births - which are higher in Malawi than anywhere else in the world. The project will include nutritional permaculture gardens in front of the new wing, and education on good nutrition for new mothers.",
  },
  {
    id: "education",
    name: "Education",
    src: "/education/",
    imageId: "PhotoEducation",
    colWidth: {
      xs: 24,
      sm: 10,
    },
    hasMobileImage: false,
    layout: "default",
    excerpt:
      "We have setup 9 Community Based Childcare Centres to date to support the under 5's and support pupils in Primary, Secondary and University/Further Edication.",
  },
];

const Container = styled.section`
  margin: 0 auto 3rem;
  max-width: 1080px;
  position: relative;
  width: 100%;
`;

const ProjectRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 60px 0 120px;
  @media (min-width: 768px) {
    &.alt {
      flex-direction: row-reverse;
    }
  }
`;

const Title = styled.h3`
  font-size: 1.2em;
`;

const TileCont = styled.div``;

const Tile = styled.div`
  margin-bottom: 1.4em;
  overflow: hidden;
  padding: 4px;
  position: relative;
  width: 100%;
  & img {
    border-radius: 4px;
  }
  @media (min-width: 768px) {
    margin-bottom: 0;
    width: 41.66666667%;
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
  //   overflow: hidden;
  position: relative;
  & img {
    border-radius: 4px;
    height: 100%;
    width: 100%;
  }
`;

const Heading = styled.h2`
  font-size: 1.8em;
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
  z-index: 1000;
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
  &:hover {
    span {
      font-size: 2.8rem;
      border-bottom: 1px solid #fff;
      transition: all 0.5s ease-in-out;
    }
  }
`;

const Excerpt = styled.div`
<!--   padding: 0 30px;
  width: 100%; -->
  <!-- @media (min-width: 768px) {
    width: 58.33333333%;
  } -->
`;

export default HomepageProjectsCols;
