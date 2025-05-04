import Link from 'next/link';
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen px-4">
      <h1 className="text-6xl font-bold">FodaCerta</h1>
      <p className="mt-4 text-xl">O copiloto de IA pra dominar o flerte online</p>
      <div className="mt-6 space-x-4">
        <Link href="/login" className="btn">Login</Link>
        <Link href="/register" className="btn btn-primary">Cadastre-se</Link>
      </div>
    </main>
  );
}
