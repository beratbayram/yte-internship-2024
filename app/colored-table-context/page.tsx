"use client";

import { useState } from "react";
import "./page.css";
import { Row } from "./Row";
import {
  SetIsLightBlueContext,
  SetIsLightGreenContext,
  SetIsLightYellowContext,
} from "./TableContexts";

export default function Home() {
  const [isLightGreen, setIsLightGreen] = useState(false);
  const [isLightYellow, setIsLightYellow] = useState(false);
  const [isLightBlue, setIsLightBlue] = useState(false);

  const green = isLightGreen ? "lightgreen" : "green";
  const yellow = isLightYellow ? "lightyellow" : "yellow";
  const blue = isLightBlue ? "lightblue" : "";

  return (
    <main>
      <SetIsLightBlueContext.Provider value={setIsLightBlue}>
        <SetIsLightGreenContext.Provider value={setIsLightGreen}>
          <SetIsLightYellowContext.Provider value={setIsLightYellow}>
            <div>
              <Row classes={[green, blue, blue]} />
              <Row classes={[blue, yellow, blue]} />
              <Row classes={[blue, blue, green]} />
            </div>
          </SetIsLightYellowContext.Provider>
        </SetIsLightGreenContext.Provider>
      </SetIsLightBlueContext.Provider>
    </main>
  );
}
