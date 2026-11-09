/* =====================================================================
   ÍNDICE DE ARQUIVOS DO CADERNO
   ---------------------------------------------------------------------
   Lista todos os arquivos de conteúdo, na ordem em que aparecem no sumário.
   - Criou um arquivo novo? Adicione o caminho dele aqui.
   - Um arquivo com erro não derruba os outros: o caderno mostra um aviso
     no topo da página dizendo qual arquivo e qual linha conferir.

   Organização das pastas:
     conteudos/secoes.js        → as seções (Núcleo, Bloco A, Bloco C)
     conteudos/estrutura/*.js   → conteúdos, matérias e lista de assuntos
     conteudos/textos/*.js      → o conteúdo de cada assunto (textos,
                                  fórmulas, imagens, questões...)
   Guia completo com todos os tipos de bloco: conteudos/_MODELO.js
   ===================================================================== */
ESTUDO.carregar([
  "conteudos/secoes.js",

  /* Núcleo Comum */
  "conteudos/estrutura/nucleo-portugues.js",
  "conteudos/estrutura/nucleo-matematica.js",
  "conteudos/estrutura/nucleo-raciocinio-logico.js",
  "conteudos/estrutura/nucleo-informatica.js",
  "conteudos/estrutura/nucleo-direito-constitucional.js",
  "conteudos/estrutura/nucleo-direito-administrativo.js",
  "conteudos/estrutura/nucleo-etica.js",

  /* Bloco A · Federal */
  "conteudos/estrutura/a-lei-8112.js",
  "conteudos/estrutura/a-lei-9784.js",
  "conteudos/estrutura/a-etica-federal.js",
  "conteudos/estrutura/a-administracao.js",
  "conteudos/estrutura/a-arquivologia.js",
  "conteudos/estrutura/a-seguridade-social.js",
  "conteudos/estrutura/a-conhecimentos-gerais.js",

  /* Bloco C · Paraná e municípios */
  "conteudos/estrutura/c-curitiba.js",
  "conteudos/estrutura/c-parana.js",
  "conteudos/estrutura/c-regiao-metropolitana.js",
  "conteudos/estrutura/c-gestao-publica.js",
  "conteudos/estrutura/c-conhecimentos-regionais.js",
  "conteudos/estrutura/c-compartilhados.js",

  /* Textos dos assuntos */
  "conteudos/textos/matematica-regra-de-tres.js"
]);
