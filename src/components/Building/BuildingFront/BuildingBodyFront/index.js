import StyledBuildingBodyFront from "./styled";
import Window from "../../Window";
import { useState } from "react";

function BuildingBodyFront() {
  const windowsLength = 12;

  const windowsList = Array.from({
    length: windowsLength,
  });

  const [lightOnWindows, setLightOnWindows] = useState([]);

  function setLightOnWindow(index) {
    if (lightOnWindows.includes(index)) {
      const lightOnWindowsFiltered = lightOnWindows.filter((i) => i !== index);
      setLightOnWindows(lightOnWindowsFiltered);
    } else {
      setLightOnWindows([...lightOnWindows, index]);
    }
  }

  return (
    <StyledBuildingBodyFront>
      {windowsList.map((_, index) => (
        <Window
          onClick={() => setLightOnWindow(index)}
          lightOn={lightOnWindows.includes(index)}
        />
      ))}
    </StyledBuildingBodyFront>
  );
}

export default BuildingBodyFront;
