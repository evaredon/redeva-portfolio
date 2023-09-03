// = Import : npm
import { Link } from 'react-router-dom';

// = Import : local
import Home from '../../assets/nav/home.svg';
import User from '../../assets/nav/me.svg';
import Skills from '../../assets/nav/puzzle.svg';
import Web from '../../assets/nav/app.svg';
import Contact from '../../assets/nav/contact.svg';

// = Import : style
import './Navigation.scss'

  //todo: add anchors

function Navigation() {
    return(
        <aside className='Navigation-Aside'>
            <nav className='Navigation-Container'>
                <ul className='Navigation-List'>
                    <li>
                        <Link className='Navigation-Elements'>
                            <img className='Navigation-Icon' src={Home} alt=''></img>
                            <p className='Navigation-Links'>Accueil</p>
                        </Link>
                    </li>
                    <li>
                        <Link className='Navigation-Elements'>
                            <img className='Navigation-Icon' src={User}></img>
                            <p className='Navigation-Links'>Profil</p>
                        </Link>
                    </li>
                    <li>
                        <Link className='Navigation-Elements'>
                            <img className='Navigation-Icon' src={Skills}></img>
                            <p className='Navigation-Links'>Compétences</p>                        
                        </Link>
                    </li>
                    <li>
                        <Link className='Navigation-Elements'>
                            <img className='Navigation-Icon' src={Web}></img>
                            <p className='Navigation-Links'>Projets</p>                        
                        </Link>
                    </li>
                    <li>
                        <Link className='Navigation-Elements'>
                            <img className='Navigation-Icon' src={Contact}></img>
                            <p className='Navigation-Links'>Contact</p>                        
                        </Link>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}

export default Navigation;