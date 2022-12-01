import React, {useState, useEffect} from "react";
import { Navbar, Container, Col, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { headerLinks } from '../../../constants/newData';
import { NavLink } from "react-router-dom";

export default function Header() {
  const logoWhite = "./imagesNew/logos/sandbytes-logo-white.svg";
  const logoBlue = "./imagesNew/logos/sandbytes-logo-blue.svg";
  const hamburgerWhite = "./imagesNew/logos/hamburger-white.svg";
  const hamburgerBlue = "./imagesNew/logos/hamburger-blue.svg";
  const page = window.location.pathname;
  const [ scrolled, setScrolled ] = useState();

  const handleScroll = () => {
    if (window.pageYOffset > 1) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, []);

  return (
    <>
      {/*Desktop Nav*/}
      <Navbar className={`header desktop-nav ${page === '/' ? 'green-border' : ''} ${scrolled ? 'nav-scroll' : ''}`} sticky="top">
        <Container className="header-container" fluid>
            <Col className="header-logo" md={3} lg={4}>
              <LinkContainer to="/">
                <img className="logo" src={scrolled ? logoBlue : logoWhite} alt="company logo" />
              </LinkContainer>
            </Col>

            <Col className="links-container d-flex" md={9} lg={8}>
              {headerLinks.map((links, index) => {
                return (   
                  <NavLink exact to={links.url} className={`nav-link header-links ${links.class} ${scrolled ? 'link-scroll' : ''}`} activeClassName="active" key={`header-${index}`} >
                    {links.name}
                  </NavLink>                                                               
                )
              })}
              
              <NavLink className={`nav-link header-links login ${scrolled ? 'link-scroll' : ''}`} to="/login">
                Login
              </NavLink>

              <NavLink className="nav-link contact-us-btn" to="/contact">
                Contact Us
              </NavLink>
            </Col>
        </Container>
      </Navbar>

      {/*Mobile Nav*/}
      <Navbar collapseOnSelect expand="lg" className={`header mobile-nav ${page === '/' ? 'green-border' : ''} ${scrolled ? 'nav-scroll' : ''}`} sticky="top">
        <Container fluid>
          <Navbar.Brand href="/"><img className="logo" src={scrolled ? logoBlue : logoWhite} alt="company logo" /></Navbar.Brand>

          <Navbar.Toggle aria-controls="mobile-navbar" className={`hamburger ${scrolled ? 'hamburger-scroll' : ''}`}>
            <span className="navbar-toggler-icon" style={{ backgroundImage: scrolled ? `url(${hamburgerBlue})` : `url(${hamburgerWhite})` }}></span>
          </Navbar.Toggle>

          <Navbar.Collapse id="mobile-navbar" className="hamburger-menu">
            <Nav className="me-auto mobile-links-container">
              {headerLinks.map((links, index) => {
                return (   
                  <NavLink exact to={links.url} className={`nav-link header-links ${links.class} ${scrolled ? 'link-scroll' : ''}`} activeClassName="active" key={`header-${index}`} >
                    {links.name}
                  </NavLink>                                                               
                )
              })}

              <NavLink className={`nav-link header-links login ${scrolled ? 'link-scroll' : ''}`} to="/login">
                Login
              </NavLink>

              <NavLink className="nav-link contact-us-btn" to="/contactus">
                Contact Us
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
