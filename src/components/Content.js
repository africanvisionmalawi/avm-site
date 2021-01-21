import { Box } from "@chakra-ui/core";
import PropTypes from "prop-types";
import React from "react";

export const HTMLContent = ({ content, className }) => (
  <Box
    px={["16px", "16px", "16px"]}
    className={className}
    dangerouslySetInnerHTML={{
      __html: content
        ? content.replace("http://www.africanvision.org.uk", ``)
        : content,
    }}
  />
);

const Content = ({ content, className }) => (
  <div className={className}>{content}</div>
);

Content.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string,
};

HTMLContent.propTypes = Content.propTypes;

export default Content;
