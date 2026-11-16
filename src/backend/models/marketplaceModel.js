
import db from "../config/database.js";

const marketplaceModel = {

  // ==========================================
  // 1. LISTAR DESENVOLVEDORES
  // ==========================================
  async listarDesenvolvedores() {
    const query = `
      SELECT
        u.id_usuario,
        u.nome,
        u.foto_perfil,
        u.email,

        pp.area_atuacao,
        pp.empresa,
        pp.cargo,
        pp.descricao,
        pp.biografia,
        pp.senioridade,

        COALESCE(
          (
            SELECT JSON_AGG(
              JSON_BUILD_OBJECT(
                'id_tecnologia', t.id_tecnologia,
                'nome', t.nome
              )
              ORDER BY t.nome
            )
            FROM usuario_tecnologia ut
            INNER JOIN tecnologia t
              ON t.id_tecnologia = ut.id_tecnologia
            WHERE ut.id_usuario = u.id_usuario
          ),
          '[]'::json
        ) AS tecnologias,

        (
          SELECT COUNT(*)
          FROM projeto p
          WHERE p.id_usuario = u.id_usuario
            AND p.visibilidade = 'publico'
        ) AS total_projetos,

        (
          SELECT COUNT(*)
          FROM servico s
          WHERE s.id_usuario = u.id_usuario
            AND s.disponibilidade = TRUE
        ) AS total_servicos

      FROM usuario u

      INNER JOIN perfil_profissional pp
        ON pp.id_usuario = u.id_usuario

      WHERE pp.area_atuacao IS NOT NULL

      ORDER BY u.data_cadastro DESC;
    `;

    const resultado = await db.query(query);

    return resultado.rows;
  },


  // ==========================================
  // 2. LISTAR CATEGORIAS
  // ==========================================
  async listarCategorias() {
    const query = `
      SELECT
        c.id_categoria,
        c.nome,
        c.data_hora,

        (
          SELECT COUNT(*)
          FROM projeto_categoria pc
          WHERE pc.id_categoria = c.id_categoria
        ) AS total_projetos,

        (
          SELECT COUNT(*)
          FROM postagem_categoria pcat
          WHERE pcat.id_categoria = c.id_categoria
        ) AS total_postagens

      FROM categoria c

      ORDER BY c.nome ASC;
    `;

    const resultado = await db.query(query);

    return resultado.rows;
  },


  // ==========================================
  // 3. LISTAR SERVIÇOS
  // ==========================================
  async listarServicos() {
    const query = `
      SELECT
        s.id_servico,
        s.categoria,
        s.descricao,
        s.prazo_entrega,
        s.tipo_cobranca,
        s.preco,
        s.disponibilidade,
        s.data_hora,

        u.id_usuario,
        u.nome AS nome_desenvolvedor,
        u.foto_perfil,

        pp.area_atuacao,
        pp.senioridade,
        pp.biografia,

        COALESCE(
          (
            SELECT JSON_AGG(
              JSON_BUILD_OBJECT(
                'id_tecnologia', t.id_tecnologia,
                'nome', t.nome
              )
              ORDER BY t.nome
            )
            FROM servico_tecnologia st
            INNER JOIN tecnologia t
              ON t.id_tecnologia = st.id_tecnologia
            WHERE st.id_servico = s.id_servico
          ),
          '[]'::json
        ) AS tecnologias,

        (
          SELECT ROUND(AVG(a.nota)::numeric, 1)
          FROM avaliacoes a
          WHERE a.id_servico = s.id_servico
        ) AS media_avaliacoes,

        (
          SELECT COUNT(*)
          FROM avaliacoes a
          WHERE a.id_servico = s.id_servico
        ) AS total_avaliacoes

      FROM servico s

      INNER JOIN usuario u
        ON u.id_usuario = s.id_usuario

      LEFT JOIN perfil_profissional pp
        ON pp.id_usuario = u.id_usuario

      WHERE s.disponibilidade = TRUE

      ORDER BY s.data_hora DESC;
    `;

    const resultado = await db.query(query);

    return resultado.rows;
  },


  // ==========================================
  // 4. LISTAR PROJETOS
  // ==========================================
  async listarProjetos() {
    const query = `
      SELECT
        p.id_projeto,
        p.titulo,
        p.descricao,
        p.repositorio_link,
        p.imagem_capa,
        p.visibilidade,
        p.data_publicacao,

        u.id_usuario,
        u.nome AS nome_desenvolvedor,
        u.foto_perfil,

        pp.area_atuacao,
        pp.senioridade,

        COALESCE(
          (
            SELECT JSON_AGG(
              JSON_BUILD_OBJECT(
                'id_tecnologia', t.id_tecnologia,
                'nome', t.nome
              )
              ORDER BY t.nome
            )
            FROM projeto_tecnologia pt
            INNER JOIN tecnologia t
              ON t.id_tecnologia = pt.id_tecnologia
            WHERE pt.id_projeto = p.id_projeto
          ),
          '[]'::json
        ) AS tecnologias,

        COALESCE(
          (
            SELECT JSON_AGG(
              JSON_BUILD_OBJECT(
                'id_categoria', c.id_categoria,
                'nome', c.nome
              )
              ORDER BY c.nome
            )
            FROM projeto_categoria pc
            INNER JOIN categoria c
              ON c.id_categoria = pc.id_categoria
            WHERE pc.id_projeto = p.id_projeto
          ),
          '[]'::json
        ) AS categorias

      FROM projeto p

      INNER JOIN usuario u
        ON u.id_usuario = p.id_usuario

      LEFT JOIN perfil_profissional pp
        ON pp.id_usuario = u.id_usuario

      WHERE p.visibilidade = 'publico'

      ORDER BY p.data_publicacao DESC;
    `;

    const resultado = await db.query(query);

    return resultado.rows;
  },


  // ==========================================
  // 5. BUSCAR DESENVOLVEDORES
  // ==========================================
  async buscarDesenvolvedores(termo) {
    const query = `
      SELECT DISTINCT
        u.id_usuario,
        u.nome,
        u.foto_perfil,

        pp.area_atuacao,
        pp.cargo,
        pp.descricao,
        pp.senioridade

      FROM usuario u

      INNER JOIN perfil_profissional pp
        ON pp.id_usuario = u.id_usuario

      LEFT JOIN usuario_tecnologia ut
        ON ut.id_usuario = u.id_usuario

      LEFT JOIN tecnologia t
        ON t.id_tecnologia = ut.id_tecnologia

      WHERE
        u.nome ILIKE $1
        OR pp.area_atuacao ILIKE $1
        OR pp.descricao ILIKE $1
        OR t.nome ILIKE $1

      ORDER BY u.nome ASC;
    `;

    const resultado = await db.query(
      query,
      [`%${termo}%`]
    );

    return resultado.rows;
  },


  // ==========================================
  // 6. BUSCAR SERVIÇOS
  // ==========================================
  async buscarServicos(termo) {
    const query = `
      SELECT
        s.id_servico,
        s.categoria,
        s.descricao,
        s.preco,
        s.prazo_entrega,
        s.tipo_cobranca,

        u.nome AS nome_desenvolvedor,
        u.foto_perfil

      FROM servico s

      INNER JOIN usuario u
        ON u.id_usuario = s.id_usuario

      WHERE
        s.disponibilidade = TRUE
        AND (
          s.categoria ILIKE $1
          OR s.descricao ILIKE $1
          OR u.nome ILIKE $1
        )

      ORDER BY s.data_hora DESC;
    `;

    const resultado = await db.query(
      query,
      [`%${termo}%`]
    );

    return resultado.rows;
  }

};

export default marketplaceModel;
