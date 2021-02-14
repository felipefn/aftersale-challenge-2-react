import styled, { css } from "styled-components";

export default styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;

  ${(props) =>
    props.weather === "day" &&
    css`
      background: linear-gradient(180deg, #04befe 100%, #68e0cf 100%);
      background-size: 100% 100%;
    `}

  ${(props) =>
    props.weather === "night" &&
    css`
      background: linear-gradient(180deg, #2a5298 100%, #1e3c72 100%);
      background-size: 100% 100%;
    `}
    ${(props) =>
    props.weather === "sunrise" &&
    css`
      background: linear-gradient(120deg, #f6d365 100%, #fda085 100%);
      background-size: 100% 100%;
    `}
`;
