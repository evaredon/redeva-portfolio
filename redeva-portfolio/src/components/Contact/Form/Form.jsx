import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Form.scss';

function Form() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_w4p097a',
        'template_v9bctav',
        form.current,
        'K1yQsgtk9w3BNHmKv'
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="Contact-Form">
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input
          type="text"
          name="user_name"
          placeholder="Enter your name"
          className="Contact-Mail"
        />
        <label>Email</label>
        <input
          type="email"
          name="user_email"
          placeholder="Enter your Email"
          className="Contact-Mail"
        />
        <label>Message</label>
        <textarea
          name="message"
          placeholder="Write your message here"
          className="Contact-Message"
        />
        <button type="submit" value="Send">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Form;
