import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Home from "./pages/Home/home";
import CreateEvent from "./pages/CreateEvent/createevent";
import Kudos from "./pages/Kudos/kudos";
import Marketplace from "./pages/Marketplace/marketplace";

import "./style.css";
import "semantic-ui-css/semantic.min.css";

function App() {
  return (
    <div class="global-font-family">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/createevent" component={CreateEvent} />
          <Route path="/kudos" component={Kudos} />
          <Route path="/marketplace" component={Marketplace} />
        </Switch>
      </Router>
      <div className="Footer">
        <p style={{ textAlign: "center" }}>Arena 2021. All Rights Reserved</p>
      </div>
    </div>
  );
}
export default App;
