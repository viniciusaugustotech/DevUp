import pg from 'pg';

export function criarPool() {
  const senhaCodificada = encodeURIComponent(process.env.DB_PASS || '');
  const urlConexao = `postgresql://${process.env.DB_USER}:${senhaCodificada}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}?pgbouncer=true`;

  return new pg.Pool({
    connectionString: urlConexao,
    ssl: {
      rejectUnauthorized: false
    }
  });
}
