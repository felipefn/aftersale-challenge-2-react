import StyledBuildingSide from "./styled";
import BuildingRoofSide from "./BuildingRoofSide"
import BuildingBodySide from "./BuildingBodySide"


function BuildingSide() {
  return (
    <StyledBuildingSide>
      <BuildingRoofSide/>
      <BuildingBodySide/>     
    </StyledBuildingSide>
  );
}

export default BuildingSide;