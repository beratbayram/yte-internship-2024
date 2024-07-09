"use client";

import { useState } from "react";
import "./page.css";

interface Props {
  classes: [string, string, string];
}

const COLORS = ["green", "yellow", ""];

interface CellProps {
  defaultClassName: string;
  setIslightGreen: (value: boolean) => void;
}

function Cell({ defaultClassName, setIslightGreen }: CellProps) {

  function changeColor() {
    setIslightGreen(defaultClassName === "green" ? true : false)
  }

  return <div onClick={changeColor} className={defaultClassName}></div>;
}

interface RowProps {
  classes: [string, string, string];
  setIslightGreen: (value: boolean) => void;
}

function Row({ classes, setIslightGreen }: RowProps) {
  // array destructing örneği
  // (classes[0] da kullanılabilir)
  const [classes1, classes2, classes3] = classes;

  return (
    <div className="row">
      <Cell setIslightGreen={setIslightGreen} defaultClassName={classes1} />
      <Cell setIslightGreen={setIslightGreen} defaultClassName={classes2} />
      <Cell setIslightGreen={setIslightGreen} defaultClassName={classes3} />
    </div>
  );
}

export default function Home() {

  const [islightGreen, setIslightGreen] = useState(false);

  const green = islightGreen ? "lightgreen" : "green";

  return (
    <main>
      <div>
        <Row setIslightGreen={setIslightGreen} classes={[green, "", ""]} />
        <Row setIslightGreen={setIslightGreen} classes={["", "yellow", ""]} />
        <Row setIslightGreen={setIslightGreen} classes={["", "", green]} />
      </div>
    </main>
  );
}
