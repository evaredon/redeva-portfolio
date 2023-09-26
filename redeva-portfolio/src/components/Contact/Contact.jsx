import './Contact.scss';
import Letter from '../../assets/loveletter.png'

function Contact() {
  return (
    <div className="Contact">
      <div className='Contact-Intro'>
        <h2>Contact me</h2>
        <p>If you wanna learn more about me, talk about a project collaboration or just say hi, you can send me an email !</p>
        <div className='Contact-Info'>
          <img className="Contact-Letter" src={Letter} alt="Love letter drawing" />
          <section>
            <p><span className='Contact-Join'>Email : </span>evaredon2001@gmail.com</p>
            <p><span className='Contact-Join'>Phone :</span>+33 6 77 29 88 62</p>
          </section>
        </div>
        <p>And if you wanna send me some strenght and love, don't hesitate to follow me on my Linkedin and Github pages !</p>
      </div>
      <div className='Contact-Form'>
        <form>
          <h3>Get in touch</h3>
          <input type="text" placeholder="Your email" className="Contact-Mail" />
          <textarea placeholder="Your message" className="Contact-Message" />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
