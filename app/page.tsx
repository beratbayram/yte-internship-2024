import Image from "next/image";
import nextImg from "./next.svg";

export default function App() {
  return (
    <main>
      hello
      <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
      <Image src={nextImg} alt="Vercel Logo" width={72} height={16} />
    </main>
  );
}
