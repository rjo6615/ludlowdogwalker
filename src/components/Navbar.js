import { Nav, Navbar, Offcanvas } from 'react-bootstrap';

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
              width: 65%;
            }
          `}
        </style>
        <Navbar.Brand href="#" className="navbar-center">
          Ludlow Dog Walker
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
            <Nav className="align-items-center">
              <Nav.Link href="#action1" className="pe-3">
                Home
              </Nav.Link>
              <Nav.Link href="#action2" className="pe-3">
                Link
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;
