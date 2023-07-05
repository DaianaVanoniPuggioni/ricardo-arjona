import ReactGA from "react-ga4";
import { getEnvVariables } from "./helpers/getEnvVariables";
import { useEffect } from "react";
import { Home } from "./components/Home";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

const { VITE_GA } = getEnvVariables();

function App() {
  useEffect(() => {
    ReactGA.initialize(VITE_GA);
    ReactGA.send({
      hitType: "pageview",
      page: document.location.pathname,
      title: "Home Page",
    });
  }, []);

  return (
    <BrowserRouter basename="/arjona2">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/*">
            <Redirect to="/" />
          </Route>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
