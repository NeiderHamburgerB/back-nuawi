import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";
import env from "../environments/env";
import { join } from "path";

export const getOrmConfig = (
    customPathEntities?: string,
    synchronize = false,
) => {
    // Connection config Typeorm
    const config: PostgresConnectionOptions = {
        type: 'postgres',
        host: env.DATABASE_HOST || 'ep-floral-tree-24069623.us-east-2.aws.neon.tech',
        username: env.DATABASE_USER || "neiderhamburger99",
        password: env.DATABASE_PASSWORD || "CHrgQaNvT21S",
        database: env.DATABASE_NAME || 'nuawiDev', 
        port: Number(env.DATABASE_PORT) || 5432,
        entities: [join(__dirname, '**', '*.entity.{ts,js}'), customPathEntities],
        synchronize: synchronize,
        ssl:true
    };

    return config;
};


