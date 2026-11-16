import { Router } from "express";
import marketplaceController from "../controllers/marketplaceController.js";

const router = Router();

router.get("/desenvolvedores", (req, res, next) =>
  marketplaceController.listarDesenvolvedores(req, res, next)
);

router.get("/categorias", (req, res, next) =>
  marketplaceController.listarCategorias(req, res, next)
);

router.get("/servicos", (req, res, next) =>
  marketplaceController.listarServicos(req, res, next)
);

router.get("/projetos", (req, res, next) =>
  marketplaceController.listarProjetos(req, res, next)
);

export default router;
