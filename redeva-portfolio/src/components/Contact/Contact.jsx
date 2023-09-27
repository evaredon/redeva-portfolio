import './Contact.scss';
// import Letter from '../../assets/loveletter.png'
import Form from './Form/Form';
import Intro from './Intro/Intro';

function Contact() {
  return (
    <div className="Contact">
      {/* <img className="Contact-Letter" src={Letter} alt="Love letter drawing" /> */}
      <div className='Contact-FormSide'>
        <h2>Contact</h2>
        <p>If you wanna learn more about me, talk about a project collaboration or just say hi, you can send me an email !</p>
        <Form />
      </div>
      <div className='Contact-InfoSide'>
        <Intro />
      </div>
    </div>
  );
}

export default Contact;
