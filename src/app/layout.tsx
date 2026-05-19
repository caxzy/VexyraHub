import type { Metadata } from 'next';
import './globals.css';
import Navbar from './components/Navbar';

export const metadata: Metadata = {
  title: 'LyzernHub - Your Megthread for optimization.',
  description: 'dev_build-TestDescription.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#060606] text-white antialiased min-h-screen relative font-sans">
        <Navbar />
        <main className="pt-28 pb-10 px-6">
          {children}
        </main>
      </body>
    </html>
  );
}