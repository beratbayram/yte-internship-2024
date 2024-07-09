"use client";

import { useState } from "react";
import "./page.css";

interface Props {
  classes: [string, string, string];
}

const COLORS = ["green", "yellow", ""];

interface CellProps {
  defaultClassName: string;
}

function Cell({ defaultClassName }: CellProps) {

  const defaultClassNameNumber = COLORS.indexOf(defaultClassName);

  const [color, setColor] = useState(defaultClassNameNumber);

  function changeColor() {
    setColor((color + 1) % COLORS.length)
  }

  return <div onClick={changeColor} className={COLORS[color]}></div>;
}

function Row({ classes }: Props) {
  // array destructing örneği
  // (classes[0] da kullanılabilir)
  const [classes1, classes2, classes3] = classes;

  return (
    <div className="row">
      <Cell defaultClassName={classes1} />
      <Cell defaultClassName={classes2} />
      <Cell defaultClassName={classes3} />
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <div>
        <Row classes={["green", "", ""]} />
        <Row classes={["", "yellow", ""]} />
        <Row classes={["", "", "green"]} />
      </div>
    </main>
  );
}
