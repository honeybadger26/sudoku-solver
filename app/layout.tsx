import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Sudoku Solver',
  description: 'Solve Sudoku puzzles',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-mono bg-slate-900 text-slate-300">
        {children}
      </body>
    </html>
  );
}
