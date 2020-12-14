import React from 'react';

import Header from './components/header/Header';
import CustomButton from './components/custom-button/CustomButton';

import './HomePage.scss';

class HomePage extends React.Component {
  randomSentences = [
    <span>
      Feeling out of <span>place</span>
    </span>,
    <span>
      Spoiled a <span>date</span>
    </span>,
    <span>
      Lost a <span>case</span>
    </span>,
    <span>
      Wearing a poker <span>face</span>
    </span>,
  ];

  randomNumber = () => Math.floor(Math.random() * Math.floor(4));

  random = () =>
    this.setState({ str: this.randomSentences[this.randomNumber()] });

  constructor() {
    super();

    this.state = {
      str: this.randomSentences[0],
      modalHidden: true,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => this.random(), 6000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleHeaderModal = () =>
    this.setState((prevState) => ({
      modalHidden: !prevState.modalHidden,
    }));

  render() {
    return (
      <>
        {!this.state.modalHidden && (
          <div className='toggle-modal' onClick={this.toggleHeaderModal} />
        )}
        <div className='homepage'>
          <Header
            hidden={this.state.modalHidden}
            toggleModal={this.toggleHeaderModal}
          />
          <section>
            <div>
              {this.state.str}, while finding a parking{' '}
              <span>
                <span>space</span>
              </span>
              ?
            </div>
            <div>
              Reserve <br />
              Space
              <CustomButton>Search</CustomButton>
            </div>
          </section>

          <section>
            <h1>
              Drive <span>ideas</span>, not worries.
            </h1>
            <div>
              Amazing things happen when your mind is at peace. Whether you are
              moving across town or towards your dreams, having a safe reliable
              spot for your transport brings a huge peace of mind. Let us have
              your worries, while you focus on important ideas and bring them to
              reality.
            </div>
            <img
              src='https://cdn.jsdelivr.net/gh/park-e/cdn@latest/landing/drive.svg'
              alt=''
            />
          </section>

          <section>
            <h1>
              We love <span>simplicity</span>.
            </h1>
            <div>
              <div>
                <img
                  src='https://cdn.jsdelivr.net/gh/park-e/cdn@latest/landing/Screens/SelectSpot.svg'
                  alt=''
                />
                <span>
                  Use your finder app to search for nearby parking spaces
                </span>
              </div>
              <span>&#10095;</span>
              <div>
                <img
                  src='https://cdn.jsdelivr.net/gh/park-e/cdn@latest/landing/Screens/SpotDetails.svg'
                  alt=''
                />
                <span>Select the spot which best suits your needs</span>
              </div>
              <span>&#10095;</span>
              <div>
                <img
                  src='https://cdn.jsdelivr.net/gh/park-e/cdn@latest/landing/Screens/Scanner%201.svg'
                  alt=''
                />
                <span>Scan QR code on reaching</span>
              </div>
              <span>&#10095;</span>
              <div>
                <img
                  src='https://cdn.jsdelivr.net/gh/park-e/cdn@latest/landing/Screens/EmptyScreen.svg'
                  alt=''
                />
                <span>
                  The <span>space</span> is all yours
                </span>
              </div>
            </div>
          </section>

          <section>
            <div>
              <h1>
                Here's <span>Parkè</span>!
              </h1>
              <span>Reserve your space. Drive sans worries.</span>
              <img
                src='https://cdn.jsdelivr.net/gh/park-e/cdn@latest/landing/GitHubButton.svg'
                alt=''
              />
            </div>
            <div>
              <img
                className='background-logo'
                src='https://cdn.jsdelivr.net/gh/park-e/cdn@latest/landing/logo%201.svg'
                alt=''
              />
            </div>
          </section>

          <section>
            <img
              src='https://cdn.jsdelivr.net/gh/park-e/cdn@latest/Logo/logo.svg'
              alt=''
            />
            <div>
              <div>
                <div>Company</div>
                <span>About Us</span>
                <span>Privacy Policy</span>
                <span>T&C</span>
                <span>Help Center</span>
                <span>Legal</span>
                <span>Careers</span>
              </div>
              <div>
                <div>Care</div>
                <span>Accessibility</span>
                <span>Diversity and inclusion</span>
              </div>
              <div>
                <div>Partner</div>
                <span>Become a partner</span>
                <span>Resource center</span>
              </div>
            </div>
            <div>
              <div>
                <img
                  src='https://cdn.jsdelivr.net/gh/park-e/cdn@latest/landing/facebook.svg'
                  alt=''
                />
                <img
                  src='https://cdn.jsdelivr.net/gh/park-e/cdn@latest/landing/twitter.svg'
                  alt=''
                />
                <img
                  src='https://cdn.jsdelivr.net/gh/park-e/cdn@latest/landing/YouTube.svg'
                  alt=''
                />
                <img
                  src='https://cdn.jsdelivr.net/gh/park-e/cdn@latest/landing/linkedin.svg'
                  alt=''
                />
                <img
                  src='https://cdn.jsdelivr.net/gh/park-e/cdn@latest/landing/instagram.svg'
                  alt=''
                />
              </div>
              <div>
                <img
                  src='https://cdn.jsdelivr.net/gh/park-e/cdn@latest/landing/Globe/E774/Glyph_ .svg'
                  alt=''
                />
                <span>EN</span>
                <img
                  src='https://cdn.jsdelivr.net/gh/park-e/cdn@latest/landing/POI/ECAF/Glyph_ .svg'
                  alt=''
                />
                <span>IN</span>
              </div>
              <div>
                <img
                  src='https://cdn.jsdelivr.net/gh/park-e/cdn@latest/landing/GitHubButton.svg'
                  alt='Download Button'
                />
              </div>
            </div>
            <div>2020 | Parkè</div>
          </section>
        </div>
      </>
    );
  }
}

export default HomePage;
