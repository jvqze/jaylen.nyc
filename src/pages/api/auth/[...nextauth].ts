import NextAuth, { NextAuthOptions } from "next-auth";
import DiscordProvider from "next-auth/providers/discord";

export const authOptions: NextAuthOptions = {
    providers: [
        DiscordProvider({
            clientId: process.env.DISCORD_CLIENT_ID as string,
            clientSecret: process.env.DISCORD_CLIENT_SECRET as string,
        }),
    ],
    callbacks: {
        async jwt({ token, account }) {
            if (account) {
                console.log("Account Data", account);
                token.discordUserId = account.providerAccountId;
            }
            return token;
        },
        async session({ session, token }) {
            console.log("Token in Session Callback", token);
            session.user.discordUserId = token.discordUserId as string;
            console.log("Session after modification", session);
            return session;
        },
    },
    secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
