import React from 'react';
import Head from 'next/head';

export default function Layout({ children, title = "HCP - Hack Club Communist Party" }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Official website of the Hack Club Communist Party (satire)" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen px-4 py-8 md:px-8 max-w-7xl mx-auto">
        {children}
      </main>
      <footer className="mt-16 mb-8 text-center text-sm text-accent-11">
        <p>© 2024 HACK CLUB COMMUNIST PARTY | NOT AFFILIATED WITH ACTUAL HACK CLUB | SATIRE</p>
      </footer>
    </>
  );
}