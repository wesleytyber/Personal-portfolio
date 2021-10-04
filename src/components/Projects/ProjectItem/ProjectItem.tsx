import React from "react";
import Link from "next/link";
import * as S from "../styles";
import { AiOutlineRightCircle } from "react-icons/ai";

interface IProjectProps {
  title: string;
  type: string;
  slug: string;
  img: string;
}

const ProjectItem = ({ title, type, slug, img }: IProjectProps) => {
  return (
    <S.ProjectContainer imgUrl={img}>
      <section>
        <div className="overlay" />
        <div className="text">
          <h1>{title}</h1>
          <h2>- {type}</h2>
        </div>
      </section>
      <button type="button">
        <Link href={`/projects/${slug}`}>
          <a>
            See more <AiOutlineRightCircle size={24} />
          </a>
        </Link>
      </button>
    </S.ProjectContainer>
  );
};

export default ProjectItem;
