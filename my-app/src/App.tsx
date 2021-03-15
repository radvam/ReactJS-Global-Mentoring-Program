import React from "react";
import { Switch, Route } from "react-router-dom";

import ErrorBoundary from "./components/common/error-boundary/ErrorBoundary";
import { MainPage } from "./pages/main-page/MainPage";
import { MovieDetailsPage } from "./pages/movie-details-page/MovieDetailsPage";
import { NotFoundPage } from "./pages/not-found-page/NotFoundPage";

import "antd/dist/antd.css";
import "./App.css";

const Layout = (): React.ReactElement => (
  <Switch>
    <Route exact path="/" component={MainPage} />
    <Route path="/movie/:slugId" component={MovieDetailsPage} />
    <Route path={"*"} component={NotFoundPage} />
  </Switch>
);

function App(): React.ReactElement {
  return (
    <div className="App">
      <ErrorBoundary>
        <Layout />
      </ErrorBoundary>
    </div>
  );
}

export default App;
