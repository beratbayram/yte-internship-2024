import { redirect } from "next/navigation";

export default function Form({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return redirect("/form-uncontrolled/login");
}