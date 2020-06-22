import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import useSiteMetadata from "../hooks/use-site-metadata";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import Seo from "../components/seo";
// import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import FeaturedProjectsTiles from "../components/FeaturedProjectsTiles";
import Donate from "../components/Donate";
import Breadcrumbs from "../components/Breadcrumbs";
import teamStyles from "../components/team.module.css";
import TeamList from "../components/team/TeamList";
import styled from "styled-components";

// const Section = styled.section`
//   margin: 0 auto;
//   max-width: 1050px;
//   width: 100%;
// `;

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
      <Breadcrumbs path={path} />
      <article>
        <main className="column is-8">
          <TextSection>
            <h1 className="has-text-weight-semibold is-size-2">
              Meet the team
            </h1>
          </TextSection>
          <PictureSection>
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
