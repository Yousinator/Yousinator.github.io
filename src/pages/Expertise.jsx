import "../index.css";

function Expertise() {
  return (
    <>
      <h2 className="heading">
        My <span>Expertise</span>
      </h2>
      <div className="services-container">
        <div className="services-box">
          <i className="bx bx-line-chart"></i>
          <h3>Data Analytics</h3>
          <p>
            Proficient in Python and armed with a deep understanding of its data
            science libraries, I extract meaningful insights from complex
            datasets, enabling data-driven decisions and solutions for
            businesses.
          </p>
          <a
            href="https://www.linkedin.com/in/yousef-musabeh/"
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read More
          </a>
        </div>

        <div className="services-box">
          <i className="bx bxs-network-chart"></i>
          <h3>Machine Learning</h3>
          <p>
            I use the power of data to build predictive models and innovative
            solutions. Proficient in Python and well-versed in various machine
            learning algorithms, I craft intelligent systems that learn and
            adapt.
          </p>
          <a
            href="https://www.linkedin.com/in/yousef-musabeh/"
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read More
          </a>
        </div>

        <div className="services-box">
          <i className="bx bx-code-alt"></i>
          <h3>Web Development</h3>
          <p>
            Using the power of React and TypeScript I create engaging user
            interfaces and scalable applications I leverage t to build robust
            strong, type-safe code, enhancing the maintainability of web
            applications.
          </p>
          <a
            href="https://www.linkedin.com/in/yousef-musabeh/"
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read More
          </a>
        </div>
      </div>
    </>
  );
}

export default Expertise;
