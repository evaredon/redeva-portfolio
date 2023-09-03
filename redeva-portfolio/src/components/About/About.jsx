import { Link } from 'react-router-dom';

import Cartoon from '../../assets/cartoon.png';
import Github from '../../assets/github.svg';
import Linkedin from '../../assets/linkedin.svg'

import Title from './Title/Title'

import './About.scss'
import Bubble from './Bubble/Bubble';

function About() {
    return (
        <div className='About'>
            <div className="About-Top">
                <div className="About-Title">
                    <Title />
                    <img className="About-Cartoon" src={Cartoon} />
                </div>

                <Bubble />

                <div className="About-Social">
                    <Link to="https://github.com/evaredon">
                        <img src={Github} />
                    </Link>
                    <Link to="https://www.linkedin.com/in/eva-redon-dev/">
                        <img src={Linkedin} />
                    </Link>
                </div>
            </div>
            
            {/* //todo: add functionnality for download or display */}
            <div className='About-Bottom'>
                <div>
                    <button>
                        Curriculum Vitae
                    </button>
                </div>
            </div>
        </div>

    );
}

export default About;