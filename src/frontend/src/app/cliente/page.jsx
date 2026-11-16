
import React, { useEffect, useState } from "react";
import "./cliente.css";
import { marketplaceApi } from "../services/marketplaceApi";

function Cliente() {
  const [desenvolvedores, setDesenvolvedores] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [servicos, setServicos] = useState([]);
  const [projetos, setProjetos] = useState([]);

  const [busca, setBusca] = useState("");
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState("");
  const [menuAberto, setMenuAberto] = useState(false);

  // Carregar os dados da API
  useEffect(() => {
    async function carregarDados() {
      try {
        setCarregando(true);
        setErro("");

        const [
          devs,
          cats,
          servs,
          projs
        ] = await Promise.all([
          marketplaceApi.listarDesenvolvedores(),
          marketplaceApi.listarCategorias(),
          marketplaceApi.listarServicos(),
          marketplaceApi.listarProjetos()
        ]);

        setDesenvolvedores(devs);
        setCategorias(cats);
        setServicos(servs);
        setProjetos(projs);

      } catch (error) {
        console.error("Erro ao carregar dados:", error);
        setErro("Não foi possível carregar os dados.");
      } finally {
        setCarregando(false);
      }
    }

    carregarDados();
  }, []);

  // Pesquisa na API
  async function realizarBusca(event) {
    event.preventDefault();

    const termo = busca.trim();

    try {
      setErro("");

      if (!termo) {
        const [devs, servs] = await Promise.all([
          marketplaceApi.listarDesenvolvedores(),
          marketplaceApi.listarServicos()
        ]);

        setDesenvolvedores(devs);
        setServicos(servs);
        return;
      }

      const [devs, servs] = await Promise.all([
        marketplaceApi.buscarDesenvolvedores(termo),
        marketplaceApi.buscarServicos(termo)
      ]);

      setDesenvolvedores(devs);
      setServicos(servs);

    } catch (error) {
      console.error("Erro na pesquisa:", error);
      setErro("Erro ao realizar pesquisa.");
    }
  }

  return (
    <>
      {/* NAVBAR */}
      <header className="client-navbar">
        <div className="container nav-inner">

          <a href="/" className="nav-brand" aria-label="DevUp Home">
            <img
              src="/logo.png"
              alt="DevUp"
              className="nav-logo-img"
            />
          </a>

          <div className="search-wrapper">
            <form className="search-box" onSubmit={realizarBusca}>
              <svg
                className="search-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>

              <input
                type="text"
                className="search-input"
                placeholder="Pesquise por Anúncio, Usuário ou Categoria"
                value={busca}
                onChange={(event) => setBusca(event.target.value)}
              />

              <button type="submit">
                Buscar
              </button>
            </form>
          </div>

          <nav className={`nav-actions ${menuAberto ? "menu-aberto" : ""}`}>
            <a href="#categorias" className="nav-item">
              Categorias
            </a>

            <a href="#blog" className="nav-item">
              Blog
            </a>

            <a
              href="/conta"
              className="avatar-circle"
              aria-label="Conta do Usuário"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </a>
          </nav>

          <button
            className="menu-toggle-btn"
            aria-label="Abrir menu"
            aria-expanded={menuAberto}
            onClick={() => setMenuAberto(!menuAberto)}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>

        </div>
      </header>

      {/* HERO */}
      <section className="hero-marketplace">
        <div className="container hero-grid">

          <div className="hero-left">
            <h1 className="hero-title-main">
              Compre e<br />
              <span className="text-blue">Venda</span> de<br />
              Forma <span className="text-blue">Fácil</span>
            </h1>

            <div className="hero-btn-group">
              <a href="/cadastro-vendedor" className="btn-vendedor">
                Torne-se um Vendedor
              </a>

              <a href="#servicos" className="btn-comprar">
                Comprar
              </a>
            </div>
          </div>

          <div className="hero-right">
            <div className="hero-card-img">
              <img
                src="/hero_cliente.png"
                alt="Desenvolvedores escalando gráfico de crescimento"
              />
            </div>
          </div>

        </div>
      </section>

      {/* CARREGAMENTO E ERROS */}
      {carregando && (
        <p>Carregando marketplace...</p>
      )}

      {erro && (
        <p className="mensagem-erro">{erro}</p>
      )}

      {/* CATEGORIAS */}
      <section className="marketplace-section" id="categorias">
        <div className="container">
          <h2>Categorias</h2>

          <div className="categorias-container">
            {categorias.map((categoria) => (
              <article
                className="categoria-card"
                key={categoria.id_categoria}
              >
                <h3>{categoria.nome}</h3>
              </article>
            ))}
          </div>

          {!carregando && categorias.length === 0 && (
            <p>Nenhuma categoria encontrada.</p>
          )}
        </div>
      </section>

      {/* SERVIÇOS */}
      <section className="marketplace-section" id="servicos">
        <div className="container">
          <h2>Serviços disponíveis</h2>

          <div className="servicos-container">
            {servicos.map((servico) => (
              <article
                className="servico-card"
                key={servico.id_servico}
              >
                <h3>{servico.categoria}</h3>

                <p>{servico.descricao}</p>

                <p>
                  Desenvolvedor: {servico.nome_usuario}
                </p>

                <p>
                  Preço: R$ {Number(servico.preco).toFixed(2)}
                </p>

                <p>
                  Prazo: {servico.prazo_entrega || "A combinar"}
                </p>
              </article>
            ))}
          </div>

          {!carregando && servicos.length === 0 && (
            <p>Nenhum serviço encontrado.</p>
          )}
        </div>
      </section>

      {/* DESENVOLVEDORES */}
      <section className="marketplace-section" id="desenvolvedores">
        <div className="container">
          <h2>Desenvolvedores</h2>

          <div className="desenvolvedores-container">
            {desenvolvedores.map((dev) => (
              <article
                className="desenvolvedor-card"
                key={dev.id_usuario}
              >
                <img
                  src={dev.foto_perfil || "/avatar-padrao.png"}
                  alt={dev.nome}
                  className="desenvolvedor-avatar"
                />

                <h3>{dev.nome}</h3>

                <p>{dev.area_atuacao}</p>

                <p>{dev.cargo}</p>

                <p>{dev.descricao}</p>

                <span>{dev.senioridade}</span>
              </article>
            ))}
          </div>

          {!carregando && desenvolvedores.length === 0 && (
            <p>Nenhum desenvolvedor encontrado.</p>
          )}
        </div>
      </section>

      {/* PROJETOS */}
      <section className="marketplace-section" id="projetos">
        <div className="container">
          <h2>Projetos em destaque</h2>

          <div className="projetos-container">
            {projetos.map((projeto) => (
              <article
                className="projeto-card"
                key={projeto.id_projeto}
              >
                {projeto.imagem_capa && (
                  <img
                    src={projeto.imagem_capa}
                    alt={projeto.titulo}
                    className="projeto-imagem"
                  />
                )}

                <h3>{projeto.titulo}</h3>

                <p>{projeto.descricao}</p>

                {projeto.repositorio_link && (
                  <a
                    href={projeto.repositorio_link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver repositório
                  </a>
                )}
              </article>
            ))}
          </div>

          {!carregando && projetos.length === 0 && (
            <p>Nenhum projeto encontrado.</p>
          )}
        </div>
      </section>

      {/* BLOG */}
      <section className="marketplace-section" id="blog">
        <div className="container">
          <h2>Blog DevUp</h2>
          <p>Confira as novidades da comunidade DevUp.</p>
        </div>
      </section>
    </>
  );
}

export default Cliente;
