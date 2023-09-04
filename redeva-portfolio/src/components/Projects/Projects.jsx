import { Link } from 'react-router-dom';
import Discotech from '../../assets/projects/discotech.png'
import './Projects.scss'

function Projects() {
return(
    <div className="Projects">
        <h2>Recent Work</h2>
        <div className="Projects-Container">
            <Link
                className="Projects-Card"
                style={{ backgroundImage:`url(${Discotech})` }}
            />
            <Link
                className="Projects-Card"
                // style={{ backgroundImage:`url(${})` }}
            />         
            <Link
                className="Projects-Card"
                // style={{ backgroundImage:`url(${})` }}
            />         
            <Link
                className="Projects-Card"
                // style={{ backgroundImage:`url(${})` }}
            />         
            <Link
                className="Projects-Card"
                // style={{ backgroundImage:`url(${})` }}
            />         
            <Link
                className="Projects-Card"
                // style={{ backgroundImage:`url(${})` }}
            />           
        </div>
        <p className="Projects-More" >See more</p>
    </div>
);
}

export default Projects;