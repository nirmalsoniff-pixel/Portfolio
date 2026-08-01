import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  dataabout,
  meta,
  worktimeline,
  skills,
  services,
} from "../../content_option";

export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">

        <Helmet>
          <meta charSet="utf-8" />
          <title>About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>

        {/* ================= Title ================= */}

        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="12">
            <h1 className="display-4 mb-4">About Me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

        {/* ================= About Section ================= */}

        <Row className="sec_sp align-items-center">

          <Col lg={4}>

            <div className="about_card">

              <h2>{dataabout.title}</h2>

              <p className="role">
                AI & Machine Learning Student
              </p>

              <p>
                Full Stack Developer
              </p>

              <a
                href="/resume.pdf"
                download
                className="resume_btn"
              >
                📄 Download Resume
              </a>

            </div>

          </Col>

          <Col lg={8}>

            <div className="about_text">

              <h2>About Me</h2>

              <p>{dataabout.aboutme}</p>

            </div>

          </Col>

        </Row>

        {/* ================= Timeline ================= */}

        <Row className="sec_sp">

          <Col lg={4}>

  <div className="section_title_card">

    <div className="title_line"></div>

    <h2>Experience</h2>

    <p>
      My professional journey,
      internships and academic
      experience.
    </p>

  </div>

</Col>

          <Col lg={8}>

            <div className="timeline">

              {worktimeline.map((data, i) => (

                <div className="timeline_card" key={i}>

                  <h4>{data.jobtitle}</h4>

                  <h6>{data.where}</h6>

                  <p>{data.date}</p>

                </div>

              ))}

            </div>

          </Col>

        </Row>

        {/* ================= Skills ================= */}

        <Row className="sec_sp">

          <Col lg={4}>

  <div className="section_title_card">

    <div className="title_line"></div>

    <h2>Technical Skills</h2>

    <p>
      Programming languages,
      frameworks and tools
      I use to build projects.
    </p>

  </div>

</Col>
          <Col lg={8}>

            {skills.map((data, i) => (

              <div key={i} className="skill_item">

                <div className="skill_header">

                  <h4 className="progress-title">
                    {data.name}
                  </h4>

                  <span className="skill_percent">
                    {data.value}%
                  </span>

                </div>

                <div className="progress">

                  <div
                    className="progress-bar"
                    style={{
                      width: `${data.value}%`,
                    }}
                  ></div>

                </div>

              </div>

            ))}

          </Col>

        </Row>

        {/* ================= Services ================= */}

        <Row className="sec_sp">

          <Col lg={4}>

  <div className="section_title_card">

    <div className="title_line"></div>

    <h2>What I Do</h2>

    <p>
      Areas where I enjoy
      building products and
      solving real-world problems.
    </p>

  </div>

</Col>
          <Col lg={8}>

            <div className="services_grid">

  {services.map((data, i) => (

    <div className="service_box" key={i}>

      <div className="service_icon">
        🚀
      </div>

      <h4>{data.title}</h4>

      <p>{data.description}</p>

    </div>

  ))}

</div>
          </Col>

        </Row>

      </Container>
    </HelmetProvider>
  );
};