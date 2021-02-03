import { Box } from "@chakra-ui/react";
// import pageBasicStyles from "../components/pageBasic.module.css";
import { styled } from "linaria/react";
import React from "react";
import Content from "../Content";
// import Donate from "../components/Donate";
// import FeaturedProjects from "../components/FeaturedProjects";
// import FeaturedProjectsTiles from "../components/FeaturedProjectsTiles";
import HeadingH1 from "../HeadingH1";
// import Seo from "../components/seo";
// import useSiteMetadata from "../hooks/use-site-metadata";
// const Section = styled.section`
//   margin: 0 auto;
//   max-width: 1050px;
//   width: 100%;
// `;

// const TextSection = styled.section`
//   background: #fff;
//   border-top-left-radius: 6px;
//   border-top-right-radius: 6px;
//   min-height: 24rem;
//   margin: 0 auto;
//   max-width: 885px;
//   padding: 3em 2em 2em;
//   position: relative;
//   width: 100%;
// `;

const BackgroundContainer = styled.div`
  // &,
  // &:before {
  //   background-position: 50% 102px;
  //   background-size: auto;
  // }
`;

export const PageBasicTemplate = ({
  title,
  content,
  contentComponent,
  path,
  backgroundImage,
  published,
}) => {
  const PageContent = contentComponent || Content;
  // if (backgroundImage) {
  //   console.log("backgroundImage ", backgroundImage.childImageSharp.fluid.src);
  // }
  return (
    <div>
      {/* {helmet || ""} */}
      {/* <NavbarLower path={path} /> */}
      <div className="container">
        <article className="content">
          <main
            className={
              backgroundImage ? "hasBackgroundImage" : "noBackgroundImage"
            }
          >
            <Box
              margin="0 auto"
              maxW="885px"
              pt={["3rem", "3rem", "1rem"]}
              pb="2rem"
              px={4}
              position="relative"
              w={[
                "100%",
                "100%",
                backgroundImage ? "75%" : "100%",
                backgroundImage ? "50%" : "100%",
              ]}
            >
              <HeadingH1 text={title} />
              <PageContent className="content" content={content} />
            </Box>
          </main>
        </article>
        {/* <Donate
          link="https://www.charitycheckout.co.uk/1113786/"
          text="Donate"
          displayImage
        />
        <FeaturedProjectsTiles currentProject="default" displayHeading={true} /> */}
      </div>
    </div>
  );
};
