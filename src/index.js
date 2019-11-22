import React, { useContext } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Route } from 'react-router-dom';
import * as serviceWorker from "./serviceWorker";
import { Auth0Provider, useAuth0, Auth0Context } from "./react-auth0-spa";
import config from "./auth_config.json";
import history from "./utils/history";

console.log('call meeeenow.v.', useAuth0);


const onRedirectCallback = appState => {
  console.log('do i get here on call back....', appState);
  history.push(
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

const Testing = props => {
  const authContext = useContext(Auth0Context);
  console.log('context>>>>>>', authContext);
  return <div>loading...</div>;
};

ReactDOM.render(
  <Auth0Provider
    domain={config.domain}
    client_id={config.clientId}
    audience={config.audience}
    scope={config.scope}
    responseType={config.responseType}
    redirect_uri={window.location.origin}
    onRedirectCallback={onRedirectCallback}
  >
    <Testing />
  </Auth0Provider>,
  document.getElementById("root")
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
