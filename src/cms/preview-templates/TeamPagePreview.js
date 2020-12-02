import React from "react";
// import PropTypes from "prop-types";
import { TeamTemplate } from "../../templates/about-team";

const AboutTeamPreview = ({ entry, widgetFor }) => (
  <TeamTemplate
    title={entry.getIn(["data", "title"])}
    content={widgetFor("body")}
    malawiTeam={malawiTeam}
    ukTeam={ukTeam}
    malawiTitle={entry.getIn(["data", "malawiTitle"])}
    malawiText={entry.getIn(["data", "malawiText"])}
    ukTitle={entry.getIn(["data", "ukTitle"])}
    ukText={entry.getIn(["data", "ukText"])}
    path={null}
  />
);

// TeamPagePreview.propTypes = {
//   entry: PropTypes.shape({
//     getIn: PropTypes.func,
//   }),
//   widgetFor: PropTypes.func,
// };

export default AboutTeamPreview;
