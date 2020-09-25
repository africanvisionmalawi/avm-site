import React from "react";
import { Link } from "gatsby";
import { styled } from "linaria/react";
import pageLinksStyles from "../pagelinks.module.css";

const Content = styled.div`
  padding: 1rem 3px;
`;

const CardContent = (props) => {
  return (
    <Content>
      <h3>{props.title}</h3>
      {props.displayLocation && <span>{props.location}</span>}
      <p>{props.linkText}</p>
      {props.showPageLink && (
        <Link to={props.url} className={pageLinksStyles.btn}>
          Find out more
        </Link>
      )}
    </Content>
  );
};

export default CardContent;
