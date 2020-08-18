export function Project({
  title,
  urlLink,
  githubLink,
  imageSource,
  date,
  contentBlurb,
  techStack,
  imageOnLeft,
}) {
  const websitelink = urlLink ? urlLink : ""
  function renderSubComponent() {
    if (imageOnLeft) {
      return (
        <div
          className="content-field"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          <a href={websitelink}>
            <img
              src={imageSource}
              alt="Landing Page"
              className="image-container"
              id="image-source"
            />
          </a>
          <div className="copy-text" data-aos="fade-down" data-aos-delay="650">
            <div className="text-blurb f18 l40">
              <p>{contentBlurb}</p>
            </div>
            <div className="tech-stack">
              <h3>Technology Used</h3>
              <ul>
                {techStack &&
                  techStack.map((item, index) => <li key={index}>{item}</li>)}
              </ul>
            </div>
          </div>
        </div>
      )
    }

    if (!imageOnLeft) {
      return (
        <div
          className="content-field"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          <a href={websitelink}>
            <img
              src={imageSource}
              alt="Landing Page"
              className="image-container"
              id="image-source"
            />
          </a>
          <div className="copy-text" data-aos="fade-down" data-aos-delay="650">
            <div className="text-blurb f18 l40">
              <p>{contentBlurb}</p>
            </div>
            <div className="tech-stack">
              <h3>Technology Used</h3>
              <ul>
                {techStack &&
                  techStack.map((item, index) => <li key={index}>{item}</li>)}
              </ul>
            </div>
          </div>
        </div>
      )
    }
  }

  return (
    <div>
      <div className="project-container">
        <div className="header-field p20 f54" data-aos="fade-down">
          <h1>{title}</h1>
          <a href={websitelink}>
            <img
              src="web-link.svg"
              alt="Link"
              className="icon-sm link-outside"
            />
          </a>
          <p>{date}</p>
        </div>
        {renderSubComponent()}
        <h2
          className="document-link p20"
          data-aos="fade-down"
          data-aos-anchor="#image-source"
          data-aos-delay="650"
        >
          <a href={githubLink}>Link to Repository</a>
        </h2>
      </div>
    </div>
  )
}
