import styled from "styled-components";

export const FooterContainer = styled.div`
  padding: 0rem 1rem 3rem;
  margin: 0.6rem 0;


  @media (min-width: 768px) {
    /* width: calc(100vw - 96px); */
    max-width: 65rem;
    padding: 2rem 3rem 3rem;
    margin: 1rem auto;
    box-sizing: content-box;
  }
`;
export const Content = styled.ul`
  display: grid;
  padding: 0.6rem;
  column-gap: 0.2rem;
  grid-template-columns: repeat(3, minmax(5rem, 14rem));

  @media (min-width: 40rem) {
    gap: 3rem;
    padding: 3rem 0 1.8rem;
  }
`;
export const FooterCell = styled.div`
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.6rem;
  text-transform: uppercase;

  @media (min-width: 40rem) {
  font-size: 0.8rem;
  }
`;
export const FooterText = styled.h4`
  margin: 0.6rem 0;
  font-size: 0.6rem;

  @media (min-width: 40rem) {
  font-size: 1.1rem;
  line-height: 1.8rem;
  transition: all 0.3s ease 0s;
  margin-bottom: 1rem;
  
  }
`;
export const FooterMail = styled.div`
  color: rgba(255, 255, 255, 0.5);
  text-transform: uppercase;
  font-size: 0.6rem;
  grid-column: span 2;

  @media (min-width: 40rem) {
  font-size: 0.8rem;
  }
`;
export const FooterSocial = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1.8rem);
  align-items: center;
  grid-gap: 0.6rem;
  justify-content: center;
  margin-top: 3rem;

  @media (min-width: 40rem) {
  justify-content: end;
  margin-top: 0.6rem;
  }
`;
