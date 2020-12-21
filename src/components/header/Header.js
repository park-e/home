import React from 'react';
import './Header.scss';

class Header extends React.Component {
  state = {
    modalHidden: true,
  };

  handleClick = () => this.props.toggleModal();

  render() {
    return (
      <div className='header-mob header-web'>
        <div>
          <img
            className='header-web-item logo'
            src='https://cdn.jsdelivr.net/gh/park-e/cdn@latest/Logo/logo.svg'
            alt=''
            onClick={() =>
              (window.location.href = 'https://parke-9a03d.web.app')
            }
          />
          <span
            onClick={() =>
              (window.location.href = 'https://parke-9a03d.web.app')
            }>
            PARKÈ
          </span>
        </div>
        <div className='header-web-item header-links'>
          <div
            onClick={() =>
              (window.location.href = 'https://parke-9a03d.web.app')
            }>
            Park
          </div>
          <div
            onClick={() =>
              (window.location.href = 'https://parke-owner.web.app')
            }>
            Become a partner
          </div>
        </div>
        <div className='header-web-item header-user'>
          <div
            className={`${
              !this.props.hidden && 'show-header-modal'
            } header-hamburger`}
            onClick={this.handleClick}>
            <div />
            <div />
          </div>

          <div className='header-modal'>
            <span
              onClick={() =>
                (window.location.href = 'https://parke-9a03d.web.app/signin')
              }>
              Login / Sign Up
            </span>
            <span
              onClick={() =>
                (window.location.href = 'https://parke-owner.web.app/signin')
              }>
              Rent your space
            </span>
            <span>Help</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
