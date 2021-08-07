import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-areas: "portfolioname project social";
  grid-template-rows: repeat(2, 60px);
  gap: 0.5rem;
  grid-column-gap: 0.3rem;
  grid-row-gap: 0.3rem;
  background: #141414;
  width: 100%;
  padding: 1.25rem 0.625rem 0.625rem;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: 1fr;
    grid-template-areas: "portfolio project social";
    column-gap: 2rem;
  }
`;
export const Div1 = styled.div`
  grid-area: 1 / 1 / 2 / 3;

  a {
    font-size: 17px;
    display: flex;
    align-items: center;
    color: white;
    margin-bottom: 20px;
  }

  @media (min-width: 768px) {
    grid-area: 1 / 1 / 2 / 3;
    display: flex;
    flex-direction: row;
    align-content: center;

    a {
      font-size: 22px;
    }
  }
`;
export const Div2 = styled.div`
  display: flex;
  grid-area: project;
  grid-column: 1 / -1;
  grid-row: span 2;
  flex-direction: row;
  justify-content: space-around;

  a {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }

  a:hover {
    color: white;
    transition: all 0.4s ease 0s;
  }

  @media (min-width: 768px) {
    display: flex;
    grid-area: 1 / 2 / 2 / 4;
    align-items: center;

    a {
      font-size: 20px;
    }
  }
`;
export const Div3 = styled.div`
  grid-area: social;
  display: flex;
  justify-content: space-around;
  grid-column: 4 / -1;
  margin-bottom: 20px;
  align-items: center;

  @media (min-width: 768px) {
    grid-column: 7 / -1;
  }
`;
export const NavLink = styled.a`
  color: rgba(255, 255, 255, 0.75);
  font-size: 1.2rem;
  line-height: 32px;
  cursor: pointer;
  transition: 0.4s ease;

  &hover {
    color: #fff;
    opacity: 1;
    cursor: pointer;
  }
`;
export const SocialIcons = styled.a`
  color: white;
  padding: 8px;
  transition: 0.3s ease;
  border-radius: 50px;

  &:hover {
    transform: scale(1.2);
    cursor: pointer;
  }
`;
