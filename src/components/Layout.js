import Link from "next/link";
import { useState, useEffect } from "react";
import Head from "next/head";

export default function Layout({ children, title = "Next.js App" }) {
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle mounting to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="A modern Next.js application" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen flex flex-col">
        <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold">
              NextJS App
            </Link>

            {/* Mobile menu button */}
            <button 
              className="md:hidden text-white focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>

            {/* Desktop navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="hover:text-blue-200 transition-colors duration-200">
                Home
              </Link>
              <Link href="/about" className="hover:text-blue-200 transition-colors duration-200">
                About
              </Link>
              <Link href="https://github.com/yourusername/nextjs-app" target="_blank" className="hover:text-blue-200 transition-colors duration-200">
                GitHub
              </Link>
            </nav>
          </div>

          {/* Mobile navigation */}
          {isMenuOpen && (
            <nav className="md:hidden bg-blue-700 px-4 py-2">
              <div className="flex flex-col space-y-3">
                <Link 
                  href="/" 
                  className="hover:text-blue-200 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  href="/about" 
                  className="hover:text-blue-200 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <Link 
                  href="https://github.com/yourusername/nextjs-app" 
                  target="_blank" 
                  className="hover:text-blue-200 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  GitHub
                </Link>
              </div>
            </nav>
          )}
        </header>

        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>

        <footer className="bg-gray-800 text-white py-6">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; {new Date().getFullYear()} NextJS App. Built with Next.js.</p>
          </div>
        </footer>
      </div>
    </>
  );
}
