import * as dbModule from '../config/database.js';

const pool = typeof dbModule.criarPool === 'function' ? dbModule.criarPool() : dbModule.pool;

export async function buscarPorEmail(email) {
  const resultado = await pool.query(
    'SELECT id, nome, email, senha_hash, perfil FROM usuario WHERE email = $1',
    [email]
  );
  return resultado.rows[0] || null; 
}

export async function criar({ nome, email, senhaHash, perfil = 'usuario' }) {
  const sql = 'INSERT INTO usuario (nome, email, senha_hash, perfil) VALUES ($1, $2, $3, $4) RETURNING id';
  const resultado = await pool.query(sql, [nome, email, senhaHash, perfil]);
  
  return {
    id: resultado.rows[0].id,
    nome,
    email,
    perfil
  };
}
