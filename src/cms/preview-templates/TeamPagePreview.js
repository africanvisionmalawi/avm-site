import React from "react";
// import PropTypes from "prop-types";
import { TeamTemplate } from "../../components/previewTemplates/TeamTemplate";
// import { TeamTemplate } from "../../templates/about-team.js";

export const TeamPagePreview = ({ entry, widgetFor }) => {
  console.log("entry", entry);
  console.log("widgetFor", widgetFor);

  const data = entry.getIn(["data"]);
  console.log("data ", data);

  const entryMalawiTeam = entry.getIn(["data", "malawiTeam"]);
  const malawiTeam = entryMalawiTeam ? entryMalawiTeam.toJS() : [];

  const entryukTeam = entry.getIn(["data", "ukTeam"]);
  const ukTeam = entryukTeam ? entryukTeam.toJS() : [];

  // console.log("entryukTeam", entryukTeam);
  console.log(widgetFor("body"));

  // console.log(malawiTeam);
  // console.log(ukTeam);
  return (
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
};

// TeamPagePreview.propTypes = {
//   entry: PropTypes.shape({
//     getIn: PropTypes.func,
//   }),
//   widgetFor: PropTypes.func,
// };
