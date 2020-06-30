export const Footer = () => {
  return (
    <div className="footer">
      <p style={{ opacity: 0.5 }}>
        Designed and Developed with{" "}
        <a href="https://www.nextjs.org">
          <i style={{ textDecoration: "underline" }}>Next.js</i>
        </a>{" "}
        by Benjamin Kinga &mdash; &copy; 2020
      </p>
      <p>
        <a href="https://www.github.com/thescripted/website" className="source">
          (Source) benjaminkinga.com
        </a>
      </p>
      <style jsx>{`
        .footer {
          position: absolute;
          bottom: 0;
          width: 100%;
          height: 2rem;
          text-align: center;
        }

        .source {
          text-decoration: underline;
          color: hsl(150, 90%, 66%);
          opacity: 0.5;
          transition: 0.2s;
        }
        .source:hover {
          opacity: 0.87;
        }
      `}</style>
    </div>
  )
}
