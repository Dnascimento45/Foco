/* CONTEÚDOS COMPARTILHADOS
   "ref" reaproveita um conteúdo que já existe em outra seção.
   Ele aparece no sumário do Bloco C, mas abre o original: você escreve
   o texto uma vez só e o progresso é o mesmo nos dois lugares. */

ESTUDO.conteudo("bloco-c", {
  ref: "bloco-a/nocoes-de-administracao",
  nota: "Base das questões específicas de Agente Administrativo."
});

ESTUDO.conteudo("bloco-c", {
  ref: "bloco-a/arquivologia"
});
