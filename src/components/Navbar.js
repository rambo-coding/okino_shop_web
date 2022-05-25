import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import navLogo from "../assets/logo192.png"

const NavBar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={navLogo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt=""
            />
            &nbsp; Okino Shop
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#"> หน้าแรก</Nav.Link>
              <Nav.Link href="#about">เกี่ยวกับเรา</Nav.Link>
              <Nav.Link href="#service">บริการ</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* <div className="container">
        <header className="blog-header py-3">
          <div className="row flex-nowrap justify-content-between align-items-center">
            <div className="col-4 pt-1">
              <a className="link-secondary" href="#">
              </a>
            </div>
            <div className="col-4 text-center">
              <span className="blog-header-logo text-dark">OKINO SHOP</span>
            </div>
            <div className="col-4 d-flex justify-content-end align-items-center">
              <a className="link-secondary" href="#" aria-label="Search">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="mx-3"
                  role="img"
                  viewBox="0 0 24 24"
                >
                  <title>Search</title>
                  <circle cx="10.5" cy="10.5" r="7.5" />
                  <path d="M21 21l-5.2-5.2" />
                </svg>
              </a>
              <a className="btn btn-sm btn-outline-secondary" href="#">
                Sign up
              </a>
            </div>
          </div>
        </header>
        <div className="nav-scroller py-1 mb-2">
          <nav className="nav d-flex justify-content-between">
            <a className="p-2 link-secondary" href="#">
              World
            </a>
            <a className="p-2 link-secondary" href="#">
              U.S.
            </a>
            <a className="p-2 link-secondary" href="#">
              Technology
            </a>
            <a className="p-2 link-secondary" href="#">
              Design
            </a>
            <a className="p-2 link-secondary" href="#">
              Culture
            </a>
            <a className="p-2 link-secondary" href="#">
              Business
            </a>
            <a className="p-2 link-secondary" href="#">
              Politics
            </a>
            <a className="p-2 link-secondary" href="#">
              Opinion
            </a>
            <a className="p-2 link-secondary" href="#">
              Science
            </a>
            <a className="p-2 link-secondary" href="#">
              Health
            </a>
            <a className="p-2 link-secondary" href="#">
              Style
            </a>
            <a className="p-2 link-secondary" href="#">
              Travel
            </a>
          </nav>
        </div>
      </div> */}
    </>
  );
};

export default NavBar;
