import * as S from "./styles";

interface BannerProjectProps {
  title: string;
  type: string;
  imgUrl: string;
}

const BannerProject = ({ title, type, imgUrl }: BannerProjectProps) => {
  return (
    <S.Container imgUrl={imgUrl}>
      <div className="overlay" />
      <section>
        <h1>{title}</h1>
        <h2>{type}</h2>
      </section>
    </S.Container>
  );
};

export default BannerProject;
