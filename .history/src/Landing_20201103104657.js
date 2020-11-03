import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;`;

export const Landing = () => (
  <Wrapper>
    <div className="home-hero-text">
      <script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>
      <script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"crossorigin></script>
      <script src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"crossorigin></script>
            <h1 className="jumbotron-heading">Say <em>hello</em> to <strong>the Transparent Development Process</strong></h1>
            <p className="lead">We re the the ultimate advocate for the technical needs of our clients and we offer a range of services.</p>
            {/* <p className="lead">Have Questions? We always respond same day!</p>
            <p>
                <a href="http://dev.turquoiseltd.com" className="btn btn-outline-white btn-lg mb-2">Get Answers</a>
            </p> */}
            <p className="lead">Code &amp; Candor was founded because there is a rampant problem for non-technical business owners who are unable to find a development team or consultant operating with honesty, clarity and integrity.</p>
            <p className="lead"> These values are the core of why Code &amp; Candor exists today.</p>
            <p className="lead">We have been swamped with work right out of the gate and still need to finish our own website! Please reach out to Carmen@codeandcandor.dev in the meantime.</p>
            <p className="lead">Stay safe out there!</p>
    </div>
  </Wrapper>
)
