import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message sent by ${name}`);
  }

  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2>Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          
          <label>Message:</label>
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
          
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
