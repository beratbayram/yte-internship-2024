interface CellProps {
  className: string;
  setIslightGreen: (value: boolean) => void;
  setIslightYellow: (value: boolean) => void;
  setIslightBlue: (value: boolean) => void;
}

export function Cell({
  className,
  setIslightGreen,
  setIslightBlue,
  setIslightYellow,
}: CellProps) {
  function changeColor() {
    if (className.includes("green"))
      setIslightGreen(className === "green" ? true : false);
    else if (className.includes("yellow"))
      setIslightYellow(className === "yellow" ? true : false);
    else setIslightBlue(className === "" ? true : false);
  }

  return <div onClick={changeColor} className={className}></div>;
}
