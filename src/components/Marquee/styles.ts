import styled from "styled-components";

export const Container = styled.div`


  .marquee {
    width: 80vw;
    height: 20vh;
    background-color: #111;
    overflow: hidden;
    position: relative;
  }
  .marquee:before,
  .marquee:after {
    position: absolute;
    top: 0;
    width: 10rem;
    height: 100%;
    content: "";
    z-index: 1;
  }
  .marquee:before {
    left: 0;
    background: linear-gradient(to right, #111 0%, transparent 100%);
  }
  .marquee:after {
    right: 0;
    background: linear-gradient(to left, #111 0%, transparent 100%);
  }
  .marquee-content {
    height: 100%;
    display: flex;
    animation: scrolling 20s linear infinite;
  }

  @keyframes scrolling {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-180vw);
    }
  }
  .marquee-content li {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    width: 20vw;
    max-height: 100%;
    white-space: nowrap;
  }

  @media (min-width: 768px) {
    .marquee {
      width: 80vw;
      height: 20vh;
      background-color: #111;
      overflow: hidden;
      position: relative;
    }
    .marquee:before,
    .marquee:after {
      position: absolute;
      top: 0;
      width: 10rem;
      height: 100%;
      content: "";
      z-index: 1;
    }
    .marquee:before {
      left: 0;
      background: linear-gradient(to right, #111 0%, transparent 100%);
    }
    .marquee:after {
      right: 0;
      background: linear-gradient(to left, #111 0%, transparent 100%);
    }
    .marquee-content {
      height: 100%;
      display: flex;
      animation: scrolling 20s linear infinite;
    }

    @keyframes scrolling {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-180vw);
      }
    }
    .marquee-content li {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-shrink: 0;
      width: 20vw;
      max-height: 100%;
      white-space: nowrap;
    }

    .marquee-content li img {
      width: 100%;
      border: 2px solid #eee;
    }
  }
`;
