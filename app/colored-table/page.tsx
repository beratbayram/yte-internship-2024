"use client";

import { useState } from "react";
import "./page.css";
import { Row } from "./Row";

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
