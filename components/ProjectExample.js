export const ProjectExample = () => {
  return (
    <>
      <div className="project-container">
        <div className="header-fields p20 f54">
          <h1>Anonymous Message Service</h1>
        </div>
        <div className="content-field">
          <img src="example1.jpg" alt="FakeImage" className="image-container" />
          <div className="copy-text">
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
        <h2 className="document-link p20">
          <a href="/"> Link to Documentation</a>
        </h2>
      </div>
    </>
  )
}
