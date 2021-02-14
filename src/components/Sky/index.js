import StyledSky from "./styled";
import Building from "../Building";

function Sky(props) {
  const weather = "night";
  return (
    <StyledSky weather={weather}>
      <Building />
    </StyledSky>
  );
}

export default Sky;
