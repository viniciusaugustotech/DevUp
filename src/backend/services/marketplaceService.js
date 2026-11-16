import marketplaceModel from "../models/marketplaceModel.js";

class MarketplaceService {
  async listarDesenvolvedores() {
    return await marketplaceModel.listarDesenvolvedores();
  }

  async buscarDesenvolvedores(termo) {
    const busca = termo?.trim();

    if (!busca) {
      return this.listarDesenvolvedores();
    }

    return await marketplaceModel.buscarDesenvolvedores(busca);
  }

  async listarCategorias() {
    return await marketplaceModel.listarCategorias();
  }

  async listarServicos() {
    return await marketplaceModel.listarServicos();
  }

  async buscarServicos(termo) {
    const busca = termo?.trim();

    if (!busca) {
      return this.listarServicos();
    }

    return await marketplaceModel.buscarServicos(busca);
  }

  async listarProjetos() {
    return await marketplaceModel.listarProjetos();
  }
}

export default new MarketplaceService();
