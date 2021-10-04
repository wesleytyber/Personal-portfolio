import { GetStaticProps } from "next";
import React from "react";
import { Header, ProjectsItem } from "../../componets";
import { getPrismicClient } from "../../services/prismic";
import Prismic from "@prismicio/client";

import * as S from "./styles";

interface IProject {
  slug: string;
  title: string;
  type: string;
  descriptions: string;
  link: string;
  thumbnail: string;
}

interface IProjectProps {
  projects: IProject[];
}

const projects = ({ projects }: IProjectProps) => {
  return (
    <S.ProjectsContainer>
      <Header />
      <main className="container">
        {projects.map((item) => (
          <ProjectsItem
            key={item.slug}
            title={item.title}
            type={item.type}
            slug={item.slug}
            imgUrl={item.thumbnail}
          />
        ))}
      </main>
    </S.ProjectsContainer>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const projectResponse = await prismic.query(
    [Prismic.Predicates.at("document.type", "project")],
    { orderings: "[document.first_publication_date desc]" }
  );

  const projects = projectResponse.results.map((item) => ({
    slug: item.uid,
    title: item.data.title,
    type: item.data.type,
    descriptions: item.data.descriptions,
    thumbnail: item.data.thumbnail.url,
  }));

  return {
    props: {
      projects,
    },
    revalidate: 86400,
  };
};

export default projects;
