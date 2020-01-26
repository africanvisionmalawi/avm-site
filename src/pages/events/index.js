import React from "react";
import useSiteMetadata from "../../hooks/use-site-metadata";
import Seo from "../../components/seo";
import Layout from "../../components/Layout";
import EventsRoll from "../../components/EventsRoll";
import HeroImage from "../../components/HeroImage";

const BlogIndexPage = () => {
  const heroImage = "/img/hero/retreat-yurt.jpg";
  const heroMsg = "Forthcoming events";
  const { siteUrl } = useSiteMetadata();
  const title = "Latest events - African Vision Malawi";
  const description = "Latest events from African Vision Malawi.";
  const pathname = siteUrl + "/events/";
  return (
    <Layout>
      <Seo
        title={title}
        description={description}
        pathname={pathname}
        article={false}
      />
      <section className="section">
        <div className="container">
          <div className="content">
            <section>
              <HeroImage heroImage={heroImage} heroMsg={heroMsg} />
            </section>
            <section className="columns">
              <main className="column">
                <EventsRoll />
              </main>
            </section>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogIndexPage;
