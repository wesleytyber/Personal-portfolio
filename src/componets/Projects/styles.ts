import styled from "styled-components";

export const SectionContainer = styled.section`
  max-width: 1040px;
  display: grid;
  margin: 10px 0;
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
  padding: 0px 10px 0px;

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

  @media (min-width: 768px) {
  }
`;
export const TitleVegan = styled.section`
  margin: 0 auto;
  font-weight: 500;
  font-size: 28px;
  line-height: 10px;
  text-align: center;
  width: max-content;
  max-width: 100%;
  margin-bottom: 16px;
  padding: 16px 0 8px;

  @media (min-width: 768px) {
  }
`;
export const SectionContent = styled.div`
  padding: 10px;
  width: 90%;
  
  img {
    width: 100%;
  }
`;
export const Divider = styled.hr`
  height: 5px;
  width: 70px;
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

  @media (min-width: 768px) {
  }
`;
export const Subtitle = styled.p`
  max-width: 22rem;
  font-size: 16px;
  line-height: 1.6rem;
  letter-spacing: 0.01rem;
  color: rgba(255, 255, 255, 0.57);

  @media(min-width: 48rem) {
    max-width: 100%;
  }
`;
export const Stack = styled.div`
  margin: 10px 0;
  text-align: center;
  font-size: 18px;
  letter-spacing: 0.03rem;
  font-weight: normal;
`;
export const StackContent = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: center;
  font-size: 18px;
`;
export const StackList = styled.div`
  width: 120px;
  font-size: 15px;
  border-radius: 50px;
  padding: 10px 0;
  cursor: pointer;
  margin: 0 50px;
  background: rgb(14, 111, 199);
  transition: all 0.3s ease 0s;

  &:hover {
    transform: scale(1.2);
  }
`;
