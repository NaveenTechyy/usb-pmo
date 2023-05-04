import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store/store";
import "./locales/index";

import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import Navbar from "./components/Navbar/Navbar";
import Home from "./containers/Home/Home";
import Card from "./containers/Card/Card";
import CardTwo from "./containers/Card/CardTwo";
import PageNotFound from "./containers/PageNotFound/PageNotFound";

const App = () => {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/card" exact element={<Card />} />
            <Route path="/cardtwo" exact element={<CardTwo />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Router>
      </Provider>
    </ErrorBoundary>
  );
};

export default App;
