export const ProjectExampleThird = () => {
  return (
    <>
      <div className="project-container">
        <div className="header-field p20 f54" data-aos="fade-down">
          <h1>Trading Dashboard & Tooling</h1>
          <a href="http://tradingdashboard.netlify.app">
            <img
              src="web-link.svg"
              alt="Link"
              className="icon-sm link-outside"
            />
          </a>
          <p>July 2020</p>
        </div>
        <div
          className="content-field"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          <a href="https://tradingdashboard.netlify.app">
            <img
              src="TradingAnalytics.PNG"
              alt="FakeImage"
              className="image-container"
              id="image-source"
            />
          </a>
          <div className="copy-text" data-aos="fade-down" data-aos-delay="650">
            <div className="text-blurb f18 l40">
              <p>
                A Work-In-Progress web application for trading information and
                analysis, including stock market search, historical price-data,
                and realtime market movement. Bouilt with React and D3.
              </p>
            </div>
            <div className="tech-stack">
              <h3>Technology Used</h3>
              <ul>
                <li>JavaScript (ES6)</li>
                <li>React (v16.3+)</li>
                <li>Parcel</li>
                <li>TailwindCSS</li>
                <li>D3.js</li>
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
          <a href="https://www.github.com/thescripted/trading-dashboard">
            {" "}
            Link to Repository
          </a>
        </h2>
      </div>
    </>
  )
}
