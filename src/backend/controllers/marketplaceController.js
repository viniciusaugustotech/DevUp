import marketplaceService from "../services/marketplaceService.js";

class MarketplaceController {
  async listarDesenvolvedores(req, res, next) {
    try {
      const { busca } = req.query;

      const desenvolvedores = busca
        ? await marketplaceService.buscarDesenvolvedores(busca)
        : await marketplaceService.listarDesenvolvedores();

      return res.status(200).json(desenvolvedores);
    } catch (error) {
      next(error);
    }
  }

  async listarCategorias(req, res, next) {
    try {
      const categorias = await marketplaceService.listarCategorias();

      return res.status(200).json(categorias);
    } catch (error) {
      next(error);
    }
  }

  async listarServicos(req, res, next) {
    try {
      const { busca } = req.query;

      const servicos = busca
        ? await marketplaceService.buscarServicos(busca)
        : await marketplaceService.listarServicos();

      return res.status(200).json(servicos);
    } catch (error) {
      next(error);
    }
  }

  async listarProjetos(req, res, next) {
    try {
      const projetos = await marketplaceService.listarProjetos();

      return res.status(200).json(projetos);
    } catch (error) {
      next(error);
    }
  }
}

export default new MarketplaceController();
