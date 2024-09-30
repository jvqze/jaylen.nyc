import Head from "next/head";

import type { NextPage } from "next";

const TermsOfService: NextPage = () => {
    return (
        <div className="min-h-screen bg-ThemeDark bg-auto antialiased dark:text-white">
            <Head>
                <title>Terms of Service - Loaf</title>
            </Head>
            <main className="container mx-auto p-4">
                <h1 className="text-3xl font-bold">Terms of Service for Loaf Discord Bot</h1>

                <h2 className="mt-4 text-2xl font-bold">1. Introduction</h2>
                <p>
                    Welcome to Loaf! By using our Discord bot, you agree to comply with and be bound
                    by the following terms and conditions.
                </p>

                <h2 className="mt-4 text-2xl font-bold">2. User Responsibilities</h2>
                <p>
                    <strong>Respect Others:</strong> No harassment, discrimination, or hate speech.
                </p>
                <p>
                    <strong>No Spamming:</strong> Avoid spamming commands or messages.
                </p>
                <p>
                    <strong>Follow Discord's Terms of Service:</strong> Ensure you comply with
                    Discord's ToS at all times.
                </p>
                <p>
                    <strong>No Exploitation:</strong> Users may{" "}
                    <strong className="text-red-500">NOT</strong> exploit the bot in any way
                    possible.
                </p>

                <h2 className="mt-4 text-2xl font-bold">3. Data Collection</h2>
                <p>We collect user data to provide better services. This includes:</p>
                <ul className="ml-8 list-disc">
                    <li>User ID and username</li>
                    <li>Server ID and server name</li>
                    <li>Messages and interactions for features like leveling and game stats</li>
                </ul>

                <h2 className="mt-4 text-2xl font-bold">4. Use of Data</h2>
                <p>Your data is used to:</p>
                <ul className="ml-8 list-disc">
                    <li>Track user levels and experience points</li>
                    <li>Provide game statistics and achievements</li>
                    <li>Enhance user interactions and offer customized features</li>
                </ul>

                <h2 className="mt-4 text-2xl font-bold">5. Data Protection</h2>
                <p>
                    We implement industry-standard security measures to protect your data. However,
                    no method of transmission over the Internet or electronic storage is 100%
                    secure.
                </p>

                <h2 className="mt-4 text-2xl font-bold">6. Violations and Blacklisting</h2>
                <p>
                    If you break any of these terms, you may be{" "}
                    <strong className="text-red-500">blacklisted</strong> from using the bot. Being{" "}
                    <strong className="text-red-500">blacklisted</strong> means you will no longer
                    be able to use Loaf, and your user data will be removed from our database.
                </p>

                <h2 className="mt-4 text-2xl font-bold">7. Changes to Terms</h2>
                <p>
                    We may update these terms from time to time. Changes will be posted on this
                    page.
                </p>

                <h2 className="mt-4 text-2xl font-bold">8. Contact Us</h2>
                <p>
                    If you have any questions about this Privacy Policy, please contact the Bot
                    Developer on Discord on the support server.
                </p>
            </main>
        </div>
    );
};

export default TermsOfService;
