import React, { useState } from "react";
import * as emailjs from "emailjs-com";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta, contactConfig } from "../../content_option";
import { Container, Row, Col, Alert } from "react-bootstrap";

export const ContactUs = () => {
  const [formData, setFormdata] = useState({
    email: "",
    name: "",
    message: "",
    loading: false,
    show: false,
    alertmessage: "",
    variant: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormdata({
      ...formData,
      loading: true,
      show: false,
    });

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(
        contactConfig.YOUR_SERVICE_ID,
        contactConfig.YOUR_TEMPLATE_ID,
        templateParams,
        contactConfig.YOUR_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);

          setFormdata({
            email: "",
            name: "",
            message: "",
            loading: false,
            show: true,
            alertmessage: "✅ Thank you! Your message has been sent successfully.",
            variant: "success",
          });
        },
        (error) => {
          console.log(error.text);

          setFormdata({
            ...formData,
            loading: false,
            show: true,
            alertmessage: `❌ Failed to send message. ${error.text}`,
            variant: "danger",
          });

          document
            .getElementsByClassName("co_alert")[0]
            .scrollIntoView({
              behavior: "smooth",
            });
        }
      );
  };

  const handleChange = (e) => {
    setFormdata({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <HelmetProvider>
      <Container>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title} | Contact</title>
          <meta name="description" content={meta.description} />
        </Helmet>

        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Contact Me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

        <Row className="sec_sp">

          <Col lg="12">
            <Alert
              variant={formData.variant}
              className={`rounded-0 co_alert ${
                formData.show ? "d-block" : "d-none"
              }`}
              dismissible
              onClose={() =>
                setFormdata({
                  ...formData,
                  show: false,
                })
              }
            >
              <p className="my-0">{formData.alertmessage}</p>
            </Alert>
          </Col>

          <Col lg="5" className="mb-5">
            <h3 className="color_sec py-4">Get in Touch</h3>

            <address>
              <strong>Email:</strong>{" "}
              <a href={`mailto:${contactConfig.YOUR_EMAIL}`}>
                {contactConfig.YOUR_EMAIL}
              </a>

              <br />
              <br />

              <strong>Phone:</strong> {contactConfig.YOUR_FONE}
            </address>

            <p>{contactConfig.description}</p>
          </Col>

          <Col lg="7" className="d-flex align-items-center">

            <form onSubmit={handleSubmit} className="contact__form w-100">

              <Row>

                <Col lg="6" className="form-group mb-3">
                  <input
                    className="form-control"
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </Col>

                <Col lg="6" className="form-group mb-3">
                  <input
                    className="form-control"
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Col>

              </Row>

              <textarea
                className="form-control"
                name="message"
                rows="6"
                placeholder="Write your message..."
                value={formData.message}
                onChange={handleChange}
                required
              />

              <br />

              <button
                className="btn ac_btn"
                type="submit"
                disabled={formData.loading}
              >
                {formData.loading ? "Sending..." : "Send Message"}
              </button>

            </form>

          </Col>

        </Row>
      </Container>

      <div className={formData.loading ? "loading-bar" : "d-none"}></div>
    </HelmetProvider>
  );
};