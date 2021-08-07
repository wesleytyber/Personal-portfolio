import styled from "styled-components";

export const Section = styled.section`
  max-width: 65rem;
  display: grid;
  flex-direction: row;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  padding: 0rem 0.625rem 0rem;
  grid-template-columns: 1fr;

  @media (min-width: 48rem) {
    max-width: 65rem;
    padding: 2rem 3rem 0rem;
    flex-direction: column;
    margin: 0 4.5rem;
    grid-template-columns: 1fr 1fr;
  }
`;

export const SectionTitle = styled.h2`
  font-weight: 800;
  font-size: 1.75rem;
  line-height: 2.25rem;
  width: max-content;
  max-width: 100%;
  margin-bottom: 1rem;
  margin: 0rem 0rem  0.5rem;
  padding: 1rem 0 0.5rem;

  @media (min-width: 48rem) {
    font-size: 4.063rem;
    line-height: 4.5rem;
    padding: 3.625rem 0 1rem;
  }
`;

export const SectionFlex = styled.section`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    padding: 0;
    margin: 0 auto;
    /* max-width: 1040px; */
    /* box-sizing: content-box; */
    position: relative;
    overflow: hidden;
    grid-template-columns: 1fr 1fr;
    flex-direction: column;
  }
`;
export const SectionText = styled.p`
  max-width: 50rem;
  font-size: 1rem;
  line-height: 1.375rem;
  font-weight: 300;
  padding-bottom: 1rem;
  color: rgba(255, 255, 255, 0.5);

  @media (min-width: 48rem) {
    font-size: 1.5rem;
    padding-bottom: 3.6rem;
  }
`;
export const LeftSection = styled.div`
  display: block;
`;
export const Button = styled.div`
  width: 16.375rem;
  height: 1.875rem;
  align-items: center;
  display: block;
  font-weight: 600;
  cursor: pointer;
  justify-content: center;
  border-radius: 1.25rem;
  color: rgb(255, 255, 255);
  background: linear-gradient(
    270deg,
    rgb(19, 173, 199) 0%,
    rgb(148, 93, 214) 100%
  );

  @media (min-width: 48rem) {
    width: 16.375rem;
    height: 4rem;
    border-radius: 3.125rem;
    font-weight: 600;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
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
    opacity: 1;
  }
`;
export const ButtonLearn = styled.button`
  width: 16.25rem;
  height: 1.875rem;
  align-items: center;
  display: block;
  font-weight: 600;
  cursor: pointer;
  justify-content: center;
  border-radius: 1.25rem;
  color: rgb(255, 255, 255);
  background: linear-gradient(
    270deg,
    rgb(19, 173, 199) 0%,
    rgb(148, 93, 214) 100%
  );

  @media (min-width: 48rem) {
    width: 16.375rem;
    height: 4rem;
    align-items: center;
    font-size: 1.25rem;
    display: block;
    font-weight: 600;
    cursor: pointer;
    justify-content: center;
    border-radius: 1.25rem;
    color: rgb(255, 255, 255);
    background: linear-gradient(
      270deg,
      rgb(19, 173, 199) 0%,
      rgb(148, 93, 214) 100%
    );
  }
`;
