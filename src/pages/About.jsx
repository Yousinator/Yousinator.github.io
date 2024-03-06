import "../index.css";

function About() {
  return (
    <>
      <div className="about-img">
        <img src="/logo.png" alt="Image" />
      </div>

      <div className="about-content">
        <h2 className="heading">
          <span>Who am I?</span>
        </h2>
        <h3>
          Startup CEO <span>@AuspicesAI</span> | Vice President{" "}
          <span>@CSC HTU</span>
        </h3>
        <p>
          Yousef Musabeh here, an enthusiastic individual passionately immersed
          in the worlds of AI and cybersecurity. Currently, at 19, I'm wearing
          multiple hats: leading as the Startup CEO of <span>AuspicesAI</span>,
          Vice President at <span>HTU Cyber Security Club</span>, and
          contributing as Head of Artificial Intelligence at{" "}
          <span>AuspicesAI</span>.
          <br />
          <br />
          Startup CEO of AuspicesAI, dedicated to revolutionizing the
          cybersecurity field through AI solutions. Head of Artificial
          Intelligence at AuspicesAI, leading the charge in integrating advanced
          AI technologies to enhance cybersecurity solutions.
          <br />
          <br />
          Proficient in Python, TypeScript, and Java. Expert in MLOps, AI
          Software Engineering, and Front-end Development. Developing and
          deploying AI-driven software both, as an AI Software Engineer and
          MLOps Engineer.
        </p>
      </div>
    </>
  );
}

export default About;
