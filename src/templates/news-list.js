import React from "react";
import Layout from "../components/Layout";
import { Link } from "gatsby";
// import BlogRoll from "../components/BlogRoll";
import ArticleList from "../components/ArticleList";
import FeaturedProjects from "../components/FeaturedProjects";
import useSiteMetadata from "../hooks/use-site-metadata";
import Seo from "../components/seo";
import CtaButton from "../components/CtaButton";
import postStyles from "../components/posts.module.css";
import paginationStyles from "../components/pagination.module.css";

const PaginationLink = props => {
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

const ShopIndex = ({ location, pageContext }) => {
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
          <div className="columns">
            <div className="column is-14 is-offset-1">
              <article className="content">
                <div className="columns">
                  <main className={`column is-8 ${postStyles.postWide}`}>
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
                      {pageNumbers.map(number => {
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
                        <PaginationLink
                          test={last}
                          url={nextUrl}
                          text="Next →"
                        />
                      )}
                    </div>
                    <CtaButton
                      link="https://www.charitycheckout.co.uk/1113786/"
                      text="Donate"
                    />
                  </main>
                  <aside className="column is-4">
                    <FeaturedProjects currentProject="default" />
                  </aside>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ShopIndex;
