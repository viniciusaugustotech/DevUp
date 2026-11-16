import { Router } from 'express';
import * as ClienteController from '../controllers/ClienteController.js';

const router = Router();

router.get('/desenvolvedores', marketplaceController.listarDesenvolvedores);
router.get('/categorias', marketplaceController.listarCategorias);
router.get('/servicos', marketplaceController.listarServicos);
router.get('/projetos', marketplaceController.listarProjetos);

export default router;
