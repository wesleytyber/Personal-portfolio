import styled from "styled-components";

interface ContainerProps {
  imgUrl: string;
}

export const Container = styled.div<ContainerProps>`
  background-color: red;
  width: 95%;
  background: url(${(props) => props.imgUrl}) no-repeat center;
  background-size: cover;
  height: 12rem;
  position: relative;
  padding: 2rem 1rem;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  margin: 0 auto;
  border-radius: 5px;

  section {
    z-index: 2;

    h1 {
      color: #f5f6f7;
      font-size: 1.3rem;
    }
    h2 {
      color: #0070b2;
      font-weight: 300;
      font-size: 1rem;
    }
  }

  > div.overlay {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    background: linear-gradient(
      225deg,
      rgb(49, 56, 110) 0%,
      rgb(17, 23, 43) 100%
    );
    opacity: 0.7;
    transition: 0.5s;
  }

  @media (min-width: 48rem) {
    width: 100%;
    background: url(${(props) => props.imgUrl}) no-repeat center;
    background-size: cover;
    height: 26rem;
    position: relative;
    padding: 3rem 5rem;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;

    section {
      z-index: 2;

      h1 {
        color: #f5f6f7;
        font-size: 3rem;
      }
      h2 {
        color: #0070b2;
        font-weight: 300;
        font-size: 2rem;
      }
    }
    > div.overlay {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        225deg,
        rgb(49, 56, 110) 0%,
        rgb(17, 23, 43) 100%
      );
      opacity: 0.7;
      transition: 0.5s;
    }
  }
`;
