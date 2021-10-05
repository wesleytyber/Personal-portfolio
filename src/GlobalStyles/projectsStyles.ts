import styled from "styled-components";

export const ProjectsContainer = styled.div`
  @media (min-width: 48rem) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;

    > main {
      margin-top: 5rem;
      margin-bottom: 5rem;
      width: 100%;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 1.5rem;
    }
  }
`;
