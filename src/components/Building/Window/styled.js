import styled, { css } from "styled-components";

export default styled.div`
  background: ${(props) => (props.lightOn ? "#ffc727" : "#263238")};
  width: 30px;
  height: 45px;
  margin: 10px;
`;
