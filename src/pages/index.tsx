import Layout from "../components/Layout";
import Projects from "../components/Projects";
import Technologies from "../components/Technologies";
import TimeLine from "../components/TimeLine";
import Hero from "../components/Hero";
import { GetStaticProps } from "next";
import { getPrismicClient } from "../services/prismic";
import Prismic from "@prismicio/client";
import Head from "next/head";

interface IProjectProps {
  slug: string;
  title: string;
  type: string;
  descriptions: string;
  link: string;
  thumbnail: string;
}
interface IHomeProps {
  projects: [IProjectProps];
}

const Home = ({ projects }: IHomeProps) => {
  return (
    <Layout>
      <Head>
        <title>Home | Portfólio</title>
        <meta
          name="description"
          content="Desenvolvedor Front-end reactjs/nextjs and react-native"
        />
        <meta property="og:image" content="/ogimage.png" />
        <meta property="og:image:secure_url" content="/ogimage.png" />
        <meta name="twitter:image" content="/ogimage.png" />
        <meta name="twitter:image:src" content="/ogimage.png" />
        <meta
          property="og:description"
          content="Desenvolvedor Front-end reactjs/nextjs and react-native"
        />
      </Head>

      <Hero />
      <Projects projects={projects} />
      <Technologies />
      <TimeLine />
    </Layout>
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
    revalidate: 86400,
  };
};
export default Home;
