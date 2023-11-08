import Container from 'react-bootstrap/Container';

export default function Footer() {
  return (
    <footer className='footer px-0 px-lg-3'>
      <Container fluid>
        <nav>
          <ul className='footer-menu'>
            <li>
              <a href='/' onClick={e => e.preventDefault()}>
                Home
              </a>
            </li>
            <li>
              <a href='/' onClick={e => e.preventDefault()}>
                Company
              </a>
            </li>
            <li>
              <a href='/' onClick={e => e.preventDefault()}>
                Portfolio
              </a>
            </li>
            <li>
              <a href='/' onClick={e => e.preventDefault()}>
                Blog
              </a>
            </li>
          </ul>
          <p className='copyright text-center'>
            © {new Date().getFullYear()} <a href='/'>New Board</a>, made with
            love for a better web
          </p>
        </nav>
      </Container>
    </footer>
  );
}
