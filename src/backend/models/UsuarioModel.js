import * as dbModule from '../config/database.js';

const pool = typeof dbModule.criarPool === 'function' ? dbModule.criarPool() : dbModule.pool;

export async function buscarPorEmail(email) {
  const resultado = await pool.query(
    'SELECT id_usuario, nome, email, senha, perfil FROM usuario WHERE email = $1',
    [email]
  );
  return resultado.rows[0] || null; 
}

export async function criar({
  nome,
  email,
  senhaHash,
  telefone,
  cpf = null,
  cnpj = null,
  perfil = 'usuario',
  nomePerfil = null,
  fotoPerfil = null
}) {
  const sql = `
    INSERT INTO usuario (
      nome,
      email,
      senha,
      telefone,
      cpf,
      cnpj,
      perfil,
      nome_perfil,
      foto_perfil
    )
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
    RETURNING
      id_usuario AS id,
      nome,
      email,
      telefone,
      cpf,
      cnpj,
      perfil,
      nome_perfil,
      foto_perfil,
      data_cadastro
  `;

  const resultado = await pool.query(sql, [
    nome,
    email,
    senhaHash,
    telefone,
    cpf,
    cnpj,
    perfil,
    nomePerfil,
    fotoPerfil
  ]);

  return resultado.rows[0];
}