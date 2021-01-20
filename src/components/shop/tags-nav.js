import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/core";
import { Link } from "gatsby";
import { styled } from "linaria/react";
import React from "react";

const tags = [
  {
    title: "Books",
    slug: "books",
  },
  {
    title: "Christmas",
    slug: "christmas",
  },
  {
    title: "Craft",
    slug: "craft",
  },
  {
    title: "Education Packs",
    slug: "education-packs",
  },
  {
    title: "Food",
    slug: "food",
  },
  {
    title: "Giftlist",
    slug: "giftlist",
  },
  {
    title: "Media",
    slug: "media",
  },
  {
    title: "Postcards",
    slug: "postcards",
  },
];

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

export const TagsNav = (props) => {
  return (
    <TagsNavCont>
      <Inner>
        {tags.map((tag) => {
          return (
            <Tag className={props.active === tag.slug ? "active" : null}>
              <Link to={`/shop/category/${tag.slug}`}>{tag.title}</Link>
            </Tag>
          );
        })}
      </Inner>
      <MobileMenu>
        <Menu>
          <MenuButton as={Button} rightIcon="chevron-down">
            Select Category:
          </MenuButton>
          <MenuList>
            {tags.map((tag) => {
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
