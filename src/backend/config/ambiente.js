const nomesObrigatorios = ['DB_USER', 'DB_PASS', 'DB_HOST', 'DB_PORT', 'DB_NAME', 'PORT', 'JWT_SECRET', 'CORS_ORIGENS'];
// DB_PASS: Deixaremos de fora, pois ele não aceitará senha vazia(""), que é o padrão do XAMPP, por exemplo

export function carregarAmbiente(arquivoDeConfiguracao) {
  if (arquivoDeConfiguracao) {
    try {
      process.loadEnvFile(arquivoDeConfiguracao);
    } catch {
      throw new Error(`Arquivo de configuração não encontrado: ${arquivoDeConfiguracao}`);
    }
  }

  const ausentes = nomesObrigatorios.filter((nome) => {
    const valor = process.env[nome];
    return typeof valor !== 'string' || valor.trim() === '';
  });

  if (ausentes.length > 0) {
    throw new Error(`Configure no .env: ${ausentes.join(', ')}`);
  }

  return {
    banco: process.env.DATABASE_URL,
    porta: process.env.PORT,
    token: process.env.JWT_SECRET,
    portas: process.env.CORS_ORIGENS
  };
}

export function exibirDiagnostico(configuracao) {
  console.table({
    banco: process.env.DATABASE_URL,
    token: process.env.JWT_SECRET,
    portas: process.env.CORS_ORIGENS,
    projeto: 'devup',
    node: process.version,
    sistema: `${process.platform} ${process.arch}`,
    diretorio: process.cwd(),
    portaConfigurada: configuracao.porta
  });
}
