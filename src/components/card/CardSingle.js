import React from "react";
import { styled } from "linaria/react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import EventDate from "../EventDate";
import CardContent from "./CardContent";

const ImageCont = styled.div`
  margin: 0;
  position: relative;
`;

const EventDateCont = styled.div`
  bottom: 12px;
  left: calc(50% - 150px);
  position: absolute;
  z-index: 100;
`;

// const Btn = styled.div`
//   border: 1px solid #f99d1c;
//   border-radius: 4px;
//   color: #f99d1c;
//   display: block;
//   padding: 8px;
//   text-align: center;
// `;

const CardSingle = (props) => {
  let cardImage;
  if (props.smallImage) {
    console.log("smallImage", props.smallImage);
    cardImage = <Img fixed={props.smallImage.childImageSharp.fixed} alt="" />;
  } else {
    cardImage = <img src="/img/default-image.jpg" alt="image" />;
  }

  return (
    <div>
      <Link to={props.url} className="card-image">
        <ImageCont>
          {props.displayDate && (
            <EventDateCont>
              <EventDate
                date={props.date}
                endDate={props.endDate}
                layout="card"
              />
            </EventDateCont>
          )}
          {cardImage}
        </ImageCont>
      </Link>
      <CardContent
        title={props.title}
        displayLocation={props.displayLocation}
        location={props.location}
        linkText={props.linkText}
        showPageLink={props.showPageLink}
        url={props.url}
      />
    </div>
  );
};

export default CardSingle;
