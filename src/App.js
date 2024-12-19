import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import NewsGlobal from "./pages/NewsGlobal/NewsGlobal";
import Header from "./components/Header/Header";
import SavedNews from "./pages/Saved/Saved";
import Search from "./pages/Search/Search";

function App() {
  return (
    <Router>
      <Navbar />
      <Header />
      <Routes>
        <Route path="/" element={<NewsGlobal />} />
        <Route path="/saved" element={<SavedNews />} />
        <Route path="/search/:query" element={<Search />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
