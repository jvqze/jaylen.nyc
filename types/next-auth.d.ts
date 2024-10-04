import { DefaultSession, DefaultUser, JWT } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      discordUserId?: string;
    } & DefaultSession["user"];
  }

  interface User extends DefaultUser {
    discordUserId?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    discordUserId?: string;
  }
}