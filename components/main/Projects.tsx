import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/certify.jpg"
          title="Certify"
          description="A web application to convert your physical degree certificate to digital certificate using technology stack(solidity,react.js mongoDb)."
          codeUrl=" https://gitlab.com/prj_group1/prj_group_certifi"
        />
        <ProjectCard
          src="/chain.png"
          title="ChainScholar"
          description="ChainScholar is website browser where students are incentivized with custom web token for their active participation in the community."
          codeUrl="https://gitlab.com/prj_group1/prj_group_certifi"
        />
      </div>
    </div>
  );
};

export default Projects;
