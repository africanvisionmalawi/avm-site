import React from "react";
import PropTypes from "prop-types";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
dayjs.extend(advancedFormat);

// todo: tidy up this mess of if satements

export const EventDate = ({ date, endDate, allDay }) => {
  let dateString = "";
  let timeString = "";
  let timeStringEnd = "";
  if (
    // endDate is either null or at least a day after the start date
    endDate != null &&
    dayjs(endDate, "MMMM DD, YYYY").isAfter(
      dayjs(date).format("MMMM DD, YYYY"),
      "day"
    )
  ) {
    // display the time if we need to
    if (allDay === false) {
      timeString =
        ", " +
        dayjs(date).format("HH:mm") +
        " to " +
        dayjs(endDate).format("HH:mm");
    }
    dateString =
      "Dates: " +
      dayjs(date).format("Do MMMM ") +
      " to " +
      dayjs(endDate).format("Do MMMM, YYYY") +
      timeString;
  } else {
    if (allDay === false) {
      if (
        dayjs(endDate, "MMMM DD, YYYY").isAfter(
          dayjs(date).format("MMMM DD, YYYY"),
          "hour"
        )
      ) {
        timeStringEnd = " to " + dayjs(endDate).format("HH:mm");
      }
      timeString = " at " + dayjs(date).format("HH:mm") + timeStringEnd;
    }
    dateString = "Date: " + dayjs(date).format("Do MMMM, YYYY ") + timeString;
  }

  EventDate.propTypes = {
    date: PropTypes.string,
    endDate: PropTypes.string,
  };

  return <span>{dateString}</span>;
};

export default EventDate;
