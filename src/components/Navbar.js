import { Nav, Navbar, Offcanvas } from 'react-bootstrap';
import logo from '../images/logo.png';

function NavbarComponent() {
  return (
    <div>
      <Navbar expand='md' className="bg-body-tertiary mb-3 shadow text-center">
        <style>
          {`
            .navbar-center {
              display: flex;
              justify-content: center;
              align-items: center;
              width: 55%;
            }
          `}
        </style>
        <Navbar.Brand href="#" className="navbar-center">
        <img
            src={logo}
            height="auto"
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
            <Nav className="align-items-center" style={{fontFamily: "'Caveat', cursive", fontWeight: 'bold', fontSize: '20px'}}>
              <Nav.Link href="#action1" className="pe-3 button-pop-out">
                Home
              </Nav.Link>
              <Nav.Link href="#action2" className="pe-3 button-pop-out">
                Services
              </Nav.Link>
              <Nav.Link href="#action2" className="pe-3 button-pop-out">
                About Us
              </Nav.Link>
              <Nav.Link href="tel:802-353-2676" className="pe-3 button-pop-out">
              (802) 353-2676
              </Nav.Link>
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
