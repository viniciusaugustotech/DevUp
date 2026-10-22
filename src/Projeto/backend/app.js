import express from 'express';
import routes from './routes/usuario';

const app = express();

app.use(express.json());

app.use('/usuarios', routes);

app.get('/', async (req, res) => {
    try {
        res.status(200).json({
        mensagem: "Funcionando corretamente!",
        status: true
    });
    }
    catch (erro) {
        res.status(500).json({
            status: false,
            mensagem: 'Erro ao conectar:',
            erro: erro.message
        });
}})

const PORTA = process.env.SERVER_PORT || 3000;

app.listen(PORTA, () => console.log(`Servidor rodando na porta ${PORTA}`));