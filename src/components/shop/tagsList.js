import { Stack, Tag } from "@chakra-ui/core";
import { styled } from "linaria/react";
import React from "react";

const TagHeading = styled.h3`
  display: inline-block;
  font-size: 0.9em;
  margin: 1rem 0 0;
`;

export const TagsList = (props) => {
  return (
    <>
      <TagHeading>Tags:</TagHeading>
      <Stack spacing="8px" isInline>
        {props.tags.map((tag) => (
          <Tag key={tag + `tag`}>{tag}</Tag>
        ))}
      </Stack>
    </>
  );
};
