import { Router } from 'express';

const router = Router();

router.get('/', async(res, req, next) => {
    res.status(200).json({
        mensagem: "Lista de toods os usuários",
        usuarios: []
    })
})

router.post('/', async (res, req, next) => {
const [nome, email] = res.body;

    res.status(200).json({
        mensagem: `Usuário ${nome} criado com sucesso!`
    })
})

export default router;