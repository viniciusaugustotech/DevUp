
import pg from 'pg';

export function criarPool() {
  return new pg.Pool({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    ssl: {
      rejectUnauthorized: false
    }
  });
}