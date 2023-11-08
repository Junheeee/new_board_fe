import React from 'react';

import {
  Navbar,
  Container,
  Nav,
  Dropdown,
  Button,
  OverlayTrigger,
  Tooltip
} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function NavbarHeader() {
  const navigate = useNavigate();
  const isLogin = JSON.parse(String(localStorage.getItem('isLogin')));
  const renderTooltip = props => (
    <Tooltip id='button-tooltip' {...props}>
      {isLogin.cstmrNm}
    </Tooltip>
  );
  return (
    <Navbar bg='light' expand='lg'>
      <Container fluid>
        <div className='d-flex justify-content-center align-items-center ml-2 ml-lg-0'>
          <Button
            variant='dark'
            className='d-lg-none btn-fill d-flex justify-content-center align-items-center rounded-circle p-2'
            //   onClick={mobileSidebarToggle}
          >
            <i className='fas fa-ellipsis-v'></i>
          </Button>
          <Navbar.Brand onClick={() => navigate('/')} className='mr-2'>
            뉴보드 ᕕ( ᐛ )ᕗ
          </Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls='basic-navbar-nav' className='mr-2'>
          <span className='navbar-toggler-bar burger-lines'></span>
          <span className='navbar-toggler-bar burger-lines'></span>
          <span className='navbar-toggler-bar burger-lines'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='nav mr-auto' navbar>
            <Nav.Item>
              <Nav.Link
                data-toggle='dropdown'
                href='#pablo'
                onClick={e => e.preventDefault()}
                className='m-0'
              >
                <i className='nc-icon nc-palette'></i>
                <span className='d-lg-none ml-1'>Dashboard</span>
              </Nav.Link>
            </Nav.Item>
            <Dropdown as={Nav.Item}>
              <Dropdown.Toggle
                as={Nav.Link}
                data-toggle='dropdown'
                id='dropdown-67443507'
                variant='default'
                className='m-0'
              >
                <i className='nc-icon nc-planet'></i>
                <span className='notification'>5</span>
                <span className='d-lg-none ml-1'>Notification</span>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href='#pablo' onClick={e => e.preventDefault()}>
                  Notification 1
                </Dropdown.Item>
                <Dropdown.Item href='#pablo' onClick={e => e.preventDefault()}>
                  Notification 2
                </Dropdown.Item>
                <Dropdown.Item href='#pablo' onClick={e => e.preventDefault()}>
                  Notification 3
                </Dropdown.Item>
                <Dropdown.Item href='#pablo' onClick={e => e.preventDefault()}>
                  Notification 4
                </Dropdown.Item>
                <Dropdown.Item href='#pablo' onClick={e => e.preventDefault()}>
                  Another notification
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Nav.Item>
              <Nav.Link
                className='m-0'
                href='#pablo'
                onClick={e => e.preventDefault()}
              >
                <i className='nc-icon nc-zoom-split'></i>
                <span className='d-lg-block'> Search</span>
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Nav className='ml-auto' navbar>
            <Nav.Item>
              <Nav.Link
                className='m-0'
                href='#pablo'
                onClick={e => e.preventDefault()}
              >
                <span className='no-icon'>Account</span>
              </Nav.Link>
            </Nav.Item>
            <Dropdown as={Nav.Item}>
              <Dropdown.Toggle
                aria-expanded={false}
                aria-haspopup={true}
                as={Nav.Link}
                data-toggle='dropdown'
                id='navbarDropdownMenuLink'
                variant='default'
                className='m-0'
              >
                <span className='no-icon'>Dropdown</span>
              </Dropdown.Toggle>
              <Dropdown.Menu aria-labelledby='navbarDropdownMenuLink'>
                <Dropdown.Item href='#pablo' onClick={e => e.preventDefault()}>
                  Action
                </Dropdown.Item>
                <Dropdown.Item href='#pablo' onClick={e => e.preventDefault()}>
                  Another action
                </Dropdown.Item>
                <Dropdown.Item href='#pablo' onClick={e => e.preventDefault()}>
                  Something
                </Dropdown.Item>
                <Dropdown.Item href='#pablo' onClick={e => e.preventDefault()}>
                  Something else here
                </Dropdown.Item>
                <div className='divider'></div>
                <Dropdown.Item href='#pablo' onClick={e => e.preventDefault()}>
                  Separated link
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Nav.Item>
              {isLogin ? (
                <OverlayTrigger
                  placement='bottom'
                  delay={{ show: 100, hide: 200 }}
                  overlay={renderTooltip}
                >
                  <Nav.Link
                    className='m-0'
                    onClick={() => {
                      localStorage.removeItem('isLogin');
                      navigate('/');
                    }}
                  >
                    <span className='no-icon'>Log out</span>
                  </Nav.Link>
                </OverlayTrigger>
              ) : (
                <Nav.Link
                  className='m-0'
                  onClick={() => {
                    navigate('/user/login');
                  }}
                >
                  <span className='no-icon'>Log in</span>
                </Nav.Link>
              )}
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
