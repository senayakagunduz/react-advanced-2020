import React from "react";
// react router
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import Home from "./Home";
import About from "./pages/About";
import People from "./People";
import Error from "./pages/Error";
import SharedLayout from "./pages/SharedLayout";

const ReactRouterSetup = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="people" element={<People />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default ReactRouterSetup;
