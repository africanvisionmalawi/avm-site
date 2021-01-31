import { graphql } from "gatsby";
import { styled } from "linaria/react";
import PropTypes from "prop-types";
import React from "react";
import { SectionTop } from "../components/common/SectionTop";
import Content, { HTMLContent } from "../components/Content";
import Donate from "../components/Donate";
import FeaturedProjectsTiles from "../components/FeaturedProjectsTiles";
import HeadingH1 from "../components/HeadingH1";
import Layout from "../components/Layout";
import NavbarLower from "../components/NavbarLower";
import Seo from "../components/seo";
import teamStyles from "../components/team.module.css";
import TeamList from "../components/team/TeamList";
import useSiteMetadata from "../hooks/use-site-metadata";

const TeamTemplate = ({
  content,
  malawiTeam,
  ukTeam,
  malawiTitle,
  malawiText,
  ukTitle,
  ukText,
  contentComponent,
  path,
}) => {
  const PageContent = contentComponent || Content;

  return (
    <>
      <NavbarLower path={path} />
      <article>
        <main>
          <PictureSection>
            <SectionTop>
              <HeadingH1 text="Meet the team" />
              <TeamList heading="Team in Malawi" teamData={malawiTeam} />
              <div className={teamStyles.contentBox}>
                <SubHeading>{malawiTitle}</SubHeading>
                <p>{malawiText}</p>
                <PageContent className="content" content={content} />
              </div>
              <div className={teamStyles.contentBox}>
                <SubHeading>{ukTitle}</SubHeading>
                <p>{ukText}</p>
              </div>
              <TeamList heading="Team in the UK" teamData={ukTeam} />
            </SectionTop>
          </PictureSection>
        </main>
        <Donate
          link="https://www.charitycheckout.co.uk/1113786/"
          text="Donate"
          displayImage
        />
      </article>
      <FeaturedProjectsTiles currentProject="default" displayHeading={true} />
    </>
  );
};

TeamTemplate.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  malawiTeam: PropTypes.array,
  ukTeam: PropTypes.array,
  malawiTitle: PropTypes.string,
  malawiText: PropTypes.string,
  ukTitle: PropTypes.string,
  ukText: PropTypes.string,
  content: PropTypes.string,
};

const TeamPage = ({ data }) => {
  const { markdownRemark: post } = data;
  const { siteUrl } = useSiteMetadata();

  return (
    <Layout>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        pathname={`${siteUrl}${post.fields.slug}`}
        article={false}
      />
      <TeamTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        malawiTeam={post.frontmatter.malawiTeam}
        ukTeam={post.frontmatter.ukTeam}
        malawiTitle={post.frontmatter.malawiTitle}
        malawiText={post.frontmatter.malawiText}
        ukTitle={post.frontmatter.ukTitle}
        ukText={post.frontmatter.ukText}
        path={post.fields.slug}
      />
    </Layout>
  );
};

TeamPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

const PictureSection = styled.div`
  margin: 0 auto;
  max-width: 1080px;
  position: relative;
  width: 100%;
`;

const SubHeading = styled.h2`
  text-align: center;
`;

export default TeamPage;

export const TeamPageQuery = graphql`
  query TeamPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      fields {
        slug
      }
      frontmatter {
        title
        description
        malawiTitle
        malawiText
        ukTitle
        ukText
        malawiTeam {
          photo {
            childImageSharp {
              fluid(maxWidth: 150, quality: 50) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          name
          role
        }
        ukTeam {
          photo {
            childImageSharp {
              fluid(maxWidth: 150, quality: 50) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          name
          role
        }
      }
    }
  }
`;
