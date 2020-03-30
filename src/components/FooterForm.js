import React from "react";
// import PropTypes from "prop-types";
// import { useStaticQuery, graphql } from "gatsby";
import { navigate } from "gatsby-link";
import styled from "styled-components";

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

const FormCont = styled.div`
  background: #f7f7f7;
  border-top: 1px solid #d7dade;
  border-bottom: 1px solid #d7dade;
  margin: 30px 0;
  padding: 30px 0;
`;

const FormContInner = styled.div`
  margin: 0 auto;
  max-width: 980px;
  text-align: center;
  width: 100%;
`;

const FormInner = styled.div`
  display: flex;
  justify-content: center;
`;

const FormGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 8px auto 2em;
`;

const FormExtra = styled.div`
  display: none;
`;

const TextInput = styled.input`
  font-size: 1em;
`;

const Button = styled.button`
  background: #6cbede;
  border: 1px solid #6cbede;
  color: #fff;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  cursor: pointer;
  display: inline-block;
  font-size: 0.9em;
  font-weight: bold;
  padding: 6px 20px;
  text-align: center;
  :hover {
    background: #58b5d7;
    color: #fff;
  }
`;

export const MailingForm = () => {
  const [state, setState] = React.useState({});

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state
      })
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error));
  };

  return (
    <FormCont>
      <FormContInner>
        <h3>Join our Mailing List</h3>

        <form
          action="https://landirani.createsend.com/t/y/s/jdhiii/"
          method="post"
          id="subForm"
          className="form-inline"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
        >
          <FormInner>
            <FormGroup>
              <TextInput
                type="text"
                name="cm-name"
                id="name"
                placeholder="Name"
                required
                onChange={handleChange}
              />
              <TextInput
                type="email"
                name="email"
                id="fieldEmail"
                placeholder="Email"
                required
                onChange={handleChange}
              />

              <Button className="btn btn-primary" type="submit">
                Join list
              </Button>
            </FormGroup>
          </FormInner>
          <FormExtra>
            <label>
              Don’t fill this out:{" "}
              <input name="bot-field" onChange={handleChange} />
            </label>
          </FormExtra>
          <input type="hidden" name="form-name" value="contact" />
        </form>
      </FormContInner>
    </FormCont>
  );
};

export default MailingForm;
