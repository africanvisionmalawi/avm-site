import React from "react";
import { styled } from "linaria/react";

const TagHeading = styled.h3`
  display: inline-block;
  font-size: 0.9em;
  margin-right: 5px;
`;

const TagItem = styled.span`
  display: inline-block;
  font-size: 0.8em;
`;

const TagsList = props => {	
	return (		
          <>
            <TagHeading>Tags:</TagHeading>
            {props.tags.map((tag) => (
              <TagItem key={tag + `tag`}>{tag}</TagItem>
            ))}
          </>        
	)
}
export default TagsList


