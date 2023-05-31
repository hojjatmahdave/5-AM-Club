import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Club from "../pages/5-am-club";

export const App = () => {
  return (
    <Routes>
      <Route path="" element={<Club />} />
    </Routes>
  );
};
