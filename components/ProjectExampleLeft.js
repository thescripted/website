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
          <a>
            <img
              src="Trello.PNG"
              alt="FakeImage"
              className="image-container image-top z0"
              id="left-image-source"
            />
          </a>
          <div className="copy-text" data-aos="fade-down" data-aos-delay="650">
            <div className="text-blurb f18">
              <p>
                Trello Copywork is a work-in-progress functional redesign of
                Trello.com. It consists of the major actions that can be done
                with Trello, such as add/update/deleting notes, and dragging
                components to update state order.
              </p>
            </div>
            <div className="tech-stack">
              <h3>Technology Used</h3>
              <ul>
                <li>React</li>
                <li>PostgreSQL</li>
                <li>Prisma</li>
                <li>GraphQL</li>
                <li>Urql</li>
                <li>React-dnd</li>
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
        <h3
          className="document-link document-left p20"
          data-aos="fade-down"
          data-aos-delay="650"
          data-aos-anchor="#left-image-source"
        >
          <a href="https://www.github.com/thescripted/trello-markup">
            Repository
          </a>
        </h3>
      </div>
    </>
  )
}
