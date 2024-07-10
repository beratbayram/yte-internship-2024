import { Cell } from "./Cell";

interface RowProps {
  classes: [string, string, string];
  setIslightGreen: (value: boolean) => void;
  setIslightYellow: (value: boolean) => void;
  setIslightBlue: (value: boolean) => void;
}

export function Row({
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
