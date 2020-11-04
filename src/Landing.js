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
        <h3>We are the the ultimate advocate for the technical needs of our clients.</h3>
        {/* <p className="lead">Have Questions? We always respond same day!</p>
        <p>
          <a href="http://dev.turquoiseltd.com" className="btn btn-outline-white btn-lg mb-2">Get Answers</a>
        </p> */}
        <p className="lead">
          Code &amp; Candor was founded because there is an awful problem faced by non-technical business owners. They are unable to find a development team or consultant operating with honesty, clarity and integrity. These values are the core of why Code &amp; Candor exists today. We're real people, humans if you will. A small, passionate team that delivers solutions to help you realize your vision. 
          Every project is designed exactly for what you need not put through a template process that creates an imbalance in value for both parties. And if we can provide you with a templated process that will be reflected in the pricing.
        </p>
        <p className="lead"> 
          I've worked for consulting companies for years and I can tell you this: speaking with a good salesman might make you feel confident but it won't save you from being screwed over. Let's call that the old way. Let's make a new way. A process where both parties operate with integrity and honesty (see above about everyone being human). 
        </p>
        <p className="lead">
            You might be thinking wow, that's a bold move to put this out so bluntly on your companies website. Aren't you worried you'll lose out on clients? Our answer is easy, of course not! We love our process and are committed to providing a very authentic experience for our clients. If this breakdown scares you off we would be a bad fit anyways, better to find out now right?
        </p>
        <p className="lead">We have been swamped with work right out of the gate and still need to finish our own website! </p>
        <p className="lead">Please reach out to Carmen@codeandcandor.dev for inquiries.</p>
        <p className="lead">Stay safe out there!</p>
    </div>
  </Wrapper>
)
