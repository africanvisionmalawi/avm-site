import React from "react";
import styled from "styled-components";
import PreviewCompatibleImage from "../PreviewCompatibleImage";

const TeamList = (props) => (
  <>
    <h2>{props.heading}</h2>
    <List>
      {props.teamData.map((team) => (
        <li key={team.name}>
          {team.photo && typeof team.photo === "object" && (
            <TeamPhoto>
              <PreviewCompatibleImage imageInfo={team.photo} />
            </TeamPhoto>
          )}
          <SubHeading>{team.name}</SubHeading>
          <About>{team.role}</About>
        </li>
      ))}
    </List>
  </>
);

const List = styled.ul`
  align-items: flex-start;
  background: #fff;
  border-radius: 2px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-template-rows: repeat(auto-fit, minmax(220px, 1fr));
  grid-gap: 1rem;
  justify-content: flex-start;
  margin-bottom: 2rem !important;
  padding: 15px;
  &,
  & li {
    list-style-type: none;
    margin: 0 !important;
    padding: 0;
  }
`;

const SubHeading = styled.h4`
  margin-bottom: 0;
`;

const TeamPhoto = styled.div`
  border-radius: 50%;
  max-height: 150px;
  max-width: 150px;
  overflow: hidden;
  & img {
    border: 1px solid #e5e5e5;
    // border-radius: 50%;
  }
`;

const About = styled.p`
  font-size: 0.8em;
  padding-bottom: 1.2em;
`;

export default TeamList;
