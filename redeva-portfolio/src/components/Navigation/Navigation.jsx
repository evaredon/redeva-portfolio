// = Import : npm
import { Link } from 'react-router-dom';
import { Link as Anchor } from 'react-scroll';

// = Import : local
import Home from '../../assets/nav/home.svg';
import User from '../../assets/nav/me.svg';
import Skills from '../../assets/nav/puzzle.svg';
import Web from '../../assets/nav/app.svg';
import Contact from '../../assets/nav/contact.svg';

// = Import : style
import './Navigation.scss';

function Navigation() {
  return (
    <aside className="Navigation-Aside">
      <nav className="Navigation-Container">
        <ul className="Navigation-List">
          <li>
            <Anchor
              className="Navigation-Elements"
              activeClass="active"
              to="Home"
              spy={true}
              smooth={true}
              duration={500}
            >
              <img className="Navigation-Icon" src={Home} alt=""></img>
            </Anchor>
          </li>
          <li>
            <Anchor
              className="Navigation-Elements"
              activeClass="active"
              to="About"
              spy={true}
              smooth={true}
              duration={500}
            >
              <img className="Navigation-Icon" src={User}></img>
              <p className="Navigation-Links">Profil</p>
            </Anchor>
          </li>
          <li>
            <Anchor
              className="Navigation-Elements"
              activeClass="active"
              to="Skills"
              spy={true}
              smooth={true}
              duration={500}
            >
              <img className="Navigation-Icon" src={Skills}></img>
              <p className="Navigation-Links">Compétences</p>
            </Anchor>
          </li>
          <li>
            <Anchor
              className="Navigation-Elements"
              activeClass="active"
              to="Projects"
              spy={true}
              smooth={true}
              duration={500}
            >
              <img className="Navigation-Icon" src={Web}></img>
              <p className="Navigation-Links">Projets</p>
            </Anchor>
          </li>
          <li>
          <Anchor
              className="Navigation-Elements"
              activeClass="active"
              to="Contact"
              spy={true}
              smooth={true}
              duration={500}
            >
              <img className="Navigation-Icon" src={Contact}></img>
              <p className="Navigation-Links">Contact</p>
            </Anchor>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Navigation;
