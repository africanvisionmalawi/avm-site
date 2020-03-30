import React from "react";
import PropTypes from "prop-types";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
dayjs.extend(advancedFormat);

export const EventDate = ({ date, endDate }) => {
  var dateString;
  if (
    endDate != null &&
    dayjs(endDate, "MMMM DD, YYYY").isAfter(dayjs(date).format("MMMM DD, YYYY"))
  ) {
    dateString =
      dayjs(date).format("Do MMMM ") +
      " to " +
      dayjs(endDate).format("Do MMMM, YYYY");
  } else {
    dateString = date;
  }

  EventDate.propTypes = {
    date: PropTypes.string,
    endDate: PropTypes.string
  };

  return <span>{dateString}</span>;
};

export default EventDate;
