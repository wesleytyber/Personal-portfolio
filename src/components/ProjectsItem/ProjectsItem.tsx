import React from "react";
import * as S from "./styles";
import Link from "next/link";

interface IProjectsItemProps {
  title: string;
  type: string;
  imgUrl: string;
  slug: string;
}

const ProjectsItem = ({ title, type, imgUrl, slug }: IProjectsItemProps) => {
  return (
    <S.Container imgUrl={imgUrl}>
      <Link href={`/projects/${slug}`}>
        <a>
          <div className="overlay" />
          <section>
            <h1>{title}</h1>
            <h2>{type}</h2>
          </section>
        </a>
      </Link>
    </S.Container>
  );
};

export default ProjectsItem;
