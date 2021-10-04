import styled from "styled-components";

interface ContainerProps {
  imgUrl: string;
}

export const Container = styled.div<ContainerProps>`
  @media (min-width: 48rem) {
    > a {
      position: relative;
      width: 100%;
      background: url(${(props) => props.imgUrl}) no-repeat center;
      background-size: cover;
      height: 10rem;
      padding: 1.5rem;
      display: flex;
      align-items: flex-end;
      justify-content: flex-start;
      border-radius: 0.5rem;
      border: 1px solid #1f1f1f;
      transition: 0.5s;
      cursor: pointer;
      overflow: hidden;

      &:hover {
        border-color: #0070b2;

        > div.overlay {
          opacity: 0.5;
        }
      }

      > section {
        z-index: 2;
        h1 {
          color: #f5f6f7;
          font-size: 1.5rem;
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
        background: linear-gradient(
          225deg,
          rgb(49, 56, 110) 0%,
          rgb(17, 23, 43) 100%
        );
        opacity: 0.7;
        transition: 0.5s;
      }
    }
  }
`;
