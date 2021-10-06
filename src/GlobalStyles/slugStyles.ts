import styled from "styled-components";

export const ProjectContainer = styled.div`
  > main {
    margin-top: 1rem;
    margin-bottom: 1rem;
    width: 100%;
    padding: 0 1rem;

    P {
      color: #f5f6f7;
      font-size: 1.1rem;
      font-weight: 300;
      text-align: justify;
    }

    button {
      background: #0070b2;
      padding: 0.8rem 0.5rem;
      border-radius: 0.5rem;
      border: none;
      transition: 0.5s;
      margin-top: 2rem;
      cursor: pointer;

      &:hover {
        background: #0070b9;
      }

      a {
        color: #fff;
        text-transform: uppercase;
        font-size: 0.7rem;
        font-weight: 300;
      }
    }
  }

  @media (min-width: 48rem) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;

    > main {
      margin-top: 2rem;
      margin-bottom: 2rem;
      width: 100%;
      padding: 0 5rem;

      P {
        color: #f5f6f7;
        font-size: 1.5rem;
        font-weight: 300;
        text-align: justify;
      }

      button {
        background: #0070b2;
        padding: 0.8rem 3rem;
        border-radius: 0.5rem;
        border: none;
        transition: 0.5s;
        margin-top: 2rem;
        cursor: pointer;

        &:hover {
          background: #0070b9;
        }

        a {
          color: #fff;
          text-transform: uppercase;
          font-size: 1.5rem;
          font-weight: 300;
        }
      }
    }
  }
`;
