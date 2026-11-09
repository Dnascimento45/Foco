/* SEÇÕES DO CADERNO
   O "id" é usado nos caminhos: ESTUDO.conteudo("nucleo", {...}).
   Não mude um id depois de criar conteúdo nele (mude só o "titulo"). */

ESTUDO.secao({
  id: "nucleo",
  titulo: "Núcleo Comum",
  kanji: "基",
  descricao: "As matérias que aparecem em quase todos os concursos dos blocos A e C. É a base: estude primeiro e revise sempre.",
  concursos: ["Todos os concursos dos blocos A e C"],
  nota: "O estatuto do servidor fica em cada bloco: Lei 8.112/90 no Bloco A e estatutos locais no Bloco C."
});

ESTUDO.secao({
  id: "bloco-a",
  titulo: "Bloco A · Federal",
  kanji: "国",
  descricao: "Legislação e conhecimentos específicos dos cargos administrativos da União.",
  concursos: [
    "INSS · Técnico do Seguro Social",
    "PRF · Agente Administrativo",
    "PF · Agente Administrativo",
    "Banco Central · Técnico",
    "CNU 3 · nível intermediário",
    "UFPR, UTFPR e IFPR · Assistente em Administração",
    "IBGE · efetivo",
    "FUNAI"
  ],
  conferir: "Situação dos concursos levantada em blogs de cursinhos (08/11/2026), sem confirmação em edital. Banco Central: o Senado aprovou exigir nível superior para Técnico (PLV 12/2026), pendente de sanção."
});

ESTUDO.secao({
  id: "bloco-c",
  titulo: "Bloco C · Paraná e municípios",
  kanji: "市",
  descricao: "Legislação do Paraná, de Curitiba e da região metropolitana, mais conhecimentos regionais. Aproveita quase todo o Bloco A, trocando a Lei 8.112 pelos estatutos e leis orgânicas locais.",
  concursos: [
    "Prefeitura de Curitiba · Agente Administrativo",
    "São José dos Pinhais",
    "Araucária",
    "Câmaras municipais",
    "PGE-PR",
    "FUNEAS-PR",
    "CREA-PR"
  ],
  nota: "Bancas regionais frequentes: FAFIPA, AOCP, Consulpam e UniFil."
});
