/* ASSUNTO-MODELO: Regra de três
   Use este arquivo como referência de formato para os outros assuntos. */

ESTUDO.assunto("nucleo/matematica/aritmetica/regra-de-tres", {
  resumo: "Descobrir um valor desconhecido a partir de grandezas proporcionais.",
  incidencia: "alta",
  blocos: [
    {
      tipo: "texto",
      texto: [
        "A **regra de três** resolve problemas em que duas ou mais grandezas variam juntas, na mesma proporção. Você conhece alguns valores e descobre o que falta, chamado de **x**.",
        "",
        "Ela tem dois tipos:",
        "- **Simples**: envolve duas grandezas.",
        "- **Composta**: envolve três ou mais grandezas."
      ]
    },
    {
      tipo: "texto",
      titulo: "Direta ou inversa?",
      texto: [
        "Antes de calcular, descubra como as grandezas se relacionam:",
        "- **Diretamente proporcionais**: quando uma aumenta, a outra aumenta na mesma razão. Ex.: quilos de arroz e preço pago.",
        "- **Inversamente proporcionais**: quando uma aumenta, a outra diminui na mesma razão. Ex.: número de pedreiros e dias de obra."
      ]
    },
    {
      tipo: "svg",
      titulo: "As setas mostram o sentido",
      legenda: "Na direta, as setas apontam para o mesmo lado. Na inversa, apontam para lados opostos.",
      codigo: `
<svg viewBox="0 0 560 230" role="img" aria-label="Comparação entre regra de três direta e inversa">
  <defs>
    <marker id="seta-r3" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M0,0 L10,5 L0,10 z" style="fill:var(--shu)"></path>
    </marker>
  </defs>
  <g style="font-family:var(--f-texto);fill:var(--washi)" text-anchor="middle">
    <text x="140" y="26" style="font-size:15px;font-weight:700">Direta</text>
    <text x="90" y="62" style="font-size:12px;fill:var(--cinza)">kg</text>
    <text x="190" y="62" style="font-size:12px;fill:var(--cinza)">R$</text>
    <text x="90" y="104" style="font-size:22px;font-family:var(--f-titulo)">3</text>
    <text x="190" y="104" style="font-size:22px;font-family:var(--f-titulo)">18</text>
    <text x="90" y="154" style="font-size:22px;font-family:var(--f-titulo)">5</text>
    <text x="190" y="154" style="font-size:22px;font-family:var(--f-titulo);fill:var(--shu-vivo)">x</text>
    <line x1="122" y1="82" x2="122" y2="156" style="stroke:var(--shu);stroke-width:2" marker-end="url(#seta-r3)"></line>
    <line x1="222" y1="82" x2="222" y2="156" style="stroke:var(--shu);stroke-width:2" marker-end="url(#seta-r3)"></line>
    <text x="140" y="204" style="font-size:14px;fill:var(--cinza)">multiplica em cruz → x = 30</text>

    <line x1="280" y1="20" x2="280" y2="210" style="stroke:var(--linha-forte);stroke-width:1"></line>

    <text x="420" y="26" style="font-size:15px;font-weight:700">Inversa</text>
    <text x="370" y="62" style="font-size:12px;fill:var(--cinza)">pedreiros</text>
    <text x="470" y="62" style="font-size:12px;fill:var(--cinza)">dias</text>
    <text x="370" y="104" style="font-size:22px;font-family:var(--f-titulo)">4</text>
    <text x="470" y="104" style="font-size:22px;font-family:var(--f-titulo)">12</text>
    <text x="370" y="154" style="font-size:22px;font-family:var(--f-titulo)">6</text>
    <text x="470" y="154" style="font-size:22px;font-family:var(--f-titulo);fill:var(--shu-vivo)">x</text>
    <line x1="402" y1="82" x2="402" y2="156" style="stroke:var(--shu);stroke-width:2" marker-end="url(#seta-r3)"></line>
    <line x1="502" y1="156" x2="502" y2="82" style="stroke:var(--shu);stroke-width:2" marker-end="url(#seta-r3)"></line>
    <text x="420" y="204" style="font-size:14px;fill:var(--cinza)">multiplica em linha → x = 8</text>
  </g>
</svg>`
    },
    {
      tipo: "passos",
      titulo: "Como montar",
      itens: [
        "Organize os dados em colunas: cada coluna é uma grandeza e cada linha é uma situação.",
        "Coloque uma seta na coluna do **x**, apontando para baixo.",
        "Compare cada outra grandeza com a do x. Se for direta, a seta aponta no mesmo sentido; se for inversa, no sentido contrário.",
        "Inverta as colunas cujas setas ficaram ao contrário, para que todas apontem no mesmo sentido.",
        "Monte a proporção e resolva multiplicando em cruz."
      ]
    },
    {
      tipo: "formula",
      titulo: "Fórmulas da regra de três simples",
      expr: [
        "Direta:   [[a || c]] = [[b || x]]   ⟹   x = [[b · c || a]]",
        "Inversa:   a · b = c · x   ⟹   x = [[a · b || c]]"
      ],
      legenda: "Na 1ª situação, a grandeza A vale **a** e a grandeza B vale **b**. Na 2ª, A vale **c** e B é o valor procurado, **x**."
    },
    {
      tipo: "exemplo",
      titulo: "Exemplo 1 · Direta",
      enunciado: "3 kg de arroz custam R$ 18,00. Quanto custam 5 kg do mesmo arroz?",
      resolucao: [
        "Mais quilos custam mais caro, então a relação é **direta**.",
        "",
        "{{[[3 || 5]] = [[18 || x]]}}",
        "",
        "Multiplicando em cruz: 3x = 5 · 18 = 90, logo x = 30."
      ],
      resposta: "R$ 30,00"
    },
    {
      tipo: "exemplo",
      titulo: "Exemplo 2 · Inversa",
      enunciado: "4 pedreiros constroem um muro em 12 dias. Em quantos dias 6 pedreiros, no mesmo ritmo, constroem o mesmo muro?",
      resolucao: [
        "Mais pedreiros terminam em menos dias: a relação é **inversa**. Na inversa, multiplique os valores da mesma linha:",
        "",
        "{{4 · 12 = 6 · x}}",
        "",
        "6x = 48, logo x = 8."
      ],
      resposta: "8 dias"
    },
    {
      tipo: "exemplo",
      titulo: "Exemplo 3 · Composta",
      enunciado: "5 máquinas produzem 400 peças em 8 horas. Quantas peças 8 máquinas produzem em 6 horas, no mesmo ritmo?",
      tabela: {
        cabecalho: ["Máquinas", "Horas", "Peças"],
        linhas: [["5", "8", "400"], ["8", "6", "**x**"]]
      },
      resolucao: [
        "Compare cada grandeza com a coluna do x (peças), uma de cada vez:",
        "- Mais máquinas produzem mais peças: **direta**.",
        "- Mais horas produzem mais peças: **direta**.",
        "",
        "Como as duas são diretas, monte a proporção sem inverter nada:",
        "",
        "{{[[400 || x]] = [[5 || 8]] · [[8 || 6]] = [[40 || 48]]}}",
        "",
        "40x = 400 · 48 = 19.200, logo x = 480."
      ],
      resposta: "480 peças"
    },
    {
      tipo: "dica",
      texto: "Na regra de três composta, compare cada grandeza **somente** com a coluna do x, imaginando que as outras ficam paradas."
    },
    {
      tipo: "atencao",
      texto: "Nem toda relação é proporcional. Idade e altura de uma pessoa crescem juntas, mas não na mesma razão. Nesses casos não se usa regra de três."
    },
    {
      tipo: "resumo",
      texto: [
        "- **Direta**: multiplica em cruz.",
        "- **Inversa**: multiplica em linha (ou inverte uma coluna e multiplica em cruz).",
        "- **Composta**: compare cada grandeza com a do x, inverta as inversas e junte tudo numa só proporção."
      ]
    },
    {
      tipo: "flashcards",
      cartas: [
        { frente: "Grandezas diretamente proporcionais", verso: "Variam no mesmo sentido e na mesma razão: se uma dobra, a outra dobra." },
        { frente: "Grandezas inversamente proporcionais", verso: "Variam em sentidos opostos: se uma dobra, a outra cai pela metade. O produto entre elas é constante." },
        { frente: "Como resolver uma regra de três inversa?", verso: "Multiplique os valores da mesma linha (a · b = c · x), ou inverta uma coluna e multiplique em cruz." },
        { frente: "Na composta, cada grandeza é comparada com qual coluna?", verso: "Sempre com a coluna do x, uma de cada vez." }
      ]
    },
    {
      tipo: "questao",
      banca: "Questão autoral de fixação",
      enunciado: "Uma torneira enche um tanque de 600 litros em 4 horas. Mantida a mesma vazão, em quanto tempo ela enche um tanque de 900 litros?",
      alternativas: ["5 horas", "5 horas e 30 minutos", "6 horas", "6 horas e 30 minutos", "7 horas"],
      correta: "C",
      comentario: "Mais litros exigem mais tempo: relação direta. {{[[600 || 900]] = [[4 || x]]}}, então 600x = 3.600 e x = 6 horas."
    },
    {
      tipo: "questao",
      banca: "Questão autoral de fixação",
      enunciado: "Viajando a 80 km/h, um carro faz um percurso em 3 horas. Em quanto tempo faria o mesmo percurso a 60 km/h?",
      alternativas: ["2 horas e 15 minutos", "3 horas e 30 minutos", "3 horas e 45 minutos", "4 horas", "4 horas e 30 minutos"],
      correta: "D",
      comentario: "Velocidade menor exige mais tempo: relação inversa. {{80 · 3 = 60 · x}}, então x = 4 horas."
    },
    {
      tipo: "questao",
      banca: "Questão autoral de fixação",
      enunciado: "Em uma repartição, 6 servidores digitalizam 1.200 documentos em 5 dias. Quantos documentos 9 servidores digitalizam em 4 dias, no mesmo ritmo?",
      alternativas: ["1.080", "1.296", "1.440", "1.500", "1.620"],
      correta: "C",
      comentario: "Servidores e dias são diretamente proporcionais aos documentos. {{[[1.200 || x]] = [[6 || 9]] · [[5 || 4]] = [[30 || 36]]}}, então 30x = 43.200 e x = 1.440."
    }
  ]
});
