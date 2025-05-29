import { useEffect } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import ReactGA from "react-ga4";
import TagManager from "react-gtm-module";

import { getEnvVariables } from "./helpers/getEnvVariables";
import { Home } from "./components/Home";

const { VITE_GA } = getEnvVariables();
const TagManagerArgs = {
	gtmId: 'GTM-N2N9W5J',
};

function App() {

  useEffect(() => {
		TagManager.initialize(TagManagerArgs);
	}, []);

  useEffect(() => {
    ReactGA.initialize(VITE_GA);
    ReactGA.send({
      hitType: "pageview",
      page: document.location.pathname,
      title: "Home Page",
    });
  }, []);

  return (
    <BrowserRouter basename="/festival-bandera">
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
