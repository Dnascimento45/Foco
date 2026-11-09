# CLAUDE.md — Projeto (nome provisório)

> Documento-base do projeto. O Claude o lê no início de cada sessão e o usa para entender o produto, o estado atual, o roteiro e **como trabalhamos**.
> Mantenha-o atualizado: toda decisão importante muda este arquivo (ou gera um ADR, ver §7).
> Fase atual: **planejamento e arquitetura**. Nenhum código de produto deve ser alterado sem combinarmos antes.
> **Status (09/11/2026): pausado.** O foco passou para o **Papiro**, projeto pessoal (Daniel e uma amiga, Blocos A e C) que nasceu de uma cópia deste protótipo e vive em `../papiro`. Os dois repositórios são independentes e não se sincronizam sozinhos.

---

## 1. Visão do produto

**O que é:** uma plataforma web que reúne estudantes, sobretudo candidatos a concursos públicos brasileiros, e os ajuda a estudar de forma **gamificada**: material didático, prática, acompanhamento do progresso, competição saudável e comunidade.

**O que NÃO é:** um curso. **Não somos professores.** A plataforma oferece um ambiente que estimula o estudo e conteúdo didático de apoio. Esse aviso deve estar sempre visível e claro na interface (rodapé, onboarding, termos de uso e áreas de conteúdo).

**Nome:** ainda não definido. Chamamos de "Projeto". A pasta e o protótipo se chamam "Dojo de Estudos", nome de trabalho que **não** é o nome final.

### Princípios (guiam todas as decisões)
1. **Para todas as idades.** A interface é intuitiva, com linguagem simples, sem jargão e sem depender de habilidade técnica.
2. **Acessível de verdade.** A meta mínima é WCAG 2.2 nível AA: contraste, navegação por teclado, leitor de tela, texto redimensionável e respeito a `prefers-reduced-motion`. A Lei Brasileira de Inclusão (Lei 13.146/2015) também se aplica.
3. **Gamificação a serviço do estudo.** Pontos, rankings e times motivam, mas não podem estimular comportamento nocivo (ex.: virar a noite para subir no ranking) nem premiar trapaça.
4. **Conteúdo confiável.** Todo conteúdo informativo (datas, editais, leis, vagas) cita a fonte e a data da conferência. O que não foi confirmado aparece marcado como "a conferir".
5. **Web primeiro, mobile depois.** A arquitetura deve permitir reaproveitar a lógica e a API no app mobile.
6. **Privacidade desde o início.** A LGPD vale desde o primeiro usuário. Como haverá menores de idade, as regras de proteção de crianças e adolescentes também valem (ver §5).

---

## 2. Funcionalidades planejadas (backlog do produto)

Lista completa das ideias levantadas até agora, agrupadas por área. A ordem de implementação está no §4.

### Conteúdo e orientação
- **Explicação de cada concurso brasileiro e das carreiras:** o que faz o cargo, requisitos, salário, banca, como é a prova.
- **Perfil de concurso:** separa os candidatos por área (administrativo, financeiro/bancário, militar, segurança, tribunais etc.). O perfil personaliza conteúdo, exercícios, ranking e grupos.
- **Conteúdos que mais caem:** incidência de cada assunto por prova, banca e área.
- **Material didático:** resumos, fórmulas, exemplos resolvidos e legislação comentada. Já existe um protótipo (§3).
- **Demonstrações matemáticas com Python:** gráficos e animações interativas que explicam conceitos (ex.: regra de três, juros compostos, funções).
- **Datas e editais de concursos**, atualizados semanalmente.

### Prática
- **Aba de exercícios:** questões de concursos com gabarito comentado, filtros por matéria, banca e ano.
- **Aba de flashcards com repetição espaçada:** registra onde o estudante mais erra e mostra esses cartões com mais frequência, até fixar o conteúdo. No protótipo a "memória" fica no navegador. Na plataforma, cada revisão é gravada no banco, por usuário, e um algoritmo de repetição espaçada (SM-2 ou FSRS) agenda a próxima.
- **Mini simulados:** provas curtas cronometradas, usadas também nas competições.

### Engajamento e gamificação
- **Contador de horas de estudo:** cronômetro ou sessões ao estilo Pomodoro, com histórico.
- **Ranking de horas:** quem estuda mais fica no topo. Precisa de regras contra fraude (ex.: cronômetro esquecido ligado).
- **Competição entre times:** acertos em mini simulados e horas estudadas.

### Comunidade
- **Chats e grupos de estudantes.**
- **Contato com professores:** parceiros externos. A plataforma conecta, mas não dá aula.

### Inteligência artificial (fase futura, ainda não é o momento)
- **Claude integrado via API:** resolve questões e tira dúvidas como tutor.
- **Análise de redações:** correção com critérios das bancas e devolutiva detalhada.

### Conta e negócio
- **Login na plataforma.**
- **Planos Gratuito e Pro:** as diferenças ainda serão definidas. Candidatas naturais ao Pro são as funções de IA, que têm custo por uso.

---

## 3. Estado atual do repositório (protótipo)

O que existe hoje é um **protótipo funcional de caderno de estudos** ("Dojo de Estudos"), criado como artefato do claude.ai. É a prova de conceito do módulo de conteúdo, não a arquitetura final.

### Estrutura
```
index.html                  Motor do caderno: HTML + CSS + JS puro (sem build, sem framework).
                            É um fragmento sem <!doctype>, como exige a plataforma de artefatos.
servir.ps1                  Servidor estático local (PowerShell) que embrulha o index.html
                            numa página completa. Porta 8765.
.vscode/tasks.json          Tarefa do VS Code para rodar o servidor.
conteudos/
  indice.js                 Lista de arquivos carregados, na ordem do sumário.
  secoes.js                 Seções: nucleo, bloco-a (Federal), bloco-c (Paraná e municípios).
  estrutura/*.js            Conteúdos → matérias → lista de assuntos.
  textos/*.js               Blocos de cada assunto (hoje só matematica-regra-de-tres.js).
  _MODELO.js                Guia de todos os tipos de bloco (não é carregado; é referência).
contexto/                   Pesquisas e conversas que originaram o projeto (só referência).
                            NÃO é versionada (está no .gitignore): existe apenas no computador do Daniel.
```

### Como rodar
```powershell
powershell -ExecutionPolicy Bypass -File servir.ps1   # depois abra http://localhost:8765
```
Ou, no VS Code, rode a tarefa "Servir Dojo de Estudos (porta 8765)".

### Modelo de conteúdo (vale preservar)
- Hierarquia: **Seção → Conteúdo → Matéria → Assunto → Blocos**. Os ids são gerados do título (sem acento, com hífens). Caminho de exemplo: `nucleo/matematica/aritmetica/regra-de-tres`.
- Tipos de bloco: `texto`, `resumo`, `dica`, `atencao`, `formula`, `passos`, `exemplo`, `tabela`, `lei`, `imagem`, `svg`, `flashcards`, `questao`, `link`.
- Metadados: `incidencia` (alta/média/baixa), `fontes`, `conferir` (aviso de dado não confirmado), `concursos`.
- Esse modelo é a base natural do futuro esquema de dados de conteúdo.

### Limitações conhecidas (motivam a nova arquitetura)
- Não há backend, contas nem banco. O progresso fica no `localStorage` do navegador e se perde ao trocar de aparelho.
- Arquivo único com cerca de 1.000 linhas: difícil de testar, de manter e de dividir entre pessoas.
- O conteúdo é código JS. Um erro de sintaxe num arquivo de conteúdo quebra aquele arquivo.
- Visual somente escuro, com tema japonês. Para "todas as idades" precisamos de tema claro, contraste verificado e tamanho de fonte ajustável.
- O conteúdo cobre concursos de nível médio do PR e federais. Os dados de `contexto/` vieram de blogs de cursinhos e **precisam ser conferidos em edital oficial**.

### Ambiente da máquina (09/11/2026)
- Windows 10, PowerShell 5.1, Git 2.55 instalado.
- **Não instalados:** Node.js, Python, GitHub CLI (`gh`). Precisaremos deles na Fase 0.

---

## 4. Roteiro proposto (por fases)

Cada fase entrega algo utilizável. Uma fase só começa quando a anterior está estável. **Esta ordem é uma proposta e pode ser revista.**

| Fase | Entrega | Funcionalidades |
|---|---|---|
| **0. Fundação** | Repositório, decisões de arquitetura, ambiente, CI | Escolha da stack (ADRs), instalação de Node/Python/gh, lint, formatação, testes, GitHub Actions, design system acessível |
| **1. MVP de conteúdo** | Site público, sem login | Migração do caderno, explicação de concursos e carreiras, "o que mais cai", aviso "não somos um curso", demonstrações matemáticas |
| **2. Contas e prática** | Estudante com progresso salvo | Login, perfil de concurso, exercícios, flashcards com repetição espaçada, contador de horas |
| **3. Gamificação** | Motivação e competição | Mini simulados, ranking de horas, times e competições, conquistas |
| **4. Dados de concursos** | Calendário vivo | Editais e datas atualizados semanalmente (curadoria + coleta automatizada) |
| **5. Comunidade** | Interação entre pessoas | Grupos, chat, contato com professores. Exige moderação e regras para menores |
| **6. Inteligência artificial** | Tutor e corretor | Claude via API para dúvidas e questões, análise de redações |
| **7. Monetização** | Plano Pro | Planos Gratuito/Pro, pagamentos (Pix/cartão), controle de acesso por plano |
| **8. Mobile** | App | App reaproveitando a API e, se possível, o código |

**Por que essa ordem:** conteúdo e prática são o coração do produto e têm baixo risco. Comunidade e IA trazem custo, moderação e responsabilidade legal, então entram quando a base estiver sólida. Pagamento só faz sentido quando houver valor para cobrar.

---

## 5. Pontos de atenção (riscos que mudam a arquitetura)

- **Menores de idade + chat + contato com adultos (professores)** é a área de maior risco. Exige moderação, denúncia, bloqueio, regras de idade e consentimento dos responsáveis. Conferir LGPD (art. 14) e o ECA Digital (Lei 15.211/2025) antes da Fase 5.
- **LGPD:** coletar só o necessário, ter política de privacidade, permitir exportar e excluir a conta, guardar senhas apenas com hash forte (ou usar um provedor de autenticação).
- **Direitos autorais:** editais e leis são públicos. Questões e provas de bancas e materiais de terceiros exigem verificar se podem ser reproduzidos. Conteúdo próprio sempre cita a fonte.
- **Dados de concursos:** coletar automaticamente de sites oficiais exige respeitar os termos de uso e o `robots.txt`. Preferir fontes oficiais (DOU, sites das bancas). Toda data mostra a fonte e a data da última conferência.
- **Custos da IA:** chamadas ao Claude custam por uso. A chave da API fica **somente no servidor**, nunca no navegador. É preciso limite de uso por usuário e por plano.
- **Ranking:** ranking de horas é fácil de fraudar. Validar sessões (pausa por inatividade, limite diário plausível) e considerar ranking por atividade verificada (questões resolvidas).
- **Bem-estar:** a gamificação não deve punir descanso. Considerar metas saudáveis e lembretes de pausa.

---

## 6. Arquitetura e stack — PROPOSTA (aguardando decisão)

> Nada aqui está decidido. Cada item vira um ADR quando aprovado.

**Recomendação inicial: monólito modular em TypeScript.**
- **Linguagem:** TypeScript em todo o projeto (front e back). A mesma linguagem servirá ao mobile com React Native.
- **Web:** Next.js (React) com renderização no servidor: bom para SEO das páginas de conteúdo e concursos.
- **Banco:** PostgreSQL, com um ORM/consultas tipadas (Prisma ou Drizzle) e migrações versionadas.
- **Autenticação:** provedor pronto (ex.: Supabase Auth ou Auth.js). Não implementar criptografia de senha por conta própria.
- **Tempo real (chat, ranking ao vivo):** serviço gerenciado na Fase 5, sem servidor próprio de WebSocket no início.
- **Estilo:** design system próprio com tokens (cores, tipografia, espaçamento), tema claro e escuro, componentes acessíveis.
- **Demonstrações Python:** Pyodide (Python rodando no navegador), sem servidor extra, ou conteúdo pré-gerado com matplotlib.
- **IA:** módulo de servidor isolado (`/ai`) que chama a API do Claude, com limite de uso e registro de custo.
- **Mobile (futuro):** React Native com Expo, consumindo a mesma API.
- **Qualidade:** ESLint, Prettier, Vitest (unitários), Playwright (ponta a ponta), axe (acessibilidade), GitHub Actions (CI).
- **Hospedagem:** a definir (ex.: Vercel + Supabase têm planos gratuitos).

**Alternativa mais simples para estudo:** começar sem framework de backend, com Vite + React consumindo o Supabase direto. É mais rápido de aprender, porém com menos controle no servidor.

### Decisões em aberto
- [ ] Nome do projeto e identidade visual (manter o tema "dojo"?)
- [ ] Stack definitiva (Next.js + Postgres? Supabase?)
- [ ] Idioma do código (recomendação: identificadores em inglês, interface e documentação em pt-BR)
- [ ] Repositório público (portfólio) ou privado
- [ ] Hospedagem
- [ ] O que é Gratuito e o que é Pro
- [ ] Destino do protótipo: arquivar em `prototipo/` ou manter na raiz até a migração
- [ ] Fontes oficiais para os editais

---

## 7. Forma de trabalho (regras para o Claude)

### Postura
- **Obediência com honestidade:** seguir o que o Daniel pedir, do melhor jeito e com boas práticas. Se houver caminho claramente melhor, **parar e propor antes de executar**, explicando o porquê.
- **Projeto de aprendizado:** o Daniel está estudando. Explicar o *porquê* das decisões, nomear os conceitos usados (ex.: "isso é injeção de dependência") e, quando notar uma lacuna de conhecimento que trava o avanço, **indicar materiais de estudo** (documentação oficial, artigos, vídeos) antes de seguir.
- **Passos pequenos e revisáveis.** Nada de grandes saltos sem explicar o que mudou.
- **Não alterar código de produto sem combinar**, principalmente nesta fase de planejamento.
- **Não inventar dados.** Datas, vagas, leis e editais só com fonte. Se não for possível confirmar, avisar e marcar "a conferir".
- **Perguntar quando a decisão for do Daniel** (produto, negócio, nome, gasto). Decidir sozinho apenas o que tem padrão consolidado de mercado, e informar o que foi decidido.

### Idioma
- Conversa, documentação, commits e interface em **português do Brasil**, com acentuação correta.
- Código: a definir (ver §6). Até lá, manter o padrão do arquivo que estiver sendo editado.

### Git e versionamento
- Branch principal: `main`. Ela deve sempre funcionar.
- Trabalho novo em branch própria: `feat/<assunto>`, `fix/<assunto>`, `docs/<assunto>`, `chore/<assunto>`.
- **Commitar conforme avança**, com commits pequenos e coesos (uma mudança lógica por commit).
- Mensagens no padrão **Conventional Commits**, com a descrição em português:
  `feat: adiciona contador de horas`, `fix: corrige cálculo do ranking`, `docs: atualiza roteiro`, `chore: configura lint`.
  Tipos: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`, `ci`, `perf`.
- Quando houver repositório remoto: Pull Request para `main`, mesmo trabalhando sozinho, com descrição do que mudou e como testar.
- **Nunca** versionar segredos (`.env`, chaves de API). Usar `.env.example` com nomes de variáveis sem valores.
- Nunca reescrever o histórico de `main` (`push --force`) nem pular hooks.

### Decisões de arquitetura (ADR)
- Toda decisão relevante (stack, banco, autenticação, estrutura) vira um registro em `docs/adr/NNNN-titulo.md`: contexto, opções consideradas, decisão e consequências.
- Ao aprovar um ADR, atualizar este CLAUDE.md.

### Definição de pronto (vale quando houver código)
Uma tarefa está pronta quando:
1. funciona e foi testada (testes automatizados quando fizer sentido);
2. passa em lint, formatação e verificação de tipos;
3. é acessível (teclado, contraste, leitor de tela) e funciona em celular (largura de 360px);
4. não expõe dados nem segredos;
5. a documentação foi atualizada, se mudou comportamento;
6. foi commitada com mensagem clara.

### Conteúdo didático
- Seguir o modelo de blocos do protótipo (§3) até existir o novo esquema.
- Sempre com fonte. Leis apontam para o Planalto ou outra fonte oficial.
- Tom: claro, direto, acolhedor, para qualquer idade.

---

## 8. Próximos passos imediatos
1. Revisar este documento e responder às decisões em aberto (§6).
2. Criar o repositório remoto no GitHub e decidir se será público ou privado.
3. Instalar o ambiente: Node.js LTS, Python 3, GitHub CLI.
4. Escrever os primeiros ADRs (stack, banco, autenticação).
5. Detalhar o MVP (Fase 1) em histórias de usuário com critérios de aceite.
