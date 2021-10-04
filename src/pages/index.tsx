import Layout from "../componets/Layout";
import Projects from "../componets/Projects";
import Technologies from "../componets/Technologies";
import TimeLine from "../componets/TimeLine";
import Hero from "../componets/Hero";
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
        <title>portfólio</title>
        <meta name="description" content="Desenvolvedor Front-end" />
        <meta property="og:image" content="/ogimage.png" />
        <meta property="og:image:secure_url" content="/ogimage.png" />
        <meta name="twitter:image" content="/ogimage.png" />
        <meta name="twitter:image:src" content="/ogimage.png" />
        <meta property="og:description" content="Desenvolvedor Front-end " />
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

export default Home;
