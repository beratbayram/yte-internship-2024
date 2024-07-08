import "./page.css";

interface Props {
  classes: [
    string,
    string,
    string
  ]
}

function Row({classes}: Props) {
  // array destructing örneği 
  // (classes[0] da kullanılabilir)
  const [classes1, classes2, classes3] = classes;
  return (
    <div className="row">
      <div className={classes1}></div>
      <div className={classes2}></div>
      <div className={classes3}></div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <div>
        <Row classes={["green","", "",]}/>
        <Row classes={["","yellow", "",]}/>
        <Row classes={["","", "green",]}/>
      </div>
    </main>
  );
}
