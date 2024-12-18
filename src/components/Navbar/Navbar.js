import { NavLink } from "react-router-dom";
import "./Navbar.css";
import Logo from "../../assets/LogoNews.png";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = ({ title, onSearch }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    //use navigate
    e.preventDefault();
    navigate("/search/" + query); ///search?q=thailand | /search/thailand

    // onSearch(query);
    // setQuery("");

    // use params / use navigate = untuk mengambil value search
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <img src={Logo} alt="Logo" className="logo-image" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">{title}</span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" activeClassName="active">
                Indonesia
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/programming" // huruf kecil
                activeClassName="active"
              >
                Programming
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/saved"
                activeClassName="active"
              >
                Saved
              </NavLink>
            </li>
          </ul>
          <form className="d-flex" onSubmit={handleSearch}>
            <input
              type="text"
              className="form-control me-2"
              placeholder="Search News"
              aria-label="Search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button className="btn btn-outline-primary" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
