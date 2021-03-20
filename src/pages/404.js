import React from "react";
import { SectionTop } from "../components/common/SectionTop";
import HeadingH1 from "../components/HeadingH1";
import Layout from "../components/Layout";

const NotFoundPage = ({ location }) => (
  <Layout>
    <div>
      <SectionTop>
        <HeadingH1 text="404 error: Page Not Found" />
        <p>
          Sorry, the page at <strong>{location.pathname}</strong> does not
          exist. This may be because it has been moved to a different location.
          Please use the links above or below to continue your search.
        </p>
      </SectionTop>
    </div>
  </Layout>
);

export default NotFoundPage;
