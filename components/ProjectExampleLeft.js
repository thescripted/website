export const ProjectExampleLeft = () => {
  return (
    <>
      <div className="project-container">
        <div className="header-field p20 f54" data-aos="fade-down">
          <h1>Trello Copywork</h1>
          {/* <img src="web-link.svg" alt="Link" className="icon-sm link-outside" /> */}
          <p>June 2020</p>
        </div>

        <div
          className="content-field"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          <a href="https://www.google.com">
            <img
              src="example1.jpg"
              alt="FakeImage"
              className="image-container image-top"
              id="left-image-source"
            />
          </a>
          <div className="copy-text" data-aos="fade-down" data-aos-delay="650">
            <div className="text-blurb-left f18">
              <p>
                Trello Copywork is a functional redesign of Trello.com. It
                consists of the major actions that can be done with Trello, such
                as adding notes, draggable components, and user authentication.
              </p>
            </div>
            <div className="tech-stack">
              <h3>Technology Used</h3>
              <ul>
                <li>React</li>
                <li>PostgreSQL</li>
                <li>Prisma</li>
                <li>GraphQL</li>
                <li>Redis</li>
                <li>JWT</li>
              </ul>
            </div>
          </div>
          <a>
            <img
              src="Trello.PNG"
              alt="FakeImage"
              className="image-container image-bot"
              id="left-image-source"
            />
          </a>
        </div>
        <h2
          className="document-link document-left p20"
          data-aos="fade-down"
          data-aos-delay="650"
          data-aos-anchor="#left-image-source"
        >
          <a href="https://www.github.com/thescripted/trello-markup">
            {" "}
            Link to Repository
          </a>
        </h2>
      </div>
    </>
  )
}
