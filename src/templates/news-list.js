import { Link } from "gatsby";
import { styled } from "linaria/react";
import React from "react";
// import BlogRoll from "../components/BlogRoll";
import ArticleList from "../components/ArticleList";
import Donate from "../components/Donate";
import FeaturedProjectsTiles from "../components/FeaturedProjectsTiles";
import Layout from "../components/Layout";
import paginationStyles from "../components/pagination.module.css";
import postStyles from "../components/posts.module.css";
import Seo from "../components/seo";
import useSiteMetadata from "../hooks/use-site-metadata";

// const Section = styled.section`
//   margin: 0 auto;
//   max-width: 1050px;
//   width: 100%;
// `;

const TextSection = styled.section`
  background: #fff;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  min-height: 24rem;
  margin: 0 auto;
  max-width: 885px;
  padding: 3em 2em 2em;
  position: relative;
  width: 100%;
`;

const PaginationLink = (props) => {
  if (!props.test) {
    return (
      <Link
        className={paginationStyles.activeLink}
        to={`/news/${props.url}`}
      >{`${props.text}`}</Link>
    );
  } else {
    return (
      <span className={paginationStyles.currentLink} disabled>
        {props.text}
      </span>
    );
  }
};

const NewsIndex = ({ location, pageContext }) => {
  // const { location, pageContext } = props;
  const { group, index, pageCount, first, last } = pageContext;
  const previousUrl = index - 1 === 1 ? "" : (index - 1).toString() + "/";
  const nextUrl = (index + 1).toString() + "/";
  const pageNumbers = new Array(pageCount)
    .fill(undefined)
    .map((_, index) => index + 1);
  const { siteUrl } = useSiteMetadata();
  const title = "Latest news - African Vision Malawi";
  const description = "Latest news from African Vision Malawi.";
  const pathname = siteUrl + "/news/";

  return (
    <Layout>
      <Seo
        title={title}
        description={description}
        pathname={pathname}
        article={false}
      />
      <section className="section section--gradient">
        <div className="container">
          <article className="content">
            <div className="columns">
              <main className={`column is-8 ${postStyles.postWide}`}>
                <TextSection>
                  <h1 className="has-text-weight-semibold is-size-2">
                    Latest news
                  </h1>
                  <ArticleList posts={group} />
                  <div>
                    {!first && (
                      <PaginationLink
                        test={first}
                        url={previousUrl}
                        text="← Prev"
                      />
                    )}
                    {pageNumbers.map((number) => {
                      const isActive =
                        location.pathname.indexOf(number) > -1 ||
                        (location.pathname === "/blog/" && number === 1);
                      return (
                        <PaginationLink
                          test={isActive}
                          url={`/${number === 1 ? "" : number}/`}
                          text={number}
                        />
                      );
                    })}
                    {!last && (
                      <PaginationLink test={last} url={nextUrl} text="Next →" />
                    )}
                  </div>
                </TextSection>
              </main>
              <Donate
                link="https://www.charitycheckout.co.uk/1113786/"
                text="Donate"
              />
            </div>
          </article>
          <FeaturedProjectsTiles
            currentProject="default"
            displayHeading={true}
          />
        </div>
      </section>
    </Layout>
  );
};

export default NewsIndex;
