import "../index.css";

const ProjectCard = ({
  image,
  title,
  description,
  tags,
  githubLink,
  demoLink,
}) => {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-image" />
      <div className="project-tags">
        {tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>
      <div className="project-info">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <div className="project-buttons">
          {githubLink && (
            <a
              href={githubLink}
              className="button github"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bxl-github"></i> View on GitHub
            </a>
          )}

          {demoLink && (
            <a
              href={demoLink}
              className="button demo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bx-rocket"></i>
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const projects = [
  {
    image: "./portfolio1.jpg",
    title: "Math For Computing",
    description:
      "These are Mathematical algorithms that are used in the programming field. All algorithms are written in both C and Java. For each folder that contains more than one algorithm, there will be a separate file for each algorithm with precise documentation on how the algorithm was written.",
    tags: ["Java", "C Language", "Algorithms"],
    githubLink: "https://github.com/Yousinator/Math-For-Computing",
  },
  {
    image: "./portfolio2.jpg",
    title: "Java0x01",
    description:
      "Teach to Learn is useful to trick your brain and make it believe that you understand a certain topic by teaching it, which makes learning crazy fast. We made this working environment that is fully customizable and you will have every information snippet and link regarding Java OOP.",
    tags: ["Java", "Teach-to-Learn", "OOP"],
    githubLink: "https://github.com/smadi0x86/Java0x01",
  },
  {
    image: "./portfolio3.jpg",
    title: "DMV System",
    description:
      "A Java-based application simulating a Car Department of Motor Vehicles (DMV) system. It is designed to manage car and user data, offering different user roles each with specific privileges. The project integrates a SQLite database to persistently store and manage data, and utilizes Maven for dependency management.",
    tags: ["Java", "Databases", "OOP", "Event-Driven"],
    githubLink: "https://github.com/Yousinator/dmv-system",
  },
  // Add more projects as needed
];

function Projects() {
  return (
    <>
      <h2 className="heading">
        My Latest <span>Projects</span>
      </h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </>
  );
}

export default Projects;
