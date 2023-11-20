import "../index.css";

function About() {
  return (
    <>
      <div className="about-img">
        <img src="/logo.png" alt="Image" />
      </div>

      <div className="about-content">
        <h2 className="heading">Who am I?</h2>
        <h3>
          Vice President <span>@CSC HTU</span> | Co-Founder & CEO
          <span>@AuspicesAI</span>
        </h3>
        <p>
          Yousef Musabeh here, an enthusiastic individual passionately immersed
          in the worlds of AI and cybersecurity. Currently, at 19, I'm wearing
          multiple hats: leading as Co-Founder & CEO of AuspicesAI, VP at HTU
          Cyber Security Club, and contributing as an AI R&D Lead.
          <br />
          <br />
          My dedication lies in leveraging data-driven insights to fortify
          business decisions, previously fine-tuning these skills as a Market
          and Research Analysis Intern @Globitel. With a keen interest in
          Machine Learning, I'm actively expanding my expertise through personal
          learning paths alongside my academic pursuits.
          <br />
          <br />
          Proficient in Python, C, TypeScript and Java, my strong programming
          skills enable the implementation of machine learning algorithms for
          innovative solutions."
        </p>
      </div>
    </>
  );
}

export default About;
