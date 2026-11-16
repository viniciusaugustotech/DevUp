'use client';

import Link from 'next/link';
import "./conta.css";

export default function ContaPage() {
  return (
    <div className="bg-[#0f111a] min-h-screen text-gray-100 font-sans">
      {/* ==========================================================================
           NAVBAR 
           ========================================================================== */}
      <header class="client-navbar">
        <div class="container nav-inner">
          <Link href="/cliente" class="nav-brand" aria-label="DevUp Marketplace">
            <img src="/logo.png" alt="DevUp" class="nav-logo-img" />
          </Link>

          <div class="search-wrapper">
            <div class="search-box">
              <svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <input type="text" class="search-input" placeholder="Pesquise por Anúncio, Usuário ou Categoria" />
            </div>
          </div>

          <nav class="nav-actions">
            <Link href="/cliente#categorias" class="nav-item">Categorias</Link>
            <Link href="/blog" class="nav-item">Blog</Link>
            <Link href="/conta" class="avatar-circle" aria-label="Minha Conta">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </Link>
            <button class="menu-toggle-btn" aria-label="Abrir menu">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </nav>
        </div>
      </header>

      {/* ==========================================================================
           COVER BANNER 
           ========================================================================== */}
      <div class="profile-cover" role="img"></div>

      {/* ==========================================================================
           PROFILE BODY
           ========================================================================== */}
      <div class="profile-body">
        {/* Avatar + Action Buttons */}
        <div class="profile-header-wrapper">
          <div class="profile-avatar-area container">
            {/* Avatar Quadrado com Iniciais */}
            <div class="profile-avatar" aria-label="Avatar de Carlos Melo">
              CM
            </div>

            {/* Botões: Editar Perfil + Configurações */}
            <div class="profile-actions">
              <Link href="#" class="btn-edit-profile" id="btn-editar-perfil">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
                </svg>
                Editar Perfil
              </Link>
              <Link href="#" class="btn-settings" aria-label="Configurações" id="btn-configuracoes">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* ==========================================================================
             PROFILE INFO
             ========================================================================== */}
        <div class="profile-info container">
          {/* Nome */}
          <h1 class="profile-name">Carlos Melo</h1>

          {/* Username + Localização */}
          <div class="profile-meta">
            <span>@carlosmelo1243</span>
            <span class="dot">·</span>
            <span>São Paulo, Brasil</span>
          </div>

          {/* Selos: Verificado + Indicado */}
          <div class="badges-row">
            <span class="badge-verificado">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Verificado
            </span>
            <span class="badge-indicado">
              <span class="badge-star">★</span>
              Indicado
            </span>
          </div>

          {/* Bio */}
          <p class="profile-bio">
            Desenvolvedor Fullstack apaixonado por criar soluções elegantes. Especialista em Java, Spring Boot e React. Mais de 5 anos de experiência construindo produtos do zero.
          </p>

          {/* Links */}
          <div class="profile-links">
            <a href="https://carlosmelo.com.br" class="profile-link-item" target="_blank" rel="noopener noreferrer">
              <svg class="link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
              </svg>
              carlosmelo.com.br
            </a>
            <a href="https://github.com/carlosml" class="profile-link-item" target="_blank" rel="noopener noreferrer">
              <svg class="link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
              github/carlosml
            </a>
            <a href="https://carlosmelo.com.br" class="profile-link-item" target="_blank" rel="noopener noreferrer">
              <svg class="link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
              carlosmelo.com.br
            </a>
          </div>

          {/* Membro desde */}
          <p class="profile-since">
            <svg class="link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
              <line x1="16" x2="16" y1="2" y2="6" />
              <line x1="8" x2="8" y1="2" y2="6" />
              <line x1="3" x2="21" y1="10" y2="10" />
            </svg>
            Membro desde Abril 2026
          </p>

          {/* Skills Tags */}
          <div class="skills-row" role="list">
            {/* Adicione suas tags aqui se necessário */}
          </div>
        </div>
      </div>
    </div>
  );
}
