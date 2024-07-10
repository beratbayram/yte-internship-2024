import { Cell } from "./Cell";

interface RowProps {
  classes: [string, string, string];
}

export function Row({ classes }: RowProps) {
  // array destructing örneği
  // (classes[0] da kullanılabilir)
  const [classes1, classes2, classes3] = classes;

  return (
    <div className="row">
      <Cell className={classes1} />
      <Cell className={classes2} />
      <Cell className={classes3} />
    </div>
  );
}
