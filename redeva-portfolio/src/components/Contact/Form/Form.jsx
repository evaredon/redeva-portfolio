import './Form.scss'

function Form() {
    return (
        <div className='Contact-Form'>
        <form>
          <h3>Get in touch</h3>
          <input type="text" placeholder="Your email" className="Contact-Mail" />
          <textarea placeholder="Your message" className="Contact-Message" />
          <button>Submit</button>
        </form>
        </div>
    );
  }
  
  export default Form;
  
