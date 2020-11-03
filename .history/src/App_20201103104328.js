import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import './App.css';
// import Navbar from './Navbar';
// import Footer from './Footer';
import { Landing } from './Landing';


function App() {
  return (
    <div classNameName="App">
      <script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>
      <script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"crossorigin></script>
      <script src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"crossorigin></script>
      {/* <script>var Alert = ReactBootstrap.Alert;</script> */}
      <section className="cover text-center">
            {/* <Navbar color="blue"/> */}
            <Landing />
      </section>
      {/* <section className="text-center">
        <React.Fragment>
          <Footer />
        </React.Fragment>
      </section> */}
    </div>
  );
}
export default App;
