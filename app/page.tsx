export default function Home() {
  const fechaBuild = process.env.FECHA_BUILD!;

  const fechaLocal = new Intl.DateTimeFormat("es-ES", {
    dateStyle: "long",
    timeStyle: "short",
    timeZone: "Europe/Madrid",
  }).format(new Date(fechaBuild));

  return (
    <main className="mx-auto flex min-h-screen max-w-xl flex-col justify-center px-6 py-12">
      <h1 className="text-3xl font-bold">Hola, Workers</h1>
      <p className="mt-4 text-xl">Miguel Ángel Pérez Rodríguez</p>
      <p className="mt-6">
        Compilado el <time dateTime={fechaBuild}>{fechaLocal}</time>
      </p>
    </main>
  );
}