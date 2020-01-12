import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

import ComponentNav from "./Component/Nav";
import ComponentHome from "./Component/Home";

import VisualzationObject from "ws-visu-obj";

const PAGES = [
  {
    link: "/",
    title: "Home",
    component: <ComponentHome />
  }
];

Object.entries(VisualzationObject).forEach(([title, ComponentObject]) => {
  const PageComponent = React.lazy(() => import(`./Page/${title}`));
  PAGES.push({
    link: `/${title.toLowerCase()}`,
    title,
    component: (
      <React.Suspense fallback={<></>}>
        <PageComponent>
          <ComponentObject />
        </PageComponent>
      </React.Suspense>
    )
  });
});

const routes = PAGES.map(({ link, component }) => (
  <Route exact={link === "/"} key={link} path={link}>
    {component}
  </Route>
));

const App = () => (
  <Router>
    <ComponentNav pages={PAGES} />
    <Switch>{routes}</Switch>
  </Router>
);

ReactDOM.render(<App />, document.getElementById("app"));
serviceWorker.register();
