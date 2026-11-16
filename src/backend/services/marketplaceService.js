import * as marketplaceModel from '../models/marketplaceModel.js';

export async function listarDesenvolvedores() {
  return await marketplaceModel.listarDesenvolvedores();
}

export async function buscarDesenvolvedores(termo) {
  const busca = termo?.trim();

  if (!busca) {
    return await listarDesenvolvedores();
  }

  return await marketplaceModel.buscarDesenvolvedores(busca);
}

export async function listarCategorias() {
  return await marketplaceModel.listarCategorias();
}

export async function listarServicos() {
  return await marketplaceModel.listarServicos();
}

export async function buscarServicos(termo) {
  const busca = termo?.trim();

  if (!busca) {
    return await listarServicos();
  }

  return await marketplaceModel.buscarServicos(busca);
}

export async function listarProjetos() {
  return await marketplaceModel.listarProjetos();
}
