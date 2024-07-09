"use client";

import { useState } from "react";
import "./page.css";

interface CellProps {
  className: string;
  setIslightGreen: (value: boolean) => void;
  setIslightYellow: (value: boolean) => void;
  setIslightBlue: (value: boolean) => void;
}

function Cell({
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

interface RowProps {
  classes: [string, string, string];
  setIslightGreen: (value: boolean) => void;
  setIslightYellow: (value: boolean) => void;
  setIslightBlue: (value: boolean) => void;
}

function Row({
  classes,
  setIslightGreen,
  setIslightBlue,
  setIslightYellow,
}: RowProps) {
  // array destructing örneği
  // (classes[0] da kullanılabilir)
  const [classes1, classes2, classes3] = classes;

  return (
    <div className="row">
      <Cell
        setIslightBlue={setIslightBlue}
        setIslightYellow={setIslightYellow}
        setIslightGreen={setIslightGreen}
        className={classes1}
      />
      <Cell
        setIslightBlue={setIslightBlue}
        setIslightYellow={setIslightYellow}
        setIslightGreen={setIslightGreen}
        className={classes2}
      />
      <Cell
        setIslightBlue={setIslightBlue}
        setIslightYellow={setIslightYellow}
        setIslightGreen={setIslightGreen}
        className={classes3}
      />
    </div>
  );
}

export default function Home() {
  const [islightGreen, setIslightGreen] = useState(false);
  const [islightYellow, setIslightYellow] = useState(false);
  const [islightBlue, setIslightBlue] = useState(false);

  const green = islightGreen ? "lightgreen" : "green";
  const yellow = islightYellow ? "lightyellow" : "yellow";
  const blue = islightBlue ? "lightblue" : "";

  return (
    <main>
      <div>
        <Row
          setIslightBlue={setIslightBlue}
          setIslightYellow={setIslightYellow}
          setIslightGreen={setIslightGreen}
          classes={[green, blue, blue]}
        />
        <Row
          setIslightBlue={setIslightBlue}
          setIslightYellow={setIslightYellow}
          setIslightGreen={setIslightGreen}
          classes={[blue, yellow, blue]}
        />
        <Row
          setIslightBlue={setIslightBlue}
          setIslightYellow={setIslightYellow}
          setIslightGreen={setIslightGreen}
          classes={[blue, blue, green]}
        />
      </div>
    </main>
  );
}
