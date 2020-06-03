import React from "react";
import useSiteMetadata from "../../hooks/use-site-metadata";
import Seo from "../../components/seo";
import Layout from "../../components/Layout";
import EventsRoll from "../../components/EventsRoll";
// import FeaturedProjectsTiles from "../../components/FeaturedProjectsTiles";
import Donate from "../../components/Donate";
// import HeroImage from "../../components/HeroImage";
import styled from "styled-components";

const Section = styled.section`
  background: #fff;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  margin: 0 auto;
  max-width: 1050px;
  padding: 2em;
  position: relative;
  width: 100%;
`;

/**
 * Returns the current date in YYYY-MM-DD format
 */
function getCurrentDate() {
  const d = new Date();
  let month = (d.getMonth() + 1).toString();
  if (month.length < 2) {
    month = `0${month}`;
  }
  let day = d.getDate().toString();
  if (day.length < 2) {
    day = `0${day}`;
  }
  return `${d.getFullYear()}-${month}-${day}`;
}
var currentDate = getCurrentDate();

const EventsIndexPage = () => {
  // const heroImage = "/img/hero/retreat-yurt.jpg";
  // const heroMsg = "Forthcoming events";
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

      <div className="container">
        <article>
          {/* <section>
              <HeroImage heroImage={heroImage} heroMsg={heroMsg} />
            </section> */}
          <Section>
            <main>
              <EventsRoll />
            </main>
          </Section>
        </article>
        <Donate
          link="https://www.charitycheckout.co.uk/1113786/"
          text="Donate"
        />
      </div>
    </Layout>
  );
};

export default EventsIndexPage;
