import { useLocation, NavLink } from 'react-router-dom';

import { Nav } from 'react-bootstrap';

export default function Sidebar() {
  return (
    <div className='sidebar' data-color='black'>
      <div className='sidebar-background' style={{ background: '#ff00ff' }} />
      <div className='sidebar-wrapper'>
        <div className='logo d-flex align-items-center justify-content-start'>
          <a
            href='/'
            // href='https://www.creative-tim.com?ref=lbd-sidebar'
            className='simple-text logo-mini mx-1'
          >
            <div className='logo-img'>
              <img
                src={require('../../src/assets/img/reactlogo.png')}
                alt='...'
              />
            </div>
          </a>
          <a className='simple-text'>New Board</a>
        </div>
        <Nav>
          <li className=''>
            <NavLink className='nav-link' to={'/'}>
              <i className='nc-icon nc-chart-pie-35' />
              <p>Dashboard1</p>
            </NavLink>
          </li>
          <li className='/admin/dashboard'>
            <NavLink className='nav-link' to={'/'}>
              <i className='nc-icon nc-chart-pie-35' />
              <p>Dashboard2</p>
            </NavLink>
          </li>
          <li className='/admin/dashboard'>
            <NavLink className='nav-link' to={'/'}>
              <i className='nc-icon nc-chart-pie-35' />
              <p>Dashboard3</p>
            </NavLink>
          </li>
          <li className='/admin/dashboard'>
            <NavLink className='nav-link' to={'/'}>
              <i className='nc-icon nc-chart-pie-35' />
              <p>Dashboard4</p>
            </NavLink>
          </li>
          <li className='/admin/dashboard'>
            <NavLink className='nav-link' to={'/'}>
              <i className='nc-icon nc-chart-pie-35' />
              <p>Dashboard5</p>
            </NavLink>
          </li>
        </Nav>
      </div>
    </div>
  );
}
