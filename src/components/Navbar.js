import { Nav, Navbar, Offcanvas } from 'react-bootstrap';
import logo from '../images/logo.png';

function NavbarComponent() {
  const navbarHeight = 150;
  const customScroll = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      const offset = navbarHeight;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };
  return (
    <div>
      <Navbar fixed="top" expand='md' className="shadow text-center" style={{ backgroundColor: 'white', height: '80px'}}>
        <Navbar.Brand href="#" className="navbar-center text-black">
        <img
            src={logo}
            height="60px"
            alt="Logo"
            loading="lazy"
            style={{ marginTop: "-1px" }}
            className="me-5"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-md`}
          aria-labelledby={`offcanvasNavbarLabel-expand-md`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
              Ludlow Dog Walker
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="align-items-center" style={{fontFamily: "'Caveat', cursive", fontWeight: 'bold', fontSize: '25px'}}>
              <Nav.Link onClick={() => customScroll('home')} className="pe-3 button-pop-out text-black">
                Home
              </Nav.Link>
              <Nav.Link onClick={() => customScroll('services')} className="pe-3 button-pop-out text-black">
                Services
              </Nav.Link>
              <Nav.Link onClick={() => customScroll('about')} className="pe-3 button-pop-out text-black">
                About
              </Nav.Link>
              {/* <Nav.Link href="tel:802-353-2676" className="pe-3 button-pop-out text-black">
              (802) 353-2676
              </Nav.Link> */}
              <a
              data-mdb-ripple-init
              class="btn text-white btn-floating m-1 button-pop-out"
              style={{backgroundColor: "#3b5998"}}
              href="https://www.facebook.com/profile.php?id=100064003659462"
              role="button"
              ><i class="fab fa-facebook-f"></i>
              </a>
              <a
              data-mdb-ripple-init
              class="btn text-white btn-floating m-1 instagram button-pop-out"
              href="https://www.instagram.com/lynnandjims/"
              role="button"
              ><i class="fab fa-instagram"></i>
              </a>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;
