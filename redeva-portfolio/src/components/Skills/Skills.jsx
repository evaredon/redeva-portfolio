import Scss from '../../assets/skills/sass.svg'
import React from '../../assets/skills/react.svg'
import Git from '../../assets/skills/git.svg'
import Next from '../../assets/skills/next.svg'
import Trello from '../../assets/skills/trello.svg'
import Redux from '../../assets/skills/redux.svg'
import MySql from '../../assets/skills/mysql.svg'
import Php from '../../assets/skills/php.svg'
import MockFlow from '../../assets/skills/mockflow.svg'
import Vercel from '../../assets/skills/vercel.svg'

import './Skills.scss'

function Skills() {
    return (
        <div className="Skills">
            <h2>My skills</h2>
            <div className="Skills-Cards">
            <ul className='Skills-Others'>
                    <h3>Others</h3>
                    <li>
                        <img src={Git} />
                        <p>Git</p>
                    </li>
                    <li>
                        <img src={MockFlow} />
                        <p>MockFlow</p>
                    </li>
                    <li>
                        <img src={Vercel} />
                        <p>Vercel</p>
                    </li>
                    <li>
                        <img src={Trello} />
                        <p>Trello (Agile Scrum)</p>
                    </li>
                </ul>
                <ul className='Skills-Front'>
                    <h3>Front</h3>
                    <li>
                        <img src={React} />
                        <p>React</p>
                    </li>
                    <li>
                        <img src={Redux} />
                        <p>Redux</p>
                    </li>
                    <li>
                        <img src={Next} />
                        <p>Next.js</p>
                    </li>
                    <li>
                        <img src={Scss} />
                        <p>Sass</p>
                    </li>
                </ul>

                <ul className='Skills-Back'>
                    <h3>Back</h3>
                    <li>
                        <img src={MySql} />
                        <p>MySql</p>
                    </li>
                    <li>
                        <img src={Php} />
                        <p>PHP</p>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Skills;