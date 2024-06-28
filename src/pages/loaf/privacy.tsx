import type { NextPage } from "next";
import Head from "next/head";

const Privacy: NextPage = () => {
  return (
    <div className="dark:text-white antialiased bg-ThemeDark bg-auto min-h-screen">
      <Head>
        <title>Privacy Policy - Loaf</title>
      </Head>
      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold">Privacy Policy for Loaf Discord Bot</h1>
        <p>Effective date: June 28, 2024</p>

        <h2 className="text-2xl font-bold mt-4">1. Introduction</h2>
        <p>
          Welcome to Loaf! This Privacy Policy outlines how we collect, use, and protect your data when you use our Discord bot.
        </p>

        <h2 className="text-2xl font-bold mt-4">2. Data Collection</h2>
        <p>We collect the following data to provide the best experience:</p>
        <ul className="list-disc ml-8">
          <li>User ID and username</li>
          <li>Server ID and server name</li>
          <li>Messages and interactions for functionality like leveling and game stats</li>
        </ul>

        <h2 className="text-2xl font-bold mt-4">3. Use of Data</h2>
        <p>
          We use your data to:
        </p>
        <ul className="list-disc ml-8">
          <li>Track user levels and experience points</li>
          <li>Provide game statistics and achievements</li>
          <li>Enhance user interactions and provide customized features</li>
        </ul>

        <h2 className="text-2xl font-bold mt-4">4. Data Protection</h2>
        <p>
          We implement industry-standard security measures to protect your data. However, no method of transmission over the Internet or electronic storage is 100% secure.
        </p>

        <h2 className="text-2xl font-bold mt-4">5. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
        </p>

        <h2 className="text-2xl font-bold mt-4">6. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact the Bot Developer on Discord on the support server.
        </p>
      </main>
    </div>
  );
};

export default Privacy;
