
import React from "react";
import "./cliente.css";

function Cliente() {
  return (
    <>
      {/* NAVBAR */}
      <header className="client-navbar">
        <div className="container nav-inner">
          <a href="index.html" className="nav-brand" aria-label="DevUp Home">
            <img
              src="logo.png"
              alt="DevUp"
              className="nav-logo-img"
            />
          </a>

          <div className="search-wrapper">
            <div className="search-box">
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
              />
            </div>
          </div>

          <nav className="nav-actions">
            <a href="#categorias" className="nav-item">
              Categorias
            </a>

            <a href="#blog" className="nav-item">
              Blog
            </a>

            <a
              href="conta.html"
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

            <button className="menu-toggle-btn" aria-label="Abrir menu">
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
          </nav>
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
              <a href="#" className="btn-vendedor">
                Torne-se um Vendedor
              </a>

              <a href="#" className="btn-comprar">
                Comprar
              </a>
            </div>
          </div>

          <div className="hero-right">
            <div className="hero-card-img">
              <img
                src="hero_cliente.png"
                alt="Desenvolvedores escalando gráfico de crescimento"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 
        Continue aqui com as demais seções do HTML,
        seguindo as mesmas conversões para JSX.
      */}

    </>
  );
}

export default Cliente;
