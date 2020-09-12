import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import CommentForm from "./CommentForm";


const Navbar2 = ({ showLoader }) => {
  return (
    
    <Navbar style={{ background: "#e8e8e8" }}>
      <Nav className="mr-auto navbar2">
        
      <Link
          to="/welcome" //need to create welcome page when they sign in
          style={linkStyle}
          onClick={showLoader}
          className="navLink"
        >
          <span>welcome</span>
        </Link>
        <Link
          to="/new"
          style={linkStyle}
          onClick={showLoader}
          className="navLink"
        >
          <span>new</span>
        </Link>
        <Link
          to="/threads" 
          style={linkStyle}
          onClick={showLoader}
          className="navLink"
        >
          <span>threads</span>
        </Link>
        <Link
          to="/past"
          style={linkStyle}
          onClick={showLoader}
          className="navLink"
        >
          <span>past</span>
        </Link>
        

        <Link
          to="/comments"
          style={linkStyle}
          onClick={showLoader}
          className="navLink"
        >
          <span>comment</span>
         
        </Link>

        <Link
          to="/ask"
          style={linkStyle}
          onClick={showLoader}
          className="navLink"
        >
          <span>ask</span>
        </Link>

        <Link
          to="/shows"
          style={linkStyle}
          onClick={showLoader}
          className="navLink"
        >
          <span>show</span>
        </Link>
        <Link
          to="/jobs"
          style={linkStyle}
          onClick={showLoader}
          className="navLink"
        >
          <span>jobs</span>
        </Link>
        <Link
          to="/submit"
          style={linkStyle}
          onClick={showLoader}
          className="navLink"
        >
          <span>submit</span>
        </Link>
      </Nav>
    </Navbar>
  );
};

const linkStyle = {
  textDecoration: "none",
  color: "#000",
  cursor: "pointer",
  marginRight: "10px",
  padding: "5px",
  paddingLeft: "20px",
  paddingRight: "20px",
  boxShadow: "0px 2px 10px -7px rgba(0, 0, 0, 0.75)",
  transition: " all 0.5s",
  background: "#ffff"
};

const dropDownMenuStyle = {
  boxShadow: " 0px 2px 15px -7px rgba(0, 0, 0, 0.75)"
};
export default Navbar2;
