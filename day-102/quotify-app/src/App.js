import React from 'react';
import AjaxApp from "./ajax";
import LocalQuoteApp from "./local-quote";
import AddQuoteApp from "./add-quote";
import ListQuotesApp from "./list-quotes";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const AppRouter = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li> <Link to="/"> Random Quote (Ajax API) </Link> </li>
          <li> <Link to="/random/"> Random Quote (Local) </Link> </li>
          <li> <Link to="/add/"> Add Quote (Local) </Link> </li>
          <li> <Link to="/list/"> List All Quotes (Local) </Link> </li>
        </ul>
      </nav>

      <Route path="/" exact component={AjaxApp} />
      <Route path="/random/" component={LocalQuoteApp} />
      <Route path="/add/" component={AddQuoteApp} />
      <Route path="/list/" component={ListQuotesApp} />
    </div>
  </Router>
);

export default AppRouter;