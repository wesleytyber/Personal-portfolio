import Layout from "../componets/Layout";
import Projects from "../componets/Projects";
import Technologies from "../componets/Technologies";
import TimeLine from "../componets/TimeLine";
import Hero from "../componets/Hero";
export default function Home() {
  return (
    <Layout>
      <Hero />
      <Projects />
      <Technologies />
      <TimeLine />
    </Layout>
  )
}
