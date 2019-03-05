import React from "react";
// import { Link } from 'gatsby'
import footerStyles from "./footer.module.css";

const Footer = () => (
  <footer className={footerStyles.footer} role="contentinfo">
    <div className="container">
      <div className="columns">
        <div className="column is-half is-centered">
          <h3>Join our Mailing List</h3>

          <form
            action="https://landirani.createsend.com/t/y/s/jdhiii/"
            method="post"
            id="subForm"
            class="form-inline"
          >
            <div>
              <div class="form-group">
                <input
                  type="text"
                  name="cm-name"
                  id="name"
                  placeholder="Name"
                  required
                  class="form-control"
                />
                <input
                  type="email"
                  name="email"
                  id="fieldEmail"
                  placeholder="Email"
                  required
                  class="form-control"
                />

                <button class="btn btn-primary" type="submit">
                  Join list
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <nav role="navigation">
        <div class="columns is-mobile is-centered">
          <div class="nav column">
            <h3>Featured Projects</h3>
            <ul>
              <li>
                <a href="/projects/sams-village/">Sam's Village</a>
              </li>
              <li>
                <a href="/water/">Water</a>
              </li>
              <li>
                <a href="/health">Health</a>
              </li>
              <li>
                <a href="/education/">Education</a>
              </li>
              <li>
                <a href="/environment/">Environment</a>
              </li>
            </ul>
          </div>

          <div class="nav column">
            <h3>
              <a href="/news/">News</a>
            </h3>
            <ul>
              <li>
                <a href="/events/">Events</a>
              </li>
              <li>
                <a href="/category/general_news/">General News</a>
              </li>
              <li>
                <a href="/category/fundraising_news/">Fundraising News</a>
              </li>
              <li>
                <a href="/category/malawi_news/">News from Malawi</a>
              </li>
              <li>
                <a href="/category/uk_news/">News from the UK</a>
              </li>
              <li>
                <a href="/category/reports/">Reports</a>
              </li>
              <li>
                <a href="/category/newsletters/">Newsletters</a>
              </li>
            </ul>
          </div>

          <div class="nav column">
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

          <div class="nav column">
            <h3>
              <a href="/news/">Join us on&hellip;</a>
            </h3>
            <ul>
              <li>
                <a href="https://www.facebook.com/africanvision">Facebook</a>
              </li>
              <li>
                <a href="http://twitter.com/avmalawi">Twitter</a>
              </li>
              <li>
                <a href="http://www.youtube.com/landirani">Youtube</a>
              </li>
              <li>
                <a href="http://www.myspace.com/landirani">Myspace</a>
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

      <h3 class="footer_contact">Contact</h3>
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

      <p class="source-org copyright">
        &copy; 2019 African Vision Malawi. Registered charity 1113786.{" "}
        <a href="/privacy-statement/">View our Privacy Statement</a>
      </p>
    </div>
  </footer>
);

export default Footer;