import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link,useNavigate } from "react-router-dom";

export default function Header() {
 const navigate = useNavigate()
  const user = JSON.parse(localStorage.getItem('user-info'))
  // console.log(user)

  function logout(){

    localStorage.clear();
    navigate("/register")
   }

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Nav className="me-auto nav_bar_wrapper">
          {localStorage.getItem("user-info") ? (
            <>
              <Link to="/">ProductList</Link>
              <Link to="/add">Add Product</Link>
              <Link to="/update">Update</Link>
            </>
          ) : (
            <>
              <Link to="/register">Register</Link>
              <Link to="/login">Login</Link>
            </>
          )}
        </Nav>
            {localStorage.getItem('user-info')?
        <Nav>
            <NavDropdown title={user && user.name}>
            <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
            </NavDropdown>
        </Nav>
        :null}
      </Navbar>
    </div>
  );
}
