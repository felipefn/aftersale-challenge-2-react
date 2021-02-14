import StyledBuildingFront from "./styled";
import BuildingBodyFront from "./BuildingBodyFront";
import BuildingRoofFront from "./BuildingRoofFront";

function BuildingFront() {
  return (
    <StyledBuildingFront>
      <BuildingBodyFront></BuildingBodyFront>
      <BuildingRoofFront></BuildingRoofFront>
    </StyledBuildingFront>
  );
}

export default BuildingFront;
