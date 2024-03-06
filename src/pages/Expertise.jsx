import "../index.css";
const mainColor = "#ffa600";

function Expertise() {
  return (
    <>
      <h2 className="heading">
        My <span>Expertise</span>
      </h2>
      <div className="services-container">
        <div className="services-box">
          <i className="bx bx-code-alt"></i>
          <h3>
            <span>AI Software Engineering</span>
          </h3>
          <p>
            Desiging and developing AI-based software systems using Python.
            Using AI libraries including TensorFlow, PyTorch, and SkLearn for
            development. Experimenting using technologies like MLFlow and
            "Weights and Biases"
          </p>
        </div>

        <div className="services-box">
          <i className="bx bx-infinite"></i>
          <h3>
            <span>MLOps</span>
          </h3>
          <p>
            Deploying AI-based software and services on cloud platforms such as
            AWS. Building CI/CD pipelines to ensure contenious and automated
            deployment and model training bridging the gap between development
            and operations
          </p>
        </div>

        <div className="services-box">
          <i className="bx bx-code-block"></i>
          <h3>
            <span>Front-end Development</span>
          </h3>
          <p>
            Using the power of React, TypeScript, and TailwindCSS, I create
            engaging user interfaces and scalable applications. I leverage these
            technologies to build robust, type-safe code, enhancing highly
            maintainable web applications.
          </p>
        </div>
      </div>
      <div className="experience-container">
        <div className="experience-box">
          <i className="bx bxl-python"></i>
          <h3>Python</h3>
        </div>

        <div className="experience-box">
          <i className="bx bxl-typescript"></i>
          <h3>TypeScript</h3>
        </div>

        <div className="experience-box">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
            <g fill={mainColor}>
              <g transform="scale(5.12,5.12)">
                <path d="M5,2c-0.55226,0.00006 -0.99994,0.44774 -1,1v13c0.00043,0.36567 0.20041,0.70195 0.52148,0.87695l11,6c0.30968,0.16869 0.68531,0.16183 0.98861,-0.01807c0.3033,-0.1799 0.48945,-0.50624 0.4899,-0.85888v-13c-0.00043,-0.36567 -0.20041,-0.70195 -0.52148,-0.87695l-11,-6c-0.1467,-0.08039 -0.31123,-0.1227 -0.47852,-0.12305zM20,10c-0.55226,0.00006 -0.99994,0.44774 -1,1v13c0.00043,0.36567 0.20041,0.70195 0.52148,0.87695l11,6c0.30968,0.16869 0.68531,0.16183 0.98861,-0.01807c0.3033,-0.1799 0.48945,-0.50624 0.4899,-0.85888v-13c-0.00043,-0.36567 -0.20041,-0.70195 -0.52148,-0.87695l-11,-6c-0.1467,-0.08039 -0.31123,-0.1227 -0.47852,-0.12305zM45.9707,10c-0.15734,0.00509 -0.31125,0.04725 -0.44922,0.12305l-11,6c-0.32108,0.175 -0.52105,0.51128 -0.52148,0.87695v13c0.00046,0.35264 0.1866,0.67898 0.4899,0.85888c0.3033,0.1799 0.67894,0.18677 0.98861,0.01807l11,-6c0.32108,-0.175 0.52105,-0.51128 0.52148,-0.87695v-13c0.00009,-0.27036 -0.10929,-0.52924 -0.3032,-0.71764c-0.19392,-0.1884 -0.45584,-0.29025 -0.72609,-0.28236zM20,27c-0.55226,0.00006 -0.99994,0.44774 -1,1v13c0.00043,0.36567 0.20041,0.70195 0.52148,0.87695l11,6c0.30968,0.16869 0.68531,0.16183 0.98861,-0.01807c0.3033,-0.1799 0.48945,-0.50624 0.4899,-0.85888v-13c-0.00043,-0.36567 -0.20041,-0.70195 -0.52148,-0.87695l-11,-6c-0.1467,-0.08039 -0.31123,-0.1227 -0.47852,-0.12305z"></path>
              </g>
            </g>
          </svg>
          <h3>Terraform</h3>
        </div>

        <div className="experience-box">
          <svg
            style={{ color: mainColor }}
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>TensorFlow</title>
            <path
              d="M1.292 5.856L11.54 0v24l-4.095-2.378V7.603l-6.168 3.564.015-5.31zm21.43 5.311l-.014-5.31L12.46 0v24l4.095-2.378V14.87l3.092 1.788-.018-4.618-3.074-1.756V7.603l6.168 3.564z"
              fill={mainColor}
            ></path>
          </svg>
          <h3>TensorFlow</h3>
        </div>
        <div className="experience-box">
          <i className="bx bxl-aws"></i>
          <h3>AWS</h3>
        </div>
      </div>
    </>
  );
}

export default Expertise;
