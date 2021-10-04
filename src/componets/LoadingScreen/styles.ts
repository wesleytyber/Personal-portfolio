import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  position: fixed;
`;

export const SpinnerContainer = styled.div`
  .sk-flow {
    width: calc(var(--sk-size) * 1.3);
    height: calc(var(--sk-size) * 1.3);
    display: flex;
    justify-content: space-between;
  }

  .sk-flow-dot {
    width: 25%;
    height: 25%;
    background-color: var(--sk-color);
    border-radius: 50%;
    animation: sk-flow 1.4s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s infinite
      both;
  }

  .sk-flow-dot:nth-child(1) {
    animation-delay: -0.3s;
  }
  .sk-flow-dot:nth-child(2) {
    animation-delay: -0.15s;
  }

  @keyframes sk-flow {
    0%,
    80%,
    100% {
      transform: scale(0.3);
    }
    40% {
      transform: scale(1);
    }
  }
`;
