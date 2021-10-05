import Link from "next/link";
import React from "react";
import ProjectItem from "./ProjectItem";
import * as S from "./styles";

interface IProjectProps {
  slug: string;
  title: string;
  type: string;
  descriptions: string;
  link: string;
  thumbnail: string;
}

interface IProjectsProps {
  projects: IProjectProps[];
}
const Projects = ({ projects }: IProjectsProps) => {
  return (
    <S.Container>
      <section>
        <S.ProjectGlobal>
          <S.ProjectText>Projects</S.ProjectText>
        </S.ProjectGlobal>

        <section>
          {projects.slice(0, 3).map((project) => (
            <ProjectItem
              key={project.slug}
              title={project.title}
              type={project.type}
              slug={project.slug}
              img={project.thumbnail}
            />
          ))}
        </section>
        <S.Button>
          <Link href="/projects">
            <a>All projects</a>
          </Link>
        </S.Button>
      </section>
    </S.Container>
  );
};

export default Projects;
