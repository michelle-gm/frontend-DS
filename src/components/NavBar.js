import { useState, useEffect} from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/img/logo.jpeg";

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, seScrolled] = useState(false);
    
    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50){
                seScrolled(true);
            } else {
                seScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll",onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }
    
    return(
        <Navbar expand="lg" className={scrolled ? "scrolled":""}>
      <Container>
        {/* En esta parte es preferible poner una imagen para hacerlo mas similar al boceto */}
        <Navbar.Brand href="#home">
            <img src={logo} alt="Logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link': 'navbar-link'} onClick={()=> onUpdateActiveLink('home')}>Home</Nav.Link> */}
            <Nav.Link href="#info" className={activeLink === 'info' ? 'active navbar-link': 'navbar-link'} onClick={()=> onUpdateActiveLink('info')}>¿Quiénes somos?</Nav.Link>
            <Nav.Link href="#login" className={activeLink === 'login' ? 'active navbar-link': 'navbar-link'} onClick={()=> onUpdateActiveLink('login')}>Log in</Nav.Link>
            <Nav.Link href="#signup" className={activeLink === 'signup' ? 'active navbar-link': 'navbar-link'} onClick={()=> onUpdateActiveLink('signup')}>Sign Up</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}