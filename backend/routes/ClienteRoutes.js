import { Router } from 'express';
import * as ClienteController from '../controllers/ClienteController.js';

const router = Router();

router.get('/desenvolvedores', ClienteController.listarDesenvolvedores);
router.get('/categorias', ClienteController.listarCategorias);
router.get('/servicos', ClienteController.listarServicos);
router.get('/projetos', ClienteController.listarProjetos);

export default router;
