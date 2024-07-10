export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header>YTE'ye hoşgeldiniz</header>
      <main>{children}</main>
    </>
  );
}
