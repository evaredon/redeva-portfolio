// = Import : npm
import { Link } from 'react-router-dom';

// = Import : local
import AppLogo from '../../../public/logo-eva.jpg'
import Home from '../../assets/home.svg';
import User from '../../assets/me.svg';
import Skills from '../../assets/puzzle.svg';
import Web from '../../assets/app.svg';
import Contact from '../../assets/contact.svg';

// = Import : style
import './Navigation.scss'


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