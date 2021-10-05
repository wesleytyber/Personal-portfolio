/* eslint-disable react-hooks/rules-of-hooks */
import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import { Header, LoadingScreen } from "../../../components";
import BannerProject from "../../../components/BannerProject";
import { getPrismicClient } from "../../../services/prismic";
import Prismic from "@prismicio/client";
import { useRouter } from "next/router";
import * as S from "../../../GlobalStyles/slugStyles";
import { request } from "http";

interface IProject {
  slug: string;
  title: string;
  type: string;
  descriptions: string;
  link: string;
  thumbnail: string;
}
interface IProjectProps {
  project: IProject;
}

const project = ({ project }: IProjectProps) => {
  const router = useRouter();

  if (router.isFallback) {
    return <LoadingScreen />;
  }

  return (
    <S.ProjectContainer>
      <Header />
      <BannerProject
        title={project.title}
        type={project.type}
        imgUrl={project.thumbnail}
      />
      <main>
        <p>{project.descriptions}</p>
        <button type="button">
          <a href={project.link}>See project online</a>
        </button>
      </main>
    </S.ProjectContainer>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const prismic = getPrismicClient(request);
  const project = await prismic.query([
    Prismic.Predicates.at("document.type", "project"),
  ]);

  const paths = project.results.map((project) => ({
    params: {
      slug: project.uid,
    },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const prismic = getPrismicClient(request);
  const { slug }: any = context.params;

  const response = await prismic.getByUID("project", String(slug), {});

  const project = {
    slug: response.uid,
    title: response.data.title,
    type: response.data.type,
    descriptions: response.data.descriptions,
    thumbnail: response.data.thumbnail.url,
  };

  return {
    props: {
      project,
    },
    revalidate: 86400,
  };
};
export default project;
