import styled from "styled-components";

export const Section = styled.section`
  max-width: 1040px;
  display: flex;
  flex-direction: row;
  margin: 40px auto;
  flex-direction: column;
  overflow: hidden;
  padding: 0px 10px 0;

  @media (min-width: 768px) {
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    padding: 32px 48px 0px;
    position: relative;
    box-sizing: content-box;
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
    font-weight: 800; 
    line-height: 56px;
    padding: 0px;
    margin-bottom: 16px;
    max-width: 100%;
    
  }
`;
export const SectionText = styled.p`
  color: rgba(255, 255, 255, 0.57);
  margin: 4px 0;
  line-height: 1.4rem;
  font-size: 18px;

  @media (max-width: 768px) {
    max-width: 800px;
    line-height: 40px;
    font-weight: 300;
    padding-bottom: 3.6rem;
  }
`;
export const SectionContent = styled.ul`
  display: flex;
  color: rgba(255, 255, 255, 0.57);
  margin: 4px 0;
  font-size: 14px;
  line-height: 1.4rem;
`;
export const SectionTimeline = styled.div`
  margin: 4px 0;
  font-size: 15px;
  line-height: 1.4rem;
`;
export const SectionYear = styled.h4`
  color: rgba(255, 255, 255, 07);
  margin: 4px 0;
  font-size: 15px;
  line-height: 1.4rem;
`;
export const Carousel = styled.div``;
export const CarouselText = styled.p`
  color: rgba(255, 255, 255, 07);
  margin: 4px 0;
  font-size: 15px;
  line-height: 1.4rem;

  @media (min-width: 768px) {
    font-size: 14px;
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
