import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import * as UsuarioModel from '../models/UsuarioModel.js';

const REGEX_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const jwtSecret = process.env.JWT_SECRET || 'chave-padrao-desenvolvimento';


export async function registrar({
  nome,
  email,
  senha,
  telefone,
  cpf = null,
  cnpj = null,
  nomePerfil = null,
  fotoPerfil = null
} = {}) {
  const nomeLimpo = typeof nome === 'string' ? nome.trim() : '';
  const emailLimpo = typeof email === 'string'
    ? email.trim().toLowerCase()
    : '';

  const telefoneLimpo = typeof telefone === 'string'
    ? telefone.trim()
    : '';

  if (nomeLimpo.length < 3) {
    throw new TypeError('Nome deve ter no mínimo 3 caracteres.');
  }

  if (!REGEX_EMAIL.test(emailLimpo)) {
    throw new TypeError('Informe um e-mail válido.');
  }

  if (!telefoneLimpo || telefoneLimpo.length > 15) {
    throw new TypeError('Informe um telefone válido com até 15 caracteres.');
  }

  if (
    typeof senha !== 'string' ||
    senha.length < 8 ||
    !/[a-z]/.test(senha) ||
    !/[A-Z]/.test(senha) ||
    !/\d/.test(senha) ||
    !/[^A-Za-z0-9]/.test(senha)
  ) {
    throw new TypeError(
      'A senha deve ter no mínimo 8 caracteres, contendo maiúscula, minúscula, número e símbolo.'
    );
  }

  const usuarioExistente = await UsuarioModel.buscarPorEmail(emailLimpo);

  if (usuarioExistente) {
    const erro = new Error('E-mail já cadastrado.');
    erro.status = 409;
    throw erro;
  }

  const senhaHash = await bcrypt.hash(senha, 10);

  return await UsuarioModel.criar({
    nome: nomeLimpo,
    email: emailLimpo,
    senhaHash,
    telefone: telefoneLimpo,
    cpf,
    cnpj,
    perfil: 'usuario',
    nomePerfil,
    fotoPerfil
  });
}

export async function login({ email, senha } = {}) {
  const emailLimpo = typeof email === 'string'
    ? email.trim().toLowerCase()
    : '';

  const usuario = REGEX_EMAIL.test(emailLimpo)
    ? await UsuarioModel.buscarPorEmail(emailLimpo)
    : null;

    console.log('LOGIN DEBUG:', {
  emailEncontrado: usuario,
  senhaRecebida: typeof senha,
  senhaExisteNoBanco: !!usuario?.senha,
  hashValido: usuario?.senha?.startsWith('$2'),
  tamanhoHash: usuario?.senha?.length
});


  // const senhaValida = usuario && typeof usuario.senha === 'string'
  //   ? await bcrypt.compare(senha || '', usuario.senha)
  //   : false;

    const senhaValida = await bcrypt.compare(senha, usuario.senha);

console.log('SENHA CORRESPONDE AO HASH:', senhaValida);

  if (!usuario || !senhaValida) {
    const erro = new Error('Credenciais inválidas.');
    erro.status = 401;
    throw erro;
  }

  const token = jwt.sign(
    { perfil: usuario.perfil },
    jwtSecret,
    { subject: String(usuario.id), expiresIn: '2h' }
  );

  return {
    token,
    tipo: 'Bearer',
    expiraEm: '2h',
    usuario: {
      id: usuario.id,
      nome: usuario.nome,
      perfil: usuario.perfil
    }
  };
}