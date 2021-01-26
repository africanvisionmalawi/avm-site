import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { Link } from "gatsby";
import { styled } from "linaria/react";
import React from "react";

const TagsNavCont = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
  width: 100%;
`;

const Tag = styled.span`
  display: block;
  margin: 8px;
  & a {
    border: 1px solid #f99d1c;
    border-radius: 4px;
    color: #f99d1c;
    cursor: pointer;
    display: block;
    padding: 3px 8px;
    text-align: center;
  }
  &.active a {
    background: #f99d1c;
    color: #fff;
  }
`;

const Inner = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 579px) {
    display: none;
  }
`;

const MobileMenu = styled.div`
  @media (min-width: 580px) {
    display: none;
  }
`;

export const NavTags = (props) => {
  return (
    <TagsNavCont>
      <Inner>
        {props.tags.map((tag) => {
          // console.log("active ", props.active);
          return (
            <Tag className={props.active === tag.slug ? "active" : null}>
              <Link to={`${props.tagsBase}${tag.slug}`}>{tag.title}</Link>
            </Tag>
          );
        })}
      </Inner>
      <MobileMenu>
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            Select Category:
          </MenuButton>
          <MenuList>
            {props.tags.map((tag) => {
              return (
                <MenuItem>
                  <Link to={`/shop/category/${tag.slug}`}>{tag.title}</Link>
                </MenuItem>
              );
            })}
          </MenuList>
        </Menu>
      </MobileMenu>
    </TagsNavCont>
  );
};
