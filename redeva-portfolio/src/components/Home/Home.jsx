import Profile from '../../assets/welcome-pic.png';
import Location from '../../assets/location.svg';
import Scroll from '../../assets/scrolldown.svg';

import './Home.scss';
import { Link as Anchor } from 'react-scroll';

function Home() {
  return (
    <div className="Home">
      <div className="custom-shape-divider-top-1693694955">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>

      <div className="Home-Top">
        <img className="Home-Pic" src={Profile} />
        <div className="Home-Container">
          <section className="Home-Description">
            <h1>Hello.</h1>
            <h1 className="Home-Name">Eva Redon</h1>
            <h2 className="Home-Job">Web Developement | Front-end</h2>
          </section>
          <section className="Home-Location">
            <img src={Location} />
            <p>Paris</p>
          </section>
        </div>
      </div>

      <Anchor activeClass="active" to="About" spy={true} smooth={true} duration={500}>
        <img className="Home-Arrow" src={Scroll} />
      </Anchor>
    </div>
  );
}

export default Home;
