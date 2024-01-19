import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet, Link, useNavigate } from 'react-router-dom';

const AppLayout = () => {
  const [keyword, setKeyword] = useState('');
  const navigate = useNavigate();

  const searchByKeyword = (event) => {
    event.preventDefault();
    navigate(`/movies?q=${keyword}`);
    setKeyword('');
  };

  return (
    <div>
      <Navbar expand='lg' className='bg-black'>
        <Container fluid>
          <Link to='/'>
            <Navbar.Brand>
              <img width={100} src='/netflix-logo.png' />
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls='navbarScroll' />
          <Navbar.Collapse id='navbarScroll'>
            <Nav
              className='me-auto my-2 my-lg-0'
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Link to='/' className='text-white nav-link'>
                Home
              </Link>
              <Link to='/movies' className='text-white nav-link'>
                Movies
              </Link>
            </Nav>
            <Form className='d-flex' onSubmit={searchByKeyword}>
              <Form.Control
                type='search'
                placeholder='Search'
                className='me-2'
                aria-label='Search'
                value={keyword}
                onChange={(event) => setKeyword(event.target.value)}
              />
              <Button variant='outline-danger' type='submit'>
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
};

export default AppLayout;
