import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = ({ showLoader }) => {
  return (
    <Navbar style={{ backgroundColor: " #ff6600" }}>
      <Navbar.Brand href="#home" style={{ color: "#fff" }}>
        <Link
          to="/"
          style={{ color: "#fff", textDecoration: "none" }}
          onClick={showLoader}
        >

          <span className="logo">Y</span> Hacker NEWS

        
        </Link>
      </Navbar.Brand>

      <Link
          to="/login"
          style={{ position:"absolute", right:100,color: "#fff", textDecoration: "none" }}
          onClick={showLoader}
          className="navLink"
        >
          <span>login</span>
        </Link>

        
    </Navbar>
  );
};

export default Header;
