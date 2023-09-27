import { Link } from 'react-router-dom';
import './Intro.scss';

function Intro() {
  return (
    <div className="Contact-Info">
      <h3>Get in touch</h3>
      <div>
        <section className='Contact-Section'>
          <h4>Mail Adress</h4>
          <p>evaredon2001@gmail.com</p>
        </section>
        <section className='Contact-Section'>
          <h4>Phone Number</h4>
          <p>+33 6 77 29 88 62</p>
        </section>
        <section className='Contact-Section'>
          <h4>Github Link</h4>
          <Link to="https://github.com/evaredon">github.com/evaredon</Link>
        </section>
      </div>
    </div>
  );
}

export default Intro;
