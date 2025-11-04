import React, {useState} from 'react';
import '../styles/style.css';

export default function Contact(){
  const [form, setForm] = useState({name:'', email:'', subject:'', message:''});
  const [status, setStatus] = useState(null);

  const handleChange = (e) => setForm({...form, [e.target.name]: e.target.value});

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try{
      const res = await fetch('/api/contact/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(form)
      });
      const json = await res.json();
      if (res.ok) {
        setStatus('sent');
        setForm({name:'', email:'', subject:'', message:''});
      } else {
        setStatus('error');
        console.error(json);
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <section className="page-section contact-content">
      <div className="container">
        <div className="contact-info">
          <h3>Contact Me</h3>
          <p>Feel free to reach out by filling the form.</p>
        </div>
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input name="name" type="text" value={form.name} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input name="email" type="email" value={form.email} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Subject</label>
              <input name="subject" type="text" value={form.subject} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea name="message" value={form.message} onChange={handleChange} required />
            </div>
            <button className="btn btn-primary" type="submit">Send Message</button>
            {status === 'sending' && <p>Sending...</p>}
            {status === 'sent' && <p>Message sent — thanks!</p>}
            {status === 'error' && <p>Failed to send message.</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
