import React from "react";

import ErrorBoundary from "./components/common/error-boundary/ErrorBoundary";
import { MainPage } from "./pages/main-page/MainPage";

import "./App.css";

function App(): React.ReactElement {
  return (
    <div className="App">
      <ErrorBoundary>
        <MainPage />
      </ErrorBoundary>
    </div>
  );
}

export default App;
