import React from "react";
import { Link } from "gatsby";
import FooterForm from "./FooterForm";
import footerStyles from "./footer.module.css";

const Footer = () => (
  <footer className={footerStyles.footer} role="contentinfo">
    <div className="container">
      <FooterForm />
      <nav role="navigation">
        <div className="columns is-centered">
          <div className="nav column">
            <h3>Featured Projects</h3>
            <ul>
              <li>
                <Link to="/projects/sams-village/">Sam's Village</Link>
              </li>
              <li>
                <Link to="/water/">Water</Link>
              </li>
              <li>
                <Link to="/health/">Health</Link>
              </li>
              <li>
                <Link to="/education/">Education</Link>
              </li>
              <li>
                <Link to="/environment/">Environment</Link>
              </li>
            </ul>
          </div>

          <div className="nav column">
            <h3>
              <a href="/news">News</a>
            </h3>
            <ul>
              <li>
                <a href="/events/">Events</a>
              </li>
              <li>
                <a href="/tags/general/">General News</a>
              </li>
              <li>
                <a href="/tags/fundraising/">Fundraising News</a>
              </li>
              <li>
                <a href="/tags/malawi/">News from Malawi</a>
              </li>
              <li>
                <a href="/tags/uk/">News from the UK</a>
              </li>
              <li>
                <a href="/tags/reports/">Reports</a>
              </li>
              <li>
                <a href="/tags/newsletters/">Newsletters</a>
              </li>
            </ul>
          </div>

          <div className="nav column">
            <h3>
              <a href="/shop/">Store</a>
            </h3>
            <ul>
              <li>
                <a href="/shop/">View all products</a>
              </li>
              <li>
                <a href="/shop/cart/">View cart</a>
              </li>
              <li>
                <a href="/shop/checkout/">Checkout</a>
              </li>
            </ul>
          </div>

          <div className="nav column">
            <h3>
              <a href="/news">Join us on&hellip;</a>
            </h3>
            <ul>
              <li>
                <a href="https://www.facebook.com/africanvision">Facebook</a>
              </li>
              <li>
                <a href="https://twitter.com/avmalawi">Twitter</a>
              </li>
              <li>
                <a href="https://www.youtube.com/landirani">Youtube</a>
              </li>
              <li>
                <a href="https://www.myspace.com/landirani">Myspace</a>
              </li>
              <li>
                <a href="https://mydonate.bt.com/charities/thelandiranitrust">
                  MyDonate
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <h3 className="footer_contact">Contact</h3>
      <p>
        email: info@africanvision.org.uk
        <br />
        tel (United Kingdom): +44 (0)20 8287 8169
        <br />
        tel (Malawi): +265 (0)759 005
        <br />
        post (United Kingdom): 31 Upper Brighton Road, Surbiton, Surrey KT6 6QX
        <br />
        post (Malawi): P.O. Box 30928, Lilongwe
      </p>

      <p className="source-org copyright">
        &copy; 2019 African Vision Malawi. Registered charity 1113786.{" "}
        <a href="/privacy-statement/">View our Privacy Statement</a>
      </p>
    </div>
  </footer>
);

export default Footer;
