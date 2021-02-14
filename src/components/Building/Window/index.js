import StyledWindow from "./styled";

function Window(props) {
  return <StyledWindow lightOn={props.lightOn} onClick={props.onClick} />;
}

export default Window;
