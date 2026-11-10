import pg from 'pg';

export function criarPool() {
    return new pg.Pool({
        user: 'postgres',
        password: process.env.DB_PASS,
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT || '6543', 10),
        database: process.env.DB_NAME,
        options: '--project=oeamqbdkxwvkrhqdbqko',
        
        ssl: {
            rejectUnauthorized: false
        }
    });
}
