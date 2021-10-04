import styled from "styled-components";

interface IProjectProps {
  imgUrl: string;
}

export const Container = styled.section`
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  padding: 0 12px;

  > section {
    display: flex;
    flex-direction: column;

    div {
      padding-top: 1rem;
    }
  }

  @media (min-width: 48rem) {
    width: 100%;
    height: 100%;
    flex-direction: column;
    align-items: center;
    padding: 0 12px;

    width: 100%;
    display: flex;
    flex-direction: column;

    div {
      padding-top: 1rem;
    }
  }
`;
export const Button = styled.div`
  width: 10rem;
  display: flex;
  padding: 10px;
  font-weight: 600;
  border-radius: 10rem;
  color: rgb(255, 255, 255);
  cursor: pointer;
  background: linear-gradient(
    270deg,
    rgb(19, 173, 199) 0%,
    rgb(148, 93, 214) 100%
  );
  margin: 1.5rem auto;

  a {
    margin: -0.2rem auto;
    text-align: center;
    text-transform: uppercase;
  }

  @media (min-width: 48rem) {
    width: 16.375rem;
    height: 3rem;
    border-radius: 3.125rem;
    font-weight: 700;
    display: flex;
    font-size: 1.2rem;
    text-transform: uppercase;
    -webkit-box-align: center;
    -webkit-box-pack: center;
    margin: 0rem 0rem 5rem;
    color: rgb(255, 255, 255);
    background: linear-gradient(
      270deg,
      rgb(0, 219, 216) 0%,
      rgb(177, 51, 255) 100%
    );
    cursor: pointer;
    transition: all 0.5s ease 0s;
    position: relative;
    overflow: hidden;
    margin-top: 3rem;
    margin-left: 40%;

    &:hover {
      opacity: 0.75;
    }
  }
`;
export const ProjectContainer = styled.div<IProjectProps>`
  @media (min-width: 48rem) {
    width: 100%;
    display: flex;
    height: 30rem;
    align-items: flex-end;
    position: relative;
    cursor: pointer;

    &:hover {
      > section {
        > div.text {
          right: -8rem;
        }

        > div.overlay {
          opacity: 0.4;
        }
      }

      > button a {
        color: #0070b2;
      }
    }

    > button {
      height: 4rem;
      margin: 0 0 3rem 5rem;
      background: none;
      border: none;
      cursor: pointer;

      a {
        color: #fff;
        font-size: 2rem;
        font-weight: 300;
        display: flex;
        align-items: center;
        gap: 0.8rem;
        transition: 0.5s;
      }
    }

    > section {
      width: 50rem;
      height: 100%;
      background: url(${(props) => props.imgUrl}) no-repeat center;
      position: relative;
      background-size: cover;
      border-radius: 0.5rem;

      > div.overlay {
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 0.5rem;
        background: linear-gradient(
          225deg,
          rgb(49, 56, 110) 0%,
          rgb(17, 23, 43) 100%
        );
        opacity: 0.75;
        transition: 0.5s;
      }

      > div.text {
        position: absolute;
        top: 3rem;
        right: -6rem;
        transition: 0.5s;
        width: fit-content;
      }

      h1 {
        color: #f5f6f7;
        font-size: 2.5rem;
        text-shadow: -4px 5px 22px #11172b;
      }

      h2 {
        color: #0070b2;
        font-size: 2rem;
        font-weight: 300;
        text-shadow: -4px 5px 22px #11172b;
      }
    }

    &:nth-child(even) {
      flex-direction: row-reverse;

      > button {
        margin: 3rem 5rem 0 0;
      }

      > section > div.text {
        text-align: right;
        right: 0;
        left: -10rem;
      }

      &:hover {
        > section > div.text {
          left: -12rem;
        }
      }
    }
  }
`;

export const SectionContainer = styled.section`
  display: grid;
  margin: 10px 0;
  padding: 0px 10px 0px;
  flex-direction: row;
  position: relative;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    margin: 0 72px;
    padding: 32px 48px 0px;
    transition: 0.4s ease;
  }
`;
export const ProjectText = styled.h2`
  font-weight: 800;
  font-size: 28px;
  color: #f2f5f7;
  width: max-content;
  max-width: 100%;

  @media (min-width: 768px) {
    font-size: 56px;
    padding: 40px 0 16px;
  }
`;
export const ProjectGlobal = styled.h2`
  font-weight: 800;
  font-size: 28px;
  line-height: 36px;
  width: max-content;
  max-width: 100%;
  margin-bottom: 16px;
  margin: 0px 0px 8px;
  padding: 16px 0 8px;
`;
