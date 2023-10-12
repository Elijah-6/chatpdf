import type { Config } from "drizzle-kit";
import * as dotenv from 'dotenv';

//configure dotenv to locate .env
dotenv.config({path:".env"});

export default {
    driver:"pg",
    schema: "./src/lib/db/schema.ts",
    dbCredentials: {
        connectionString: process.env.DATABASE_URL!
    }
} satisfies Config;