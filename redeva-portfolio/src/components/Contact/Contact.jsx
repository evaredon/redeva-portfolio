import './Contact.scss';
import Form from './Form/Form';
import Intro from './Intro/Intro';

function Contact() {
  return (
    <div className="Contact">
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
