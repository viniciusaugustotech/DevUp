'use client';

import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <header className="navbar">
        <div className="nav-container">
          <Link href="#hero" className="nav-logo">
            <img src="/logo.png" alt="DevUp Logo" className="logo-img" />
          </Link>
          <nav className="nav-menu">
            <Link href="#hero" className="nav-link">Inicio</Link>
            <Link href="#feito" className="nav-link">Caracteristicas</Link>
            <Link href="#plataforma" className="nav-link">Sobre</Link>
            <Link href="#seguranca" className="nav-link">Segurança</Link>
          </nav>
          <div className="nav-action">
            <Link href="/login" className="btn-entrar">Entrar</Link>
          </div>
        </div>
      </header>

      <section id="hero" className="hero-section">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot">•</span>
            <span>Tecnologia</span>
          </div>
          <h1 className="hero-title">
            <span className="title-solid">A tecnologia</span>
            <span className="title-stroke">move o</span>
            <span className="title-mundo">MUNDO</span>
          </h1>
          <p className="hero-desc">
            Com a capacidade da tecnologia e com a criatividade humana<br />
            podemos criar projetos que nem os maiores estudiosos poderiam prever
          </p>
        </div>
      </section>

      <section id="feito" className="split-section">
        <div className="split-left">
          <div className="split-content">
            <div className="blue-pill">01 - Facilidade</div>
            <h2 className="split-title">Feito para você</h2>
            <div className="title-underline"></div>
            <p className="split-desc">
              Uma interface intuitiva, feita para você — onde tudo se explica por si só, sem abrir mão da originalidade.
            </p>
          </div>
        </div>
        <div className="split-right">
          <img src="/FN.png" alt="Código Binário" className="split-img" />
        </div>
      </section>

      <section id="plataforma" className="cards-section">
        <div className="cards-wrapper">
          <div className="section-heading">
            <h2 className="platform-title">
              <span className="text-white">Não é uma simples</span>
              <span className="text-neon-stroke">plataforma</span>
            </h2>
          </div>

          <div className="cards-grid">
            <div className="feature-card">
              <div className="card-header">
                <span className="card-number">01</span>
                <span className="card-category">Segurança</span>
              </div>
              <h3 className="card-title">Verificação</h3>
              <p className="card-text">
                Todos os desenvolvedores são verificados e analisados um por um para garantir a confiança de quem confia na DevUp.
              </p>
            </div>

            <div className="feature-card">
              <div className="card-header">
                <span className="card-number">02</span>
                <span className="card-category">Visibilidade</span>
              </div>
              <h3 className="card-title">Encontre Clientes</h3>
              <p className="card-text">
                Um lugar onde você pode divulgar seus projetos, ter uma visibilidade maior, ter novas oportunidades e crescer seu portfolio.
              </p>
            </div>

            <div className="feature-card">
              <div className="card-header">
                <span className="card-number badge-circle">03</span>
                <span className="card-category">Projetos</span>
              </div>
              <h3 className="card-title">Projetos Personalizados</h3>
              <p className="card-text">
                Onde suas ideias podem sair somente da cabeça e do papel e realmente ser executada por profissionais de qualidade e comprometimento.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="seguranca" className="security-section">
        <div className="security-container">
          <div className="security-content">
            <p className="security-eyebrow">DevUp thinking about you.</p>
            <h2 className="security-heading">
              <span className="word-black">Sua</span>
              <span className="word-outline">segurança</span>
              <span className="word-black">em</span>
              <span className="word-outline block-outline">primeiro lugar</span>
            </h2>
            <p className="security-desc">
              Uma plataforma onde sua segurança vem primeiro — todos os vendedores são verificados e aprovados pela nossa equipe, e nosso suporte está sempre à disposição para qualquer dúvida ou problema.
            </p>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-container">
          <div className="footer-top">
            <div className="footer-col brand-col">
              <h3 className="footer-brand">DevUp</h3>
              <p className="footer-tagline">Uma plataforma onde sonhos se tornam reais.</p>
            </div>

            <div className="footer-col links-col">
              <h4 className="col-title">HOME</h4>
              <ul className="footer-links">
                <li><Link href="#hero">Inicio</Link></li>
                <li><Link href="#feito">Caracteristicas</Link></li>
                <li><Link href="#plataforma">Sobre</Link></li>
                <li><Link href="#seguranca">Segurança</Link></li>
              </ul>
            </div>

            <div className="footer-col social-col">
              <h4 className="col-title">SOCIAL</h4>
              <div className="social-icons">
                <a href="mailto:contato@devup.com" className="social-circle" aria-label="Email">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </a>
                <Link href="#" className="social-circle" aria-label="Instagram">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </Link>
                <Link href="#" className="social-circle" aria-label="WhatsApp">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="footer-divider"></div>

          <div className="footer-bottom">
            <p className="copyright">© 2026 DevUp. All rights reserved.</p>
            <div className="legal-links">
              <Link href="#">Privacy</Link>
              <Link href="#">Terms</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
