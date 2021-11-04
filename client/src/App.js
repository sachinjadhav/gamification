import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Home from "./pages/Home/home";
import About from "./pages/LeaderBoard/about";
import Contact from "./pages/contact";
import Faq from "./pages/faq";
import CreateEvent from "./pages/CreateEvent/createevent";
import Kudos from "./pages/Kudos/kudos";

import "./style.css";
import "semantic-ui-css/semantic.min.css";

function App() {
  return (
    <div class="global-font-family">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/faq" component={Faq} />
          <Route path="/createevent" component={CreateEvent} />
          <Route path="/kudos" component={Kudos} />
        </Switch>
      </Router>
      <div className="Footer">
        <p style={{ textAlign: "center" }}>Arena 2021. All Rights Reserved</p>
      </div>
    </div>
  );
}
export default App;
