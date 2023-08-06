import { useState,useEffect } from "react";
import emailjs from "emailjs-com";
import React from "react";

const initialState = {
  name: "",
  email: "",
  message: "",
};
export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);
const [WhatsAppUrl,setWhatsAppUrl] = useState(props.data ? props.data.whatsApp : "")
useEffect(() => {
  let phoneNumber = props.data ? props.data.whatsAppNumber : "";
  const encodedMessage = encodeURIComponent(props.data ? props.data.whatsAppMsg : "");
  const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
  setWhatsAppUrl(whatsappURL)
  
}, [props])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...initialState });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
    emailjs
      .sendForm(props.data ? props.data.serviceID : "", props.data ? props.data.templateID : "", e.target,props.data ? props.data.mailUserID : "")
      .then(
        (result) => {
          console.log(result.text);
          setState({
            name: "",
            email: "",
            message: "",
          })
          clearState();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const buttonStyle = {
    display: 'inline-block',
    backgroundColor: '#ffffff',
    border: '1px solid #25d366',
    borderRadius: '8px',
    padding: '10px',
    textDecoration: 'none',
    color: '#25d366',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: '16px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    cursor: 'pointer',
  };
  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Get In Touch</h2>
                <p>
                  Please fill out the form below to send us an email and we will
                  get back to you as soon as possible.
                </p>  
              </div>
              <form name="sentMessage" validate onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Message"
                    required
                    onChange={handleChange}
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                <button type="submit" className="btn btn-custom btn-lg">
                  Send Message
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Contact Info</h3>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Phone
                </span>
                {props.data ? (
                  <a style={{color:"#fff"}} href={`tel:${props.data.phone}`}>{props.data.phone}</a>
                ) : (
                  "loading"
                )}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>
                {props.data ? (
                  <a style={{color:"#fff"}}  href={`mailto:${props.data.email}`}>{props.data.email}</a>
                ) : (
                  "loading"
                )}
              </p>
            </div>
            <div className="contact-item">
              <p><a  href={WhatsAppUrl} target="_blank" rel="noopener noreferrer">
                  <button style={buttonStyle}><i className="fa fa-whatsapp"></i> WhatsApp Us</button>
                </a>
              </p>
            </div>
          </div>
          {/* <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : "/"}>
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : "/"}>
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.youtube : "/"}>
                      <i className="fa fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>
            &copy; 2023, Raah Tech Services
          </p>
        </div>
      </div>
    </div>
  );
};
