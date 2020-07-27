export const ProjectExample = () => {
  return (
    <>
      <div className="project-container">
        <div className="header-field p20 f54" data-aos="fade-down">
          <h1>Anonymous Message Service</h1>
          <a href="http://messagebottle.netlify.app">
            <img
              src="web-link.svg"
              alt="Link"
              className="icon-sm link-outside"
            />
          </a>
          <p>May 2020</p>
        </div>
        <div
          className="content-field"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          <a href="https://messagebottle.netlify.app">
            <img
              src="Message.PNG"
              alt="FakeImage"
              className="image-container"
              id="image-source"
            />
          </a>
          <div className="copy-text" data-aos="fade-down" data-aos-delay="650">
            <div className="text-blurb f18 l40">
              <p>
                Titled, "Message In A Bottle", this web application allows
                anyone to submit a message and allows anyone to read a message
                submitted.
              </p>
            </div>
            <div className="tech-stack">
              <h3>Technology Used</h3>
              <ul>
                <li>React</li>
                <li>Node.js</li>
                <li>AWS Lambda</li>
                <li>Netlify</li>
                <li>MongoDB</li>
                <li>Mongoose</li>
              </ul>
            </div>
          </div>
        </div>
        <h2
          className="document-link p20"
          data-aos="fade-down"
          data-aos-anchor="#image-source"
          data-aos-delay="650"
        >
          <a href="https://www.github.com/thescripted/message-bottle-client">
            {" "}
            Link to Repository
          </a>
        </h2>
      </div>
    </>
  )
}
