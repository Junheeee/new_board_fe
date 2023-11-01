import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

const Header = () => {
  return (
    <>
      <Navbar bg='light' data-bs-theme='light'>
        <Container>
          <Navbar.Brand href='#home'>Navbar</Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#features'>Features</Nav.Link>
            <Nav.Link href='#pricing'>Pricing</Nav.Link>
            <Nav.Link href='#About'>About</Nav.Link>
          </Nav>
          <Nav className='ml-auto'>
            <Button className='my-2 my-sm-0' type='submit'>
              이건머하지
            </Button>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
