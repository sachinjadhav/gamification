import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Home from "./pages/Home/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Faq from "./pages/faq";
import "./style.css";
import "semantic-ui-css/semantic.min.css";
//sds
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
        </Switch>
      </Router>
      <div className="Footer">
        <p style={{ textAlign: "center" }}>Arena 2021. All Rights Reserved</p>
      </div>
    </div>
  );
}
export default App;
