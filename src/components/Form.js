import React from 'react'
import emailjs from 'emailjs-com';
import Button  from '../components/Button';

import './Form.css'

function Form() {


  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_0y9pl57', 'template_8eyfhrt', e.target, 'user_en1quDKCqecAWArZECKZd')
      .then(() => {
          alert('Ваше сообщение отправлено!');
      }, (error) => {
          alert(error.text);
      });
  }
  return (
    <form className="login" onSubmit={sendEmail}>
            <label for="name">Name</label>
            <input id="name" type="text" placeholder="Your name" name="from_name" />
            <label for="mail">Email address</label>
            <input id="mail" type="text" placeholder="Your email address" name="message"/>
            <Button type="submit" value="Send" />
      </form>
  )
}

export default Form