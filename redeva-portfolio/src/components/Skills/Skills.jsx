
import others from '../../data/OtherSkills.js'
import fronts from '../../data/FrontSkills.js'
import backs from '../../data/BackSkills.js'

// import skills from '../../data/Skills.js'

import './Skills.scss'

function Skills() {

    console.log(others);

    return (
        <div className="Skills">
            <h2>My skills</h2>
            <div className="Skills-Cards">
                <ul className='Skills-Others'>
                    <h3>Others</h3>
                    {others.map((other) => (
                        <li key={other.id}>
                            <img src={other.url} />
                            <p>{other.name}</p>
                        </li>
                    ))
                    }
                </ul>
                <ul className='Skills-Front'>
                    <h3>Front</h3>
                    {fronts.map((front) => (
                        <li key={front.id}>
                            <img src={front.url} />
                            <p>{front.name}</p>
                        </li>
                    ))}
                </ul>
                <ul className='Skills-Back'>
                    <h3>Back</h3>
                    {backs.map((back) => (
                        <li key={back.id}>
                            <img src={back.url} />
                            <p>{back.name}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Skills;