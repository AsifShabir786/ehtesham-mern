"use client"
import UilEnvelope from "@iconscout/react-unicons/icons/uil-envelope"
import UilMapMarker from "@iconscout/react-unicons/icons/uil-map-marker"
import UilGithub from "@iconscout/react-unicons/icons/uil-github"
import UilLinkedin from "@iconscout/react-unicons/icons/uil-linkedin"
import UilTwitter from "@iconscout/react-unicons/icons/uil-twitter"
import UilInstagram from "@iconscout/react-unicons/icons/uil-instagram"
import UilExternalLinkAlt from "@iconscout/react-unicons/icons/uil-external-link-alt"

const Footer = () => {
  return (
    <footer className="position-relative bg-dark text-white">
      {/* Wave decoration */}
      <div className="position-absolute top-0 start-0 w-100 overflow-hidden" style={{ lineHeight: 0 }}>
        <svg
          className="position-relative d-block w-100"
          style={{ height: "60px" }}
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            fill="white"
          ></path>
        </svg>
      </div>

      <div className="container-fluid px-4 py-5" style={{ paddingTop: "80px" }}>
        <div className="container">
          {/* Main footer content */}
          <div className="row g-4 mb-5">
            {/* About Section */}
            <div className="col-lg-6 col-md-12">
              <h3 className="fw-bold mb-4">
                <span
                  className="text-primary"
                  style={{
                    background: "linear-gradient(45deg, #007bff, #6f42c1)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Asif Shabbir
                </span>
              </h3>
              <p className="text-light mb-4 lh-lg">
                Senior React.js/Next.js and Node.js Developer with 6+ years of experience. Currently working as Senior
                MERN Stack Developer at UPTREE TECHNOLOGIES LTD, London.
              </p>
              <div className="d-flex align-items-center mb-3 text-light">
                <UilMapMarker size="20" className="text-primary me-2" />
                <span>London, United Kingdom</span>
              </div>
              <div className="d-flex align-items-center text-light">
                <UilEnvelope size="20" className="text-primary me-2" />
                <a
                  href="mailto:asifshabbir607@gmail.com"
                  className="text-decoration-none text-light"
                  style={{ transition: "color 0.3s ease" }}
                  onMouseEnter={(e) => (e.target.style.color = "#007bff")}
                  onMouseLeave={(e) => (e.target.style.color = "")}
                >
                  asifshabbir607@gmail.com
                </a>
              </div>
            </div>

            {/* Services */}
            <div className="col-lg-3 col-md-6">
              <h4 className="h5 fw-semibold mb-4 text-white">Services</h4>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <span
                    className="text-light"
                    style={{
                      cursor: "pointer",
                      transition: "color 0.3s ease",
                    }}
                    onMouseEnter={(e) => (e.target.style.color = "#007bff")}
                    onMouseLeave={(e) => (e.target.style.color = "")}
                  >
                    Full Stack Development
                  </span>
                </li>
                <li className="mb-2">
                  <span
                    className="text-light"
                    style={{
                      cursor: "pointer",
                      transition: "color 0.3s ease",
                    }}
                    onMouseEnter={(e) => (e.target.style.color = "#007bff")}
                    onMouseLeave={(e) => (e.target.style.color = "")}
                  >
                    React.js Development
                  </span>
                </li>
                <li className="mb-2">
                  <span
                    className="text-light"
                    style={{
                      cursor: "pointer",
                      transition: "color 0.3s ease",
                    }}
                    onMouseEnter={(e) => (e.target.style.color = "#007bff")}
                    onMouseLeave={(e) => (e.target.style.color = "")}
                  >
                    Next.js Applications
                  </span>
                </li>
                <li className="mb-2">
                  <span
                    className="text-light"
                    style={{
                      cursor: "pointer",
                      transition: "color 0.3s ease",
                    }}
                    onMouseEnter={(e) => (e.target.style.color = "#007bff")}
                    onMouseLeave={(e) => (e.target.style.color = "")}
                  >
                    Node.js Backend
                  </span>
                </li>
                <li className="mb-2">
                  <span
                    className="text-light"
                    style={{
                      cursor: "pointer",
                      transition: "color 0.3s ease",
                    }}
                    onMouseEnter={(e) => (e.target.style.color = "#007bff")}
                    onMouseLeave={(e) => (e.target.style.color = "")}
                  >
                    MERN Stack Solutions
                  </span>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div className="col-lg-3 col-md-6">
              <h4 className="h5 fw-semibold mb-4 text-white">Quick Links</h4>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a
                    href="#about"
                    className="text-decoration-none text-light d-flex align-items-center"
                    style={{ transition: "color 0.3s ease" }}
                    onMouseEnter={(e) => (e.target.style.color = "#007bff")}
                    onMouseLeave={(e) => (e.target.style.color = "")}
                  >
                    About Me
                    <UilExternalLinkAlt size="14" className="ms-1" />
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#projects"
                    className="text-decoration-none text-light d-flex align-items-center"
                    style={{ transition: "color 0.3s ease" }}
                    onMouseEnter={(e) => (e.target.style.color = "#007bff")}
                    onMouseLeave={(e) => (e.target.style.color = "")}
                  >
                    Projects
                    <UilExternalLinkAlt size="14" className="ms-1" />
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#experience"
                    className="text-decoration-none text-light d-flex align-items-center"
                    style={{ transition: "color 0.3s ease" }}
                    onMouseEnter={(e) => (e.target.style.color = "#007bff")}
                    onMouseLeave={(e) => (e.target.style.color = "")}
                  >
                    Experience
                    <UilExternalLinkAlt size="14" className="ms-1" />
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#contact"
                    className="text-decoration-none text-light d-flex align-items-center"
                    style={{ transition: "color 0.3s ease" }}
                    onMouseEnter={(e) => (e.target.style.color = "#007bff")}
                    onMouseLeave={(e) => (e.target.style.color = "")}
                  >
                    Contact
                    <UilExternalLinkAlt size="14" className="ms-1" />
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#resume"
                    className="text-decoration-none text-light d-flex align-items-center"
                    style={{ transition: "color 0.3s ease" }}
                    onMouseEnter={(e) => (e.target.style.color = "#007bff")}
                    onMouseLeave={(e) => (e.target.style.color = "")}
                  >
                    Resume
                    <UilExternalLinkAlt size="14" className="ms-1" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Social Media & Company Info */}
          <div className="border-top border-secondary pt-4">
            <div className="row align-items-center">
              {/* Company Info */}
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                <p className="text-light mb-1 small">
                  Currently at <span className="text-primary fw-semibold">UPTREE TECHNOLOGIES LTD</span>
                </p>
                <p className="text-muted small mb-0">Senior MERN Stack Developer • London</p>
              </div>

              {/* Social Media Links */}
              <div className="col-md-6 text-center text-md-end">
                <div className="d-flex justify-content-center justify-content-md-end gap-3">
                  <a
                    href="https://github.com/asifshabbir"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-light btn-sm rounded-circle p-2"
                    style={{
                      width: "40px",
                      height: "40px",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = "scale(1.1)"
                      e.target.style.backgroundColor = "#6c757d"
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = "scale(1)"
                      e.target.style.backgroundColor = "transparent"
                    }}
                    aria-label="GitHub"
                  >
                    <UilGithub size="20" />
                  </a>
                  <a
                    href="https://linkedin.com/in/asifshabbir"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-light btn-sm rounded-circle p-2"
                    style={{
                      width: "40px",
                      height: "40px",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = "scale(1.1)"
                      e.target.style.backgroundColor = "#0077b5"
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = "scale(1)"
                      e.target.style.backgroundColor = "transparent"
                    }}
                    aria-label="LinkedIn"
                  >
                    <UilLinkedin size="20" />
                  </a>
                  <a
                    href="https://twitter.com/asifshabbir"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-light btn-sm rounded-circle p-2"
                    style={{
                      width: "40px",
                      height: "40px",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = "scale(1.1)"
                      e.target.style.backgroundColor = "#1da1f2"
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = "scale(1)"
                      e.target.style.backgroundColor = "transparent"
                    }}
                    aria-label="Twitter"
                  >
                    <UilTwitter size="20" />
                  </a>
                  <a
                    href="https://instagram.com/asifshabbir"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-light btn-sm rounded-circle p-2"
                    style={{
                      width: "40px",
                      height: "40px",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = "scale(1.1)"
                      e.target.style.backgroundColor = "#e4405f"
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = "scale(1)"
                      e.target.style.backgroundColor = "transparent"
                    }}
                    aria-label="Instagram"
                  >
                    <UilInstagram size="20" />
                  </a>
                  <a
                    href="mailto:asifshabbir607@gmail.com"
                    className="btn btn-outline-light btn-sm rounded-circle p-2"
                    style={{
                      width: "40px",
                      height: "40px",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = "scale(1.1)"
                      e.target.style.backgroundColor = "#28a745"
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = "scale(1)"
                      e.target.style.backgroundColor = "transparent"
                    }}
                    aria-label="Email"
                  >
                    <UilEnvelope size="20" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-top border-secondary mt-4 pt-4 text-center">
            <p className="text-muted small mb-1">
              © {new Date().getFullYear()} Asif Shabbir. All rights reserved. Built with React & Next.js
            </p>
            <p className="text-muted small mb-0">
              Crafted with <span className="text-danger">❤️</span> for amazing web experiences
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
