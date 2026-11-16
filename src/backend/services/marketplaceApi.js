const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/api";

async function requisicao(endpoint) {
  const response = await fetch(`${API_URL}${endpoint}`);

  if (!response.ok) {
    throw new Error(`Erro na API: ${response.status}`);
  }

  return response.json();
}

export const marketplaceApi = {
  listarDesenvolvedores: () =>
    requisicao("/marketplace/desenvolvedores"),

  buscarDesenvolvedores: (termo) =>
    requisicao(`/marketplace/desenvolvedores?busca=${encodeURIComponent(termo)}`),

  listarCategorias: () =>
    requisicao("/marketplace/categorias"),

  listarServicos: () =>
    requisicao("/marketplace/servicos"),

  buscarServicos: (termo) =>
    requisicao(`/marketplace/servicos?busca=${encodeURIComponent(termo)}`),

  listarProjetos: () =>
    requisicao("/marketplace/projetos"),
};
