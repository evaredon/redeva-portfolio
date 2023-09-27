import './Contact.scss';
// import Letter from '../../assets/loveletter.png'
// import Intro from './Intro/Intro';
// import Form from './Form/Form';

function Contact() {
  return (
    <div className="Contact">
      <div className='Contact-Intro'>
      {/* <img className="Contact-Letter" src={Letter} alt="Love letter drawing" /> */}
        <h2>Contact</h2>
        <p>If you wanna learn more about me, talk about a project collaboration or just say hi, you can send me an email !</p>
        {/* <Intro /> */}
        {/* <p>And if you wanna send me some strenght and love, don't hesitate to follow me on my Linkedin and Github pages !</p> */}
      </div>
      {/* <Form /> */}
    </div>
  );
}

export default Contact;
