import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import NewsGlobal from "./pages/NewsGlobal/NewsGlobal";
import { useDispatch, useSelector } from "react-redux";
import Header from "./components/Header/Header";

function App() {
  const valueFromRedux = useSelector((state) => state);

  return (
    <Router>
      <Navbar />
      <Header />
      <Routes>
        <Route path="/" element={<NewsGlobal />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
