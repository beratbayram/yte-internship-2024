"use client";

import "./page.css";

interface Props {
  classes: [string, string, string];
}

function Row({ classes }: Props) {
  // array destructing örneği
  // (classes[0] da kullanılabilir)
  const [classes1, classes2, classes3] = classes;

  function yellColor(color: string) {
    if (color === "") return;
    alert(`The color is ${color}`);
  }

  return (
    <div className="row">
      <div onClick={() => yellColor(classes1)} className={classes1}></div>
      <div onClick={() => yellColor(classes2)} className={classes2}></div>
      <div onClick={() => yellColor(classes3)} className={classes3}></div>
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
