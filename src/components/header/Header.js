import React from 'react';
// import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';

// import { ReactComponent as HeaderIcon } from '../icons/header.svg';
// import { ReactComponent as Logo } from '../icons/logo.svg';
// import { ReactComponent as Hamburger } from '../icons/hamburger.svg';

// import { selectHeaderModal } from '../../redux/modal/modalSelectors';
// import { toggleHeaderModal } from '../../redux/modal/modalActions';

import './Header.scss';

class Header extends React.Component {
  state = {
    modalHidden: true,
  };

  handleClick = () => this.props.toggleModal();

  render() {
    return (
      <div className='header-mob header-web'>
        {/* <HeaderIcon className='header-mob-icon' />*/}
        <div>
          <img
            className='header-web-item logo'
            src='https://cdn.jsdelivr.net/gh/park-e/cdn@latest/Logo/logo.svg'
            alt=''
          />
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
