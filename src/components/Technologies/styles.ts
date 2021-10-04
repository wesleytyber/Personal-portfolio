import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  max-width: 1040px;
  margin: 0 auto;
  flex-direction: column;
  overflow: hidden;

  > section {
    margin-top: 2rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    flex-wrap: wrap;
  }

  @media (min-width: 48rem) {
    > section {
      margin-top: 4rem;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8rem;
    }
  }
`;
export const KnowledgeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1;
  align-items: center;
  justify-content: center;

  p {
    color: #f5f6f7;
    font-size: 0.7rem;
    font-weight: 300;
    text-transform: uppercase;
  }

  svg {
    width: 3rem;
    height: 3rem;
    transition: 0.3s;
    opacity: 0.7;
    color: #3779b2;
  }

  &:hover {
    svg {
      opacity: 1;
      transform: scale(0.95);
    }
  }

  @media (min-width: 48rem) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    justify-content: center;

    p {
      color: #f5f6f7;
      font-weight: 300;
      font-size: 1.3rem;
      text-transform: uppercase;
    }

    svg {
      width: 6rem;
      height: 6rem;
      transition: 0.3s;
      opacity: 0.7;
      color: #3779b2;
    }

    &:hover {
      svg {
        opacity: 1;
        transform: scale(0.95);
      }
    }
  }
`;

export const SectionTitle = styled.h2`
  font-weight: 800;
  font-size: 28px;
  line-height: 36px;
  width: max-content;
  max-width: 100%;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    font-size: 56px;
    line-height: 56px;
    padding: 0px;
    margin-bottom: 16px;
    max-width: 100%;
  }
`;
export const Divider = styled.hr`
  height: 1px;
  width: 100%;
  border: none;
  margin: 20px auto;
  border-radius: 10px;
  background: linear-gradient(
    to right top,
    #051937,
    #004d7a,
    #008793,
    #00bf72,
    #a8eb12
  );
  align-items: center;
`;
export const SectionContent = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  color: rgba(255, 255, 255, 0.57);
  margin: 30px 0px 0px;
  font-size: 16px;
  line-height: 1.4rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    margin: 3rem 0px;
  }
  li {
    max-width: 320px;
    display: flex;
    flex-direction: column;
  }
  div {
    display: flex;
    flex-direction: column;
  }
`;
export const SectionTech = styled.h5`
  color: white;
  margin: 4px 0px 4px 80px;
  font-size: 19px;
  line-height: 1.4rem;

  @media (min-width: 768px) {
    font-size: 28px;
    font-weight: 300px;
    margin: 4px 0px 4px 0px;
    margin-bottom: 8px;
    letter-spacing: 0.02rem;
    line-height: 32px;
  }
`;
export const SectionSkill = styled.p`
  margin: 8px 0px 4px 80px;
  color: rgba(255, 255, 255, 0.57);
  font-size: 14px;
  line-height: 1.4rem;

  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 30px;
    margin: 8px 0px 4px 0px;
  }
`;
