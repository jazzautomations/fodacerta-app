import './globals.css';
export const metadata = { title: 'FodaCerta', description: 'Seu copiloto de IA para flerte online' };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-gray-50 text-gray-900 antialiased">{children}</body>
    </html>
  );
}
