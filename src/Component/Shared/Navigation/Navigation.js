import React from 'react';
import {
  Button,
  Container,
  Image,
  Nav,
  Navbar,
  NavDropdown,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo.png';

const Navigation = () => {
  const { user, logout } = useAuth();
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand='lg'
        sticky='top'
        bg='info'
        variant='light'
        className='fs-5 fw-bold'
      >
        <Container>
          <Navbar.Brand href='/home'>
            <img src={logo} alt='' width='120px' height='100px' />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link href='/home'>Home</Nav.Link>
              <Nav.Link as={HashLink} to='/home#products'>
                BestSellingProducts
              </Nav.Link>
              <Nav.Link as={Link} to='/allproducts'>
                ExploreAllOurproducts
              </Nav.Link>
              <Nav.Link as={Link} to='/aboutus'>
                AboutUs
              </Nav.Link>
              {/* <NavDropdown title='Dropdown' id='collasible-nav-dropdown'>
                <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
                <NavDropdown.Item href='#action/3.2'>
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href='#action/3.3'>
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href='#action/3.4'>
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
            <Nav>
              <Navbar.Text>
                Signed in as: <a href='#login'>{user?.displayName}</a>
                <Image
                  className='justify-content-end'
                  src={user.photoURL}
                  size='sm'
                  alt=''
                  roundedCircle
                />
              </Navbar.Text>
              {user?.email ? (
                <div>
                  {/* <Dashboard></Dashboard> */}
                  <Nav.Link as={Link} to='/dashboard'>
                    <Button color='inherit' variant='secondary'>Admin</Button>
                  </Nav.Link>
                  <Button onClick={logout}
                  variant='secondary'>Logout</Button>
                </div>
              ) : (
                <Nav.Link as={Link} to='/login'>
                  Login
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
