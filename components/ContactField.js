export const ContactField = () => {
  return (
    <div className="contact-container" id="Contact">
      <h1 className="header-link">Contact</h1>
      <div className="contact-copy" data-aos="fade-down" data-aos-delay="300">
        <h2
          style={{
            fontSize: "40px",
            lineHeight: "1.2em",
            margin: "40px 0",
          }}
        >
          Reach out to Me
        </h2>
        <p
          style={{
            fontSize: "20px",
            lineHeight: "1.4em",
            margin: "60px 0",
          }}
        >
          I'm always looking for opportunities to contribute and grow with a
          company. Feel free to reach out to me.
        </p>
        <a href="Benjamin-Kinga__Resume.pdf">
          <button>Resume</button>
        </a>
      </div>
    </div>
  )
}
