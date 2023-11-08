import {
  Container,
  Nav,
  Navbar,
  Button,
  Tooltip,
  OverlayTrigger
} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useIsLogin } from '../utils/hooks/useIsLogin';

const Header = () => {
  const navigate = useNavigate();
  const isLogin = JSON.parse(String(localStorage.getItem('isLogin')));
  // const isLogin = useIsLogin();

  const renderTooltip = props => (
    <Tooltip id='button-tooltip' {...props}>
      {isLogin.cstmrNm}
    </Tooltip>
  );
  return (
    <>
      <div className='main-panel'>
        {/* <nav className='navbar-absolute navbar-transparent  navbar navbar-expand-lg bg-transparent'>
          <div className='container-fluid'>
            <div className='navbar-wrapper'>
              <button type='button' className='navbar-toggler'>
                <span className='navbar-toggler-bar bar1'></span>
                <span className='navbar-toggler-bar bar2'></span>
                <span className='navbar-toggler-bar bar3'></span>
              </button>
            </div>
            <a href='/' className='navbar-brand'>
              Default Brand Text
            </a>
          </div>
          <button
            aria-label='Toggle navigation'
            type='button'
            className='navbar-toggler'
          >
            <span className='navbar-toggler-bar navbar-kebab'></span>
            <span className='navbar-toggler-bar navbar-kebab'></span>
            <span className='navbar-toggler-bar navbar-kebab'></span>
          </button>
        </nav> */}

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
              {isLogin ? (
                <>
                  <Button
                    className='my-2 my-sm-0'
                    onClick={() => {
                      localStorage.removeItem('isLogin');
                      navigate('/');
                    }}
                  >
                    로그아웃
                  </Button>
                  <OverlayTrigger
                    placement='right'
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip}
                  >
                    <div
                      style={{
                        borderRadius: '50px',
                        background: '#f0ad4e',
                        width: '50px',
                        height: '50px',
                        position: 'relative',
                        marginLeft: '10px',
                        cursor: 'pointer'
                      }}
                    >
                      <div
                        style={{
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          transform: 'translate(-50%, -50%)',
                          color: '#ffffff'
                        }}
                      >
                        ME
                      </div>
                    </div>
                  </OverlayTrigger>
                </>
              ) : (
                <Button
                  className='my-2 my-sm-0'
                  onClick={() => {
                    navigate('/user/login');
                  }}
                >
                  로그인
                </Button>
              )}
            </Nav>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default Header;
