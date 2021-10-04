import * as S from "./styles";

const LoadingScreen = () => {
  return (
    <S.Container>
      <S.SpinnerContainer>
        <div className="sk-flow">
          <div className="sk-flow-dot"></div>
          <div className="sk-flow-dot"></div>
          <div className="sk-flow-dot"></div>
        </div>
      </S.SpinnerContainer>
    </S.Container>
  );
};

export default LoadingScreen;
