import { graphql } from "gatsby";
import { styled } from "linaria/react";
import PropTypes from "prop-types";
import React from "react";
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

export const TeamTemplate = ({
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
            <HeadingH1 text="Meet the team" />
            <TeamList heading="Team in Malawi" teamData={malawiTeam} />
            <TextSection>
              <div className={teamStyles.contentBox}>
                <h2>{malawiTitle}</h2>
                <p>{malawiText}</p>
                <PageContent className="content" content={content} />
              </div>
              <div className={teamStyles.contentBox}>
                <h2>{ukTitle}</h2>
                <p>{ukText}</p>
              </div>
            </TextSection>
            <TeamList heading="Team in the UK" teamData={ukTeam} />
          </PictureSection>
        </main>
        <Donate
          link="https://www.charitycheckout.co.uk/1113786/"
          text="Donate"
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
  padding: 3em 2em 2em;
  position: relative;
  width: 100%;
`;

const TextSection = styled.div`
  margin: 0 auto;
  max-width: 885px;
  padding: 3em 2em 2em;
  position: relative;
  width: 100%;
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
