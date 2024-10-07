import { DefaultSession, DefaultUser, JWT } from "next-auth";

declare module "next-auth" {
    interface Session {
        user: {
            email?: string;
        } & DefaultSession["user"];
    }

    interface User extends DefaultUser {
        email?: string;
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        email?: string;
    }
}
