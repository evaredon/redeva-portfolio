import { Link } from 'react-router-dom';
import Discotech from '../../assets/projects/discotech.png';
import './Projects.scss';

function Projects() {
  return (
    <div className="Projects">
      <h2>Recent Work</h2>
      <div className="Projects-Container">
        <Link
          className="Projects-Card"
          style={{ backgroundImage: `url(${Discotech})` }}
          to="https://github.com/evaredon/discotech-front"
        />
        <article
          className="Projects-Card"
          // style={{ backgroundImage:`url(${})` }}
        />
        <article
          className="Projects-Card"
          // style={{ backgroundImage:`url(${})` }}
        />
        <article
          className="Projects-Card"
          // style={{ backgroundImage:`url(${})` }}
        />
        <article
          className="Projects-Card"
          // style={{ backgroundImage:`url(${})` }}
        />
        <article
          className="Projects-Card"
          // style={{ backgroundImage:`url(${})` }}
        />
      </div>
    </div>
  );
}

export default Projects;
