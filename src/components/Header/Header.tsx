import React from 'react'
import classnames from 'classnames'
import Spinner from 'components/Spinner'
import './Header.scss'

const Header = ({connected}: any) => {
    return (
      <div className='header sticky-top'>
        <div className='layout'>
          <header className='navbar navbar-expand navbar-dark flex-column flex-md-row bd-navbar'>
            <a className='navbar-brand mr-0 mr-md-2' href='/'>
              <span className='logo'>LOGO</span>
            </a>
            <div className='navbar-nav-scroll d-none d-md-flex'>
              <ul className='navbar-nav bd-navbar-nav flex-row'>
                <li className='nav-item'>
                  <a className='nav-link' href='/'>Support</a>
                </li>
              </ul>
            </div>
            <div className={classnames('navbar-connection', {'on': connected})}>
                <Spinner visible={true} size='18px' />
                <label>connected</label>
            </div>
          </header>
        </div>
      </div>
    )
}

export default Header
