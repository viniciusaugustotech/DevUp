import sql from './db.js';
import { useEffect } from 'react'

export default conexao() {
  try {
  const teste = await sql`
     SELECT 1
  `;

  console.log('Conectado com sucesso!', resultado);
  } catch (erro) {
    console.error('Erro ao conectar:', erro.message);
    process.exitCode = 1;
  } finally {
    await sql.end();
  }
}