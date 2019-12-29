import React from "react";
// import PropTypes from "prop-types";
// import { Link } from 'gatsby'
import buttonStyles from "./button.module.css";
import styled from "styled-components";

const CartTop = styled.div`
  cursor: pointer;
  margin-top: -10px;
  position: relative;
`;
const TotalItems = styled.span`
  background: rgba(255, 255, 255, 0.75);
  border-radius: 50%;
  color: #9a563f;
  font-weight: bold;
  left: 12px;
  position: absolute;
  text-align: center;
  top: 6px;
  width: 18px;
`;

const TotalPrice = styled.div`
  color: #fff;
  margin-top: -8px;
  text-align: center;
`;

const CartLink = ({ link, text }) => (
  <div
    className={`Header__summary snipcart-summary snipcart-checkout ${buttonStyles.cartLink}`}
  >
    <CartTop>
      <svg
        version="1.1"
        className={buttonStyles.cartLink}
        width="37"
        height="37"
        viewBox="0 0 16 16"
      >
        <path
          fill="#fff"
          d="M6 14.5c0 0.828-0.672 1.5-1.5 1.5s-1.5-0.672-1.5-1.5c0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5z"
        ></path>
        <path
          fill="#fff"
          d="M16 14.5c0 0.828-0.672 1.5-1.5 1.5s-1.5-0.672-1.5-1.5c0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5z"
        ></path>
        <path
          fill="#fff"
          d="M16 8v-6h-12c0-0.552-0.448-1-1-1h-3v1h2l0.751 6.438c-0.458 0.367-0.751 0.93-0.751 1.562 0 1.105 0.895 2 2 2h12v-1h-12c-0.552 0-1-0.448-1-1 0-0.003 0-0.007 0-0.010l13-1.99z"
        ></path>
      </svg>
      <TotalItems className="snipcart-total-items" />
    </CartTop>
    <TotalPrice className="snipcart-total-price" />
  </div>
);

export default CartLink;
