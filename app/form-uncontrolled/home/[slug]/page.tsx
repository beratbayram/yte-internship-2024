interface Props {
  params: {
    slug: string;
  };
  searchParams: {
    mail: string;
    pwd: string;
  };
}
export default function App({ params, searchParams }: Props) {
  return (
    <main>
      hello from {params.slug}
      <address>{searchParams.mail}</address>
      <p>{searchParams.pwd}</p>
    </main>
  );
}
