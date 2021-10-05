import { GetStaticProps } from "next";
import React from "react";
import { Header, ProjectsItem } from "../../components";
import { getPrismicClient } from "../../services/prismic";
import Head from "next/head";
import Prismic from "@prismicio/client";

import * as S from "../../GlobalStyles/projectsStyles";

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
      <Head>
        <title> Projects | Portfólio</title>
        <meta name="description" content="Desenvolvedor Front-end" />
        <meta property="og:image" content="/ogimage.png" />
        <meta property="og:image:secure_url" content="/ogimage.png" />
        <meta name="twitter:image" content="/ogimage.png" />
        <meta name="twitter:image:src" content="/ogimage.png" />
        <meta property="og:description" content="Desenvolvedor Front-end " />
      </Head>
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

  const projects = projectResponse.results.map((project) => ({
    slug: project.uid,
    title: project.data.title,
    type: project.data.type,
    descriptions: project.data.descriptions,
    thumbnail: project.data.thumbnail.url,
  }));

  return {
    props: {
      projects,
    },
  };
};

export default projects;
