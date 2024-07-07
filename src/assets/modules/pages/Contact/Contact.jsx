import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Navigation from '../../Navigation';
import Footer from '../../Footer';
import Chart from '../../../images/icon-chart.svg';
import Cog from '../../../images/icon-cog.svg';
import User from '../../../images/icon-person.svg';
import ShapeLeft from '../../../images/bg-pattern-about-2-contact-1.svg';
import ShapeRight from '../../../images/bg-pattern-contact-2.png';
import ShapeSmall from '../../../images/bg-pattern-contact-2-1.png';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [error]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name.trim() === '' || email.trim() === '' || company.trim() === '' || title.trim() === '' || message.trim() === '') {
      setError(true);
    } else {
      setError(false);
      console.log('Form submitted:', { name, email, company, title, message});
    }
  };

  return (
    <>
      <Helmet>
        <title>My Team - Contact Page</title>
      </Helmet>
      <header>
        <Navigation />
      </header>
      <section className="contact-section">
        <div className="contact-section__shape">
          <img src={ShapeLeft} alt="" />
        </div>
        <div className="contact-section__description">
          <div>
            <h1>Contact</h1>
            <h2>Ask us about</h2>
            <ul>
              <li>
                <img src={User} alt="User" />
                <p>The quality of our talent network</p>
              </li>
              <li>
                <img src={Cog} alt="Cog" />
                <p>Usage & implementation of our software</p>
              </li>
              <li>
                <img src={Chart} alt="Chart" />
                <p>How we help drive innovation</p>
              </li>
            </ul>
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{ borderColor: error && name.trim() === '' ? '#f67e7e' : '' }}
                  className={error && name.trim() === '' ? 'error' : ''}
                />
                {error && name.trim() === '' && <span className="errorMsg">This field is required</span>}
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{ borderColor: error && email.trim() === '' ? '#f67e7e' : '' }}
                  className={error && email.trim() === '' ? 'error' : ''}
                />
                {error && email.trim() === '' && <span className="errorMsg">This field is required</span>}
              </div>
              <div>
                <input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  style={{ borderColor: error && company.trim() === '' ? '#f67e7e' : '' }}
                  className={error && company.trim() === '' ? 'error' : ''}
                />
                 {error && company.trim() === '' && <span className="errorMsg">This field is required</span>}
              </div>
              <div>
                <input
                  type="text"
                  name="title"
                  placeholder="Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  style={{ borderColor: error && title.trim() === '' ? '#f67e7e' : '' }}
                  className={error && title.trim() === '' ? 'error' : ''}
                />
                 {error && title.trim() === '' && <span className="errorMsg">This field is required</span>}
              </div>
              <textarea
                  name="message"
                  placeholder="Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  style={{ borderColor: error && message.trim() === '' ? '#f67e7e' : '' }}
                  className={error && message.trim() === '' ? 'error' : ''}
                />
                {error && message.trim() === '' && <span className="errorMsg">This field is required</span>}
              <div>
                <button type="submit">submit</button>
              </div>
            </form>
          </div>
        </div>
        <div className="contact-section__right">
          <img src={ShapeRight} alt="" />
        </div>
        <div className="contact-section__small">
          <img src={ShapeSmall} alt="" />
        </div>
      </section>
      <div className="footer-sec">
        <Footer />
      </div>
      <style jsx="true">{`
        input::placeholder,
        textarea::placeholder {
          color: ${error ? 'red' : 'inherit'};
        }
        input.error::placeholder,
        textarea.error::placeholder {
          color: red;
        }
      `}</style>
    </>
  );
}
