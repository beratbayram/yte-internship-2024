import { useContext } from "react";
import { SetIsLightBlueContext, SetIsLightGreenContext, SetIsLightYellowContext } from "./TableContexts";

interface CellProps {
  className: string;
}

export function Cell({
  className,
}: CellProps) {

  const setIsLightBlue = useContext(SetIsLightBlueContext);
  const setIsLightGreen = useContext(SetIsLightGreenContext);
  const setIsLightYellow = useContext(SetIsLightYellowContext);

  function changeColor() {
    if (className.includes("green"))
      setIsLightGreen(className === "green" ? true : false);
    else if (className.includes("yellow"))
      setIsLightYellow(className === "yellow" ? true : false);
    else setIsLightBlue(className === "" ? true : false);
  }

  return <div onClick={changeColor} className={className}></div>;
}
