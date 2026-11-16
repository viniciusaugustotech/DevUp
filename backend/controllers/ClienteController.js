import * as ClienteService from '../services/ClienteService.js';

function responderErro(erro, res, next) {
  if (erro instanceof TypeError) {
    return res.status(422).json({ sucesso: false, erro: erro.message });
  }
  if (erro.status === 409) {
    return res.status(409).json({ sucesso: false, erro: erro.message });
  }
  if (erro.status === 401) {
    return res.status(401).json({ sucesso: false, erro: erro.message });
  }
  return next(erro);
}

export async function listarDesenvolvedores(req, res, next) {
  try {
    const { busca } = req.query;

    const desenvolvedores = busca
      ? await marketplaceService.buscarDesenvolvedores(busca)
      : await marketplaceService.listarDesenvolvedores();

    return res.status(200).json({ sucesso: true, dados: desenvolvedores });
  } catch (erro) {
    return responderErro(erro, res, next);
  }
}

export async function listarCategorias(req, res, next) {
  try {
    const categorias = await marketplaceService.listarCategorias();
    return res.status(200).json({ sucesso: true, dados: categorias });
  } catch (erro) {
    return responderErro(erro, res, next);
  }
}

export async function listarServicos(req, res, next) {
  try {
    const { busca } = req.query;

    const servicos = busca
      ? await marketplaceService.buscarServicos(busca)
      : await marketplaceService.listarServicos();

    return res.status(200).json({ sucesso: true, dados: servicos });
  } catch (erro) {
    return responderErro(erro, res, next);
  }
}

export async function listarProjetos(req, res, next) {
  try {
    const projetos = await marketplaceService.listarProjetos();
    return res.status(200).json({ sucesso: true, dados: projetos });
  } catch (erro) {
    return responderErro(erro, res, next);
  }
}
