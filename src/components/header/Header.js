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
        <a href="https://park-e.github.io">
          <img
            className='header-web-item logo'
            src='https://cdn.jsdelivr.net/gh/park-e/cdn@latest/Logo/logo.svg'
            alt=''
          />
          </a>
          <span>PARKÈ</span>
        </div>
        <div className='header-web-item header-links'>
          <div>Park</div>
          <div>Become a partner</div>
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
            <span>Login / Sign Up</span>
            <span>Rent your space</span>
            <span>Help</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
