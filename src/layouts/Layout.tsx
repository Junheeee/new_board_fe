import Footer from './Footer';
import Sidebar from './Sidebar';
import NavbarHeader from './NavbarHeader';

export default function Layout({ children }) {
  return (
    <>
      <div className='wrapper'>
        <Sidebar />
        <div className='main-panel'>
          <NavbarHeader />
          <div className='content'>{children}</div>
          <Footer />
        </div>
      </div>
    </>
  );
}
