import "../index.css";

function Projects() {
  return (
    <>
      <h2 className="heading">
        My Latest <span>Projects</span>
      </h2>
      <div className="projects-container">
        <div className="projects-box">
          <img src="/portfolio1.jpg" alt="" />
          <div className="projects-layer">
            <h4>Java0x01</h4>
            <p>
              Java0x01 is a Teach to Learn project that Saud Smadi and I started
              while studying for our university Java course
            </p>
            <a
              href="https://github.com/smadi0x86/Java0x01"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bx-link"></i>
            </a>
          </div>
        </div>

        <div className="projects-box">
          <img src="/portfolio2.jpg" alt="" />
          <div className="projects-layer">
            <h4>DMV Project</h4>
            <p>
              My Programming course final project. Currently working to add a
              database to make it complete.(In Progress)
            </p>
            <a
              href="https://github.com/Yousinator/DMV"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bx-link"></i>
            </a>
          </div>
        </div>

        <div className="projects-box">
          <img src="/portfolio3.jpg" alt="" />
          <div className="projects-layer">
            <h4>Math for Computing</h4>
            <p>
              Mathematical Algorithms including Hashing, Encryption, and much
              more all in one project.
            </p>
            <a
              href="https://github.com/Yousinator/Math-For-Computing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bx-link"></i>
            </a>
          </div>
        </div>

        <div className="projects-box"></div>

        <div className="projects-box">
          <img src="/portfolio4.jpg" alt="" />
          <div className="projects-layer">
            <h4>AuspicesAI Website</h4>
            <p>
              A website I built for my Startup -AuspicesAI-. I built the
              front-end using react and TypeScript
            </p>
            <a
              href="https://www.auspicesai.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bx-link"></i>
            </a>
          </div>
        </div>

        <div className="projects-box"></div>
      </div>
    </>
  );
}

export default Projects;
