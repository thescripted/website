export const ProjectExample = () => {
  return (
    <>
      <div className="project-container">
        <div className="header-field p20 f54" data-aos="fade-up">
          <h1>Anonymous Message Service</h1>
          <img src="web-link.svg" alt="Link" className="icon-sm link-outside" />
          <p>May 2020</p>
        </div>
        <div className="content-field" data-aos="fade-up" data-aos-delay="200">
          <img src="example1.jpg" alt="FakeImage" className="image-container" />
          <div className="copy-text" data-aos="fade-up" data-aos-delay="650">
            <div className="text-blurb f18">
              <p>
                Titled, "Message In A Bottle", this web application allows
                anyone to submit a message and allows anyone to read a message
                submitted.
              </p>
            </div>
            <div className="tech-stack">
              <h3>Technology Used</h3>
              <ul>
                <li>JavaScript</li>
                <li>React</li>
                <li>Node</li>
              </ul>
            </div>
          </div>
        </div>
        <h2
          className="document-link p20"
          data-aos="fade-up"
          data-aos-delay="650"
        >
          <a href="/"> Link to Documentation</a>
        </h2>
      </div>
    </>
  )
}
