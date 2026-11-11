import { carregarAmbiente } from './config/ambiente.js';

const config = carregarAmbiente('.env');

const { app } = await import('./app.js');
const { criarPool } = await import('./config/database.js');

const pool = criarPool();
const porta = config.porta || 3000;

async function iniciarServidor() {
    try {
        await pool.query('SELECT 1');

        console.log('Banco de dados conectado com sucesso!');

        app.listen(porta, () => {
            console.log(`Servidor rodando em http://localhost:${porta}`);
        });

    } catch (erro) {
        console.error('Erro ao conectar ao banco:', erro.message);
        process.exit(1);
    }
}

iniciarServidor();
