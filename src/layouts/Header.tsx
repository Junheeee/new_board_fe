import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar bg='light' data-bs-theme='light'>
        <Container>
          <Navbar.Brand
            href='/'
            onClick={() => {
              navigate('/');
            }}
          >
            뉴보드 ᕕ( ᐛ )ᕗ
          </Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link href=''>ꯁ</Nav.Link>
            <Nav.Link href=''>=͟͟͞͞♡</Nav.Link>
            <Nav.Link href=''>ఇ</Nav.Link>
            <Nav.Link href=''>ಌ</Nav.Link>
          </Nav>
          <Nav className='ml-auto'>
            <Button
              className='my-2 my-sm-0'
              onClick={() => {
                navigate('/user/login');
              }}
            >
              로그인
            </Button>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
