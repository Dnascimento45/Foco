/* =====================================================================
   GUIA DE EDIÇÃO DO CADERNO  (este arquivo NÃO é carregado; é só consulta)
   =====================================================================

   HIERARQUIA
     Seção  →  Conteúdo  →  Matéria  →  Assunto  →  blocos
     ex.: Núcleo Comum → Matemática → Aritmética → Regra de três → textos...

   ONDE FICA CADA COISA
     conteudos/secoes.js        seções (ESTUDO.secao)
     conteudos/estrutura/*.js   conteúdo + matérias + lista de assuntos (ESTUDO.conteudo)
     conteudos/textos/*.js      blocos de cada assunto (ESTUDO.assunto)
     conteudos/indice.js        lista de arquivos que o caderno carrega

   CAMINHOS
     Cada item ganha um id a partir do título, sem acento e com hífens:
       "Regra de três" → regra-de-tres
     O caminho de um assunto junta os ids:  nucleo/matematica/aritmetica/regra-de-tres
     Dica: abra um assunto vazio no caderno; ele mostra o caminho pronto para copiar.
     Se renomear um título que já tem texto, fixe o id antigo:
       { titulo: "Regra de três simples e composta", id: "regra-de-tres" }

   ---------------------------------------------------------------------
   1) NOVO CONTEÚDO  (crie conteudos/estrutura/<nome>.js e liste no indice.js)
   --------------------------------------------------------------------- */
ESTUDO.conteudo("nucleo", {            // id da seção: nucleo, bloco-a ou bloco-c
  id: "meu-conteudo",                  // opcional (gera do título)
  titulo: "Meu Conteúdo",
  kanji: "学",                         // opcional: um caractere
  descricao: "Uma frase sobre o conteúdo.",
  concursos: ["INSS"],                 // opcional: chips "cai em"
  nota: "Observação curta.",           // opcional
  conferir: "O que ainda falta confirmar no edital.",  // opcional: marca vermelha
  ordem: 10,                           // opcional: posição na seção
  materias: [
    {
      titulo: "Minha Matéria",
      conferir: "opcional também aqui",
      assuntos: [
        "Assunto só com título",
        { titulo: "Assunto com dados extras", resumo: "Uma linha que aparece na lista." }
      ]
    }
  ]
});

/* Reaproveitar um conteúdo de outra seção (aparece nas duas, texto único): */
ESTUDO.conteudo("bloco-c", { ref: "bloco-a/arquivologia" });

/* ---------------------------------------------------------------------
   2) TEXTO DE UM ASSUNTO  (crie conteudos/textos/<nome>.js e liste no indice.js)
   ---------------------------------------------------------------------
   Marcação dentro dos textos:
     **negrito**   *itálico*   `código`   ==destaque==
     linhas com "- " viram lista;  "1. " lista numerada;  "### " subtítulo
     linha vazia separa parágrafos
     fórmula no meio do texto: {{ [[a || b]] = x^{2} }}
       [[cima || baixo]] = fração    ^{...} = expoente    _{...} = índice
   "texto" aceita uma string ou uma lista de linhas [ "...", "", "..." ].
   --------------------------------------------------------------------- */
ESTUDO.assunto("nucleo/meu-conteudo/minha-materia/assunto-so-com-titulo", {
  resumo: "Uma linha que aparece abaixo do título.",
  incidencia: "alta",                       // opcional: alta, média, baixa
  conferir: "opcional",
  fontes: [{ titulo: "Planalto · Lei 8.112", url: "https://www.planalto.gov.br/ccivil_03/leis/l8112cons.htm" }],
  blocos: [
    { tipo: "texto", titulo: "Subtítulo opcional", texto: "Parágrafo com **negrito**." },
    { tipo: "resumo", texto: "- ponto 1\n- ponto 2" },
    { tipo: "dica", texto: "Uma dica de prova." },
    { tipo: "atencao", texto: "Uma pegadinha comum." },
    { tipo: "formula", titulo: "opcional", expr: ["x = [[b · c || a]]", "J = C · i · t"], legenda: "O que é cada letra." },
    { tipo: "passos", titulo: "Como fazer", itens: ["Primeiro...", "Depois..."] },
    { tipo: "exemplo", titulo: "Exemplo 1", enunciado: "...", resolucao: "...", resposta: "...", aberto: false,
      tabela: { cabecalho: ["A", "B"], linhas: [["1", "2"]] } },        // tabela opcional
    { tipo: "tabela", titulo: "opcional", cabecalho: ["Coluna 1", "Coluna 2"], linhas: [["a", "b"], ["c", "d"]], legenda: "opcional" },
    { tipo: "lei", referencia: "Art. 37, CF/88", url: "https://...", texto: "A administração pública direta e indireta..." },
    { tipo: "imagem", src: "imagens/arquivo.png", alt: "descrição", legenda: "opcional", credito: "opcional" },
    { tipo: "svg", legenda: "opcional", codigo: `<svg viewBox="0 0 100 50">...</svg>` },
    { tipo: "flashcards", cartas: [{ frente: "Pergunta", verso: "Resposta" }] },
    { tipo: "questao", banca: "FAFIPA", ano: 2026, cargo: "Agente Administrativo",
      enunciado: "...", alternativas: ["...", "...", "...", "...", "..."],
      correta: "C",                          // letra, número (0 = A) ou o texto da alternativa
      comentario: "Por que a C está certa." },
    { tipo: "questao", banca: "Cebraspe", enunciado: "Item para julgar.", alternativas: ["Certo", "Errado"], correta: "Errado" },
    { tipo: "link", rotulo: "Para consultar", itens: [{ titulo: "Edital", url: "https://...", nota: "opcional" }] }
  ]
});

/* Imagens: coloque os arquivos numa pasta (ex.: imagens/) ao lado do index.html
   e use o caminho relativo em "src". Também funciona com links https.
   Um bloco com erro mostra um aviso no lugar dele; o resto da página continua. */
