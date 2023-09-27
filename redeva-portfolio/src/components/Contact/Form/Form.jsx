import './Form.scss'

function Form() {
    return (
        <div className='Contact-Form'>
        <form>
          <label>Email</label>
          <input type="text" placeholder="Enter your Email" className="Contact-Mail" />
          <label>Message</label>
          <input placeholder="Write your message here" className="Contact-Message" />
          <button>Send Message</button>
        </form>
        </div>
    );
  }
  
  export default Form;
  
