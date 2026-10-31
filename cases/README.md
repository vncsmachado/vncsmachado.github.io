# Case LIBERÔ — implementação progressiva

Implementação em `libero.html`, com estilos em `../assets/css/libero.css` e script exclusivo em `../assets/js/libero.js`. A Home e seus arquivos não foram alterados.

## Diretriz permanente de conteúdo

Desktop é a fonte principal e definitiva de textos e destaques e a referência visual desktop. Mobile serve como referência de composição, disposição, dimensionamento e comportamento responsivo, sempre com os textos desktop. Não criar redações alternativas por breakpoint. Esta regra vale para todas as próximas seções e está registrada também em `AGENTS.md` neste diretório.

## Referências e escopo

Arquivo Figma `RXlxl9DLCRFMvs9gVWFD9k`, desktop `507:332` e mobile `507:176`. Consultados os metadados gerais; contexto e screenshots apenas dos componentes necessários:

- Contexto desktop: `609:120`, incluindo Visão Geral e Contexto e problema.
- Mobile: Visão Geral `507:205` e Contexto e problema `507:208`.
- Menu: `610:136`; ícone de retorno: `I507:490;54616:25426`.
- Header de navegação: `507:177`. A logo SVG existente foi reutilizada.
- Diagnóstico: `507:361` (desktop) e `507:219` (mobile); Conflito: `507:472` e `507:222`.
- Hero: `507:340` (desktop) e `507:184` (mobile), com metadados, contexto e screenshots dos dois nós.
- Decisão: `609:121` no desktop; `507:230` e `507:237` como referências responsivas. O grupo termina no quarto trade-off, antes da seção Solução.
- Solução: grupo desktop `609:122`, com os nós `507:386`, `507:391`, `507:401` e `507:414`; referências de composição mobile `507:252`, `507:257`, `507:267` e `507:280`. Termina no vídeo `507:418`, antes de Estratégia.
- Estratégia: `507:419` e Estrutura do serviço `507:422` no desktop; `507:285` e `507:288` como referências de composição mobile. O grupo termina antes de Wireframes (`507:425`).
- Wireframes: `507:425` no desktop e `507:291` no mobile; imagens `507:430/434` e `507:296/300`. O bloco termina na imagem do fluxo por motivos.
- Direção de marca e linguagem visual: bloco independente `507:435` no desktop e `507:301` no mobile, após Wireframes e antes de Resultados. Implementado no complemento da etapa 8.6.

A Hero e os detalhes do projeto aparecem antes do Contexto. O título original da Hero é o único `h1` da página. Solução inclui os textos desktop, a imagem e os nove vídeos originais locais. Estratégia inclui os dois blocos textuais originais. Wireframes inclui a decisão de navegação e duas composições estáticas originais. Direção de marca aparece a seguir como bloco independente. Resultados, Limitações, Futuro, Conclusão e Footer ainda não foram implementados; não há placeholders para eles.

## Layout e tipografia

- Cores e famílias reutilizam os tokens globais. Helvetica LT Pro Roman 400 e Bold 700 a 16/24 px; títulos a 24 px; pergunta em Light 300 a 32 px com entrelinha normal. Operetta 8 Regular 400 a 20 px na navegação. Os pesos originais foram confirmados por consulta de propriedades em leitura no Figma.
- Margens de 16 px no mobile e 100 px a partir de 48rem. O menu aparece somente a partir de 64rem, quando há espaço para navegação e leitura lado a lado. Em 1440 px, menu em x=100 e conteúdo em x=520, com largura 824 px. Nas larguras intermediárias, a coluna de leitura é fluida.
- Menu sticky a 32 px do topo, sem rolagem interna ou limite de altura. Abaixo de 484 px de altura, usa `position: static` e a rolagem normal da página. Relação vertical original preservada: Contexto começa 80 px abaixo do início do menu.
- Textos usam altura natural para acomodar o conteúdo em todas as larguras. O Figma contém caixas fixas, inclusive uma descrição mobile com altura declarada de 116 px que extrapola essa caixa no screenshot. Não foram reproduzidos esses limites como recorte ou sobreposição.
- Limitação visual: as métricas das fontes web e das caixas do Figma produzem diferenças de altura e alinhamento de linhas. O grupo Contexto mede aproximadamente 1232 px no desktop e 1378 px no mobile de 412 px, contra 1199 px e 1330 px nas referências. Famílias, pesos, tamanhos e entrelinhas explícitas foram mantidos, sem compensações tipográficas arbitrárias.

## Menu e próximas âncoras

Contexto, Diagnóstico, Decisão, Solução, Estratégia e Wireframes são links nativos funcionais para `#contexto`, `#diagnostico`, `#decisao`, `#solucao`, `#estrategia` e `#wireframes`, com smooth scroll e exceção para movimento reduzido. Conflito pertence à seção Diagnóstico e mantém esse item ativo. `IntersectionObserver` acompanha as seções reais e atualiza `aria-current="location"`; não depende de clique. A faixa de observação vai de 12% a 13% da altura da viewport. Uma observação adicional ativa a última seção quando ela está inteiramente visível: uma seção curta no fim da página pode não alcançar essa faixa antes do limite de rolagem. Enquanto Contexto estiver abaixo da faixa, nenhum item fica ativo; retornar à Hero também limpa a seleção. A Hero não foi adicionada ao menu. Sem suporte à API, os links nativos continuam funcionando sem indicação automática de seção ativa.

Os demais rótulos mantêm a aparência cinza do Figma e usam `aria-disabled="true"`, sem `href` para um destino inexistente. Não entram na sequência de Tab. `data-section` prepara a associação; ao adicionar uma seção real com o ID correspondente, o script ativa seu link e passa a observá-la. Ao implementar cada seção, adicionar também seu `href` no HTML para preservar a navegação sem JavaScript.

O menu representa os principais marcos narrativos, não todos os blocos de conteúdo. **Direção de marca** (após Wireframes, antes de Resultados) e **Limitações** (após Resultados, ainda pendente) são blocos independentes: não recebem links no menu nem entram na lista de seções observadas. Durante sua leitura, mantém-se o último marco ativo. A lista observada permanece baseada exclusivamente nos destinos reais do menu; não selecionar indiscriminadamente todas as `<section>` do conteúdo. Saltos diretos desses blocos até a Hero também limpam o indicador, por um listener passivo de scroll que não adiciona alvos ao observador.

| Rótulo | ID futuro | Nó principal desktop |
|---|---|---|
| Resultados | `resultados` | `507:443` (Limitações `507:446` é bloco independente posterior) |
| Futuro | `futuro` | `609:123` |
| Conclusão | `conclusao` | `507:455` |

O Header permite retornar à Home pela logo em todas as larguras. “Sobre mim” aponta à âncora da Home; Currículo abre o PDF existente em nova aba. O menu desktop também oferece “Voltar”. Não há menu alternativo mobile nem botão de voltar ao topo.

## Assets e vídeos

Downloads originais do MCP, armazenados localmente:

- `../assets/images/libero-contexto-bagagem.png`: PNG 1920 × 1080, nos slots 824 × 384 e 380 × 178, com `object-fit: cover`.
- `../assets/images/libero-contexto-leveza.png`: PNG 1920 × 1080, nos slots 824 × 215 e 380 × 100, preservando o recorte retornado pelo MCP (altura 214,53%, topo −47,75%, esquerda 1,2%).
- `../assets/icons/libero-voltar.svg`: vetor original de 5 × 10 dentro de uma área de 24 × 24.
- `../assets/images/libero-conflito-termometro.png`: PNG original de 1920 × 1080, nos slots de 824 × 517 e 380 × 240, com altura 100%, largura 112,09% e esquerda −13,83%, conforme o MCP.
- `../assets/images/libero-hero-desktop.png`: exportação original PNG de 2480 × 1522 (2× o slot desktop de 1240 × 761).
- `../assets/images/libero-hero-mobile.png`: exportação original PNG de 760 × 466 (2× o slot mobile de 380 × 233). `<picture>` usa a versão desktop a partir de 48rem e mantém a proporção natural de cada imagem, sem distorção ou URLs temporárias.

Nenhum vídeo foi identificado na Hero, Contexto, Diagnóstico ou Conflito; não há arquivos pendentes para essas seções. Os recursos de etapas futuras ainda precisam ser inspecionados individualmente; um PNG retornado pelo MCP não comprova a disponibilidade de um vídeo original.

Para vídeos futuros, usar arquivos locais em `../assets/videos/`, com `<video autoplay muted loop playsinline preload="metadata">` e `<source type="video/mp4">`. O script do Case prepara pausa fora da viewport e retomada na entrada. Com movimento reduzido, desativa autoplay, pausa e oferece controles nativos; falhas de autoplay também liberam controles. Fornecer um poster original quando disponível. A reprodução real não pode ser validada sem os arquivos de vídeo; não foram criados substitutos.

## Validação

Chrome headless em 320, 375, 412, 768, 1024 e 1440 px: imagens e fontes carregadas, sem overflow horizontal, menu exclusivo do desktop, posição sticky, âncora Contexto, foco por teclado, atalho de conteúdo, movimento reduzido e retorno à Home. As fontes efetivamente renderizadas foram verificadas como HelveticaLTPro-Roman, HelveticaLTPro-Bold e HelveticaLTPro-Light. Capturas de 412 e 1440 px comparadas às referências dos componentes.

### Diagnóstico e Conflito

- Apenas a seção `#diagnostico`, incluindo Conflito central, foi adicionada na etapa 8.2. Dois parágrafos de diagnóstico, dois de conflito, citação em Helvetica LT Pro Light 300 a 24 px, conclusão e infográfico original. Títulos a 24 px, texto regular/bold a 16/24 px, intervalos de 16 e 24 px. O intervalo após Contexto e antes de Conflito é 51 px no desktop e 48 px no mobile, conforme os metadados.
- Conteúdo padronizado pelo desktop na revisão posterior à etapa 8.2: “o incômodo com a bagagem não é isolado” recebe negrito em todas as larguras. A conclusão usa exclusivamente “a dor não é só logística; a dor também é emocional”. Removidos o texto mobile desatualizado e as regras CSS de alternância; há uma única redação no HTML.
- Validados no Chrome os seis tamanhos, navegação Contexto/Diagnóstico por clique e teclado, alternância do indicador por scroll nas duas direções, continuidade do estado em Conflito, entrada direta por hash, movimento reduzido, fontes reais e imagem carregada. Nenhum overflow horizontal, sobreposição ou erro de carregamento detectado.
- Repetida a validação do menu com barras nativas do Chrome visíveis em 1024/1440 × 600/768/900 px: largura útil 138 px, gap 16 px, sticky a 32 px, rótulos completos, sem scroll interno. Adaptação estática em 400 px de altura também conferida. O CSS do menu foi preservado integralmente.
- A geometria de todos os elementos de Contexto e do menu coincide com a captura anterior à etapa, nas seis larguras. Arquivos da Home conferidos por hash; retorno à Home e saída de sua introdução também testados.
- Após padronizar o conteúdo, comparação com áreas úteis de 380 e 824 px: Diagnóstico + Conflito mede 1302 px no mobile e 1136 px no desktop. A diferença desktop permanece em 24 px contra os 1112 px do Figma. A medida mobile anterior era 1301 px; os 1262 px do frame mobile não são uma meta equivalente, pois sua redação e seus destaques estão desatualizados. O infográfico continua em 380 × 240 e 824 × 517 px. Nenhuma substituição de fonte ou asset realizada.

### Revisão textual pelo desktop

- Recuperados novamente os nós desktop `609:120`, `507:361` e `507:472` pelo MCP oficial, usando a skill local. Comparados os 15 blocos de títulos, parágrafos, pergunta, citação e conclusão, incluindo seus destaques, pontuação e acentuação. Visão Geral e demais textos do Contexto já correspondiam à redação desktop. Os textos dentro dos três infográficos permanecem nos arquivos originais, inalterados, conferidos pelas referências do MCP.
- Removida a conclusão mobile “a dor não é logística; a dor é emocional”. A redação desktop agora aparece uma única vez no documento. O destaque de “o incômodo com a bagagem não é isolado” passou a usar `<strong>` em todas as larguras.
- Nas seis larguras (320, 375, 412, 768, 1024 e 1440 px), os 15 blocos e destaques correspondem ao conteúdo desktop e são idênticos entre si. Sem overflow horizontal, sobreposições ou falhas de imagens. Confirmados alternância da seção ativa, âncoras, teclado e os sete itens futuros desabilitados; repetidas as seis combinações desktop de 1024/1440 × 600/768/900 px sem regressão do menu.
- Análise das alturas desktop com coluna de 824 px: descrição do Diagnóstico ocupa 197 px contra 188 px do Figma (+9); explicação do Conflito, 169 contra 164 (+5); citação com entrelinha automática, 29 contra 26 (+3); conclusão, 29 contra 22 (+7). Somados, explicam os 24 px restantes. O texto explícito usa 16/24 px e os intervalos continuam 16/24/51 px conforme os componentes. As diferenças são compatíveis com métricas de linha das fontes web, especialmente em linhas com pesos mistos e com entrelinha `normal`; não há evidência para mudar a tipografia ou forçar alturas fixas.
- Nenhuma regra de layout do Contexto, menu, fontes, variáveis ou mídias foi alterada; removidas somente as regras CSS sem uso que alternavam conteúdo. Home, JavaScript e assets conferidos por hash.

### Hero do Case

- Implementados título, descrição, imagem e lista de definições com Quando, Função, Ferramentas e Escopo. Textos comparados automaticamente com o nó desktop em todas as seis larguras. Sem variantes de redação por breakpoint.
- Hero começa em y=270, com margens de 16 px no mobile e 100 px no desktop; texto limitado a 1134 px. Título Helvetica LT Pro Bold 32/35,2 px e descrição Roman 24/26,4 px. Intervalos de 16 px entre os textos, 40 px antes da imagem e 12 px antes dos detalhes. Rótulos Bold 16 px em `#595856`; data e função Roman 16 px, ferramentas e escopo Roman 14 px, com entrelinha normal. Parágrafos do escopo separados por 6 px.
- Mobile: detalhes empilhados com gap de 81 px. Adaptação intermediária a partir de 48rem: dois grupos por linha, com gap horizontal de 81 px e vertical de 48 px. A partir de 80rem, quatro colunas de 105/129/272 px e o espaço restante para Escopo, preservando os gaps de 81 px do Figma. Esse breakpoint evita uma coluna de Escopo excessivamente estreita em 1024 px.
- Contexto começa 240 px depois da Hero. No desktop, o menu começa 160 px depois da Hero, preservando os 80 px até Contexto. O wrapper de leitura mantém a mesma grade e largura; somente sua posição vertical muda. Nenhuma regra interna de Contexto, Diagnóstico ou menu foi alterada. O atalho por teclado continua levando diretamente a Contexto.
- Hero usa altura mínima de 1200 px no mobile e 1060 px no desktop de quatro colunas; o conteúdo pode crescer. Nas larguras intermediárias usa fluxo natural sem altura mínima. Isso acomoda as métricas das fontes web sem cortar texto. Na comparação com áreas úteis de 380 e 1240 px, as alturas renderizadas foram 1245,66 e 1074,22 px, contra 1200 e 1060 px nos frames. As diferenças de aproximadamente 46/14 px ficam nos blocos de detalhes e métricas tipográficas; não foram forçadas alturas fixas nem alteradas as fontes.
- Chrome headless: 320, 375, 412, 768, 1024 e 1440 px, sem overflow ou sobreposições. Imagens decodificadas, proporções e seleção de asset conferidas, e fontes efetivas verificadas como HelveticaLTPro-Bold/Roman. Screenshots comparadas às referências correspondentes. A geometria interna e os textos das seções anteriores ficaram idênticos à captura anterior, deslocados uniformemente para baixo.
- Menu testado novamente com barras nativas visíveis em 1024/1440 × 600/768/900 px: sem rolagem interna, largura útil 138 px, sticky a 32 px, sete destinos futuros desabilitados. Conferidos ausência de seleção na Hero, alternância Contexto/Diagnóstico por scroll e âncoras, limpeza da seleção ao retornar à Hero, entrada direta por hash, modo estático em 400 px de altura, Tab/Enter no atalho, movimento reduzido e retorno à Home. Sem erros de carregamento. A Home e os assets anteriores foram conferidos por hash.

### Decisão — etapa 8.3

- Implementados “Decisão principal”, a introdução, a pergunta reformulada em Helvetica LT Pro Light 300 a 32 px, a consequência para o produto e “Trade-offs e critérios de decisão”, com os quatro critérios originais. O texto e os destaques desktop são usados também no mobile, incluindo “a solução”, “reduzir etapas, decisões e incertezas”, “o projeto” e “como uma resposta à sobrecarga emocional que acompanha a logística do viajar”.
- Títulos principais a 24 px, títulos dos trade-offs Bold 20 px com entrelinha normal, texto Roman/Bold a 16/24 px. A introdução segue a referência: entrelinha normal no desktop e 24 px no mobile. Intervalos preservados: 16 px após títulos, 32 px entre os blocos da decisão, 48 px até os critérios, 24 px entre trade-offs e 8 px entre cada título e sua descrição. O intervalo após Diagnóstico é de 51 px no desktop e 48 px no mobile.
- Alturas naturais, sem reproduzir caixas fixas ou parágrafos vazios residuais do protótipo. Na comparação com colunas úteis de 824/380 px, a seção renderizou em 983/1701 px, contra 912/1607 px nos frames. No desktop, os 71 px adicionais se distribuem entre o primeiro bloco (+12 px) e os critérios (+59 px), principalmente pelos títulos de 20 px com entrelinha automática em caixas de 15 px no Figma e pelas métricas dos parágrafos. No mobile, a referência também contém destaques diferentes dos textos desktop usados nesta implementação; a diferença de 94 px não corresponde apenas à renderização. Não foram alteradas fontes, pesos ou tamanhos para compensar essas diferenças.
- A seção é o novo destino `#decisao`; o link nativo funciona mesmo sem JavaScript. O observador existente descobre automaticamente seções reais pelo `data-section`, sem precisar alterar `libero.js`. As seis seções futuras continuam desabilitadas. Não há imagens, ícones, vídeos ou animações nesses nós; nenhum asset foi necessário e não há arquivo pendente para Decisão.
- Chrome headless: 320, 375, 412, 768, 1024 e 1440 px, com os 13 blocos textuais comparados automaticamente ao nó desktop, destaques conferidos, fontes efetivas verificadas e screenshots desktop/mobile inspecionadas. Nenhum overflow horizontal, sobreposição ou erro de carregamento. Todos os elementos da Hero, Contexto, Diagnóstico e menu mantiveram suas posições e dimensões anteriores, sem deslocamentos.
- Menu conferido com barras nativas do Chrome visíveis em 1024/1440 × 600/768/900 px: largura útil 138 px, sticky a 32 px, todos os rótulos visíveis e nenhuma rolagem interna. Validados cliques nas três âncoras, destaque por scroll nas duas direções, ausência de seleção durante a Hero, foco por Tab/Enter em Decisão, movimento reduzido, entrada direta por hash e adaptação estática em 400 px de altura. Home, JavaScript, assets e regras CSS anteriores preservados.

### Solução — etapa 8.4

- Implementados todos os textos e destaques desktop em uma única estrutura HTML: “Solução proposta”, “Dois caminhos para reduzir ambiguidade logo no início”, “Conjuntos por loja para reduzir fragmentação e sobrecarga cognitiva” e “Mais previsibilidade na reserva e no acompanhamento do serviço”. Nenhum conteúdo de Estratégia incorporado.
- Título principal Bold 24 px e subtítulos Bold 20 px com entrelinha normal; parágrafos Roman/Bold 16/24 px. Intervalos do Auto Layout: 48 px entre os quatro blocos, 16 px dentro de cada bloco e 24 px entre os parágrafos da apresentação e da reserva. Após Decisão: 51 px no desktop e 48 px no mobile. Sem alturas fixas, margens negativas ou compensações tipográficas.
- Imagem original `../assets/images/libero-solucao-plataforma.png`, PNG 4096 × 1972, baixada pelo URL fornecido por `get_design_context`. Slots de 824 × 450 no desktop e 380 × 209 no mobile; recorte central com `object-fit: cover`, conforme preenchimento FILL do Figma. Nas larguras intermediárias, o slot acompanha a largura da coluna sem alterar o conteúdo textual.
- Link nativo `#solucao` habilitado também sem JavaScript. O observador existente reconhece a quarta seção automaticamente; `libero.js` não foi alterado. Cinco destinos futuros permanecem desabilitados. CSS do menu e estilos das seções anteriores preservados.
- O MCP identificou nove preenchimentos VIDEO, mas disponibilizou apenas previews. Posteriormente, o usuário forneceu os nove originais em `assets/videos/`. Seus quadros foram inspecionados no Chrome e comparados às referências do Figma antes da inserção. Os arquivos foram preservados, sem conversão ou substituição por imagens. A correspondência está registrada abaixo.

| Vídeo original local | Nó desktop | Slot desktop | Slot mobile |
|---|---|---|---|
| `fluxo_1.mp4` — entrada por destinos | `507:395` | 824 × 551 | 380 × 255 |
| `fluxo_2.mp4` — entrada por motivos | `507:396` | 824 × 550 | 380 × 255 |
| `fluxo_3.mp4` — contexto da busca | `507:399` | 824 × 550 | 380 × 255 |
| `fluxo_4.mp4` — navegação contextual | `507:400` | 824 × 550 | 380 × 255 |
| `fluxo_5.mp4` — conjuntos por loja | `507:405` | 824 × 536 | 380 × 249 |
| `fluxo_6.mp4` — detalhes e personalização do conjunto | `507:409` | 824 × 681,5 | 380 × 315 |
| `micro_1.mp4` — seleção de tamanho | `507:410` | 409,5 × 681,5 | 187,5 × 315 |
| `micro_2.mp4` — ajuste de itens | `507:411` | 409,5 × 681,5 | 187,5 × 315 |
| `fluxo_7.mp4` — reserva e acompanhamento | `507:418` | 824 × 536 | 379 × 247 |

Todos os vídeos usam fontes locais em `../assets/videos/`, com `autoplay muted loop playsinline preload="metadata"` e nomes acessíveis. Fluxo6 ocupa a primeira linha inteira; Micro1/Micro2 ficam lado a lado na segunda, com gap horizontal de 5 px e vertical de 6 px. Os slots usam `aspect-ratio` e `object-fit: cover`, com recorte central correspondente aos preenchimentos FILL do Figma, sem distorção. A grade tem `min-height: 0` para impedir que o tamanho intrínseco dos vídeos verticais expanda o slot após a decodificação. Não há alturas fixas para os textos.

O JavaScript existente controla pausa fora da viewport, retomada ao entrar, reprodução silenciosa em loop e controles manuais para movimento reduzido ou falha de autoplay. Não foi necessário alterá-lo. Não foram fornecidos posters separados; o navegador apresenta os quadros originais decodificados, sem imagens fictícias. Os sete fluxos medem 1916 × 1080 (Fluxo4: 1920 × 1080); as duas microinterações medem 1080 × 1920. Durações originais entre 7,24 e 22,31 segundos.

- Validação da parte disponível no Chrome headless: 320, 375, 412, 768, 1024 e 1440 px. Os 11 blocos textuais e seus destaques foram comparados automaticamente ao contexto desktop; conteúdo idêntico entre resoluções. Imagem decodificada, dimensões e recorte conferidos; fontes reais HelveticaLTPro-Roman/Bold confirmadas. Sem overflow horizontal, sobreposições ou erros de carregamento. Capturas de 412 e 1440 px inspecionadas; a ausência dos vídeos impede equivalência visual integral com o Figma.
- Geometria de todos os elementos da Hero, Contexto, Diagnóstico, Decisão e menu comparada com a medição anterior: nenhuma alteração nas seis larguras. Home, scripts e assets anteriores preservados por comparação de hashes. Menu novamente testado com barras nativas do Chrome visíveis em 1024/1440 × 600/768/900 px: largura útil de 138 px, rótulos completos, sticky a 32 px e nenhuma rolagem interna. Conferidos quatro links por clique, alternância do indicador por scroll nas duas direções, nenhuma seleção na Hero, foco por Tab/Enter em Solução, entrada direta por hash, movimento reduzido e adaptação estática em viewport de 400 px de altura.

### Validação dos vídeos originais

- Todos os nove arquivos carregados e decodificados no Chrome. Verificados individualmente: reprodução automática silenciosa ao entrar na viewport, avanço do tempo, retorno ao início ao atingir o fim, `playsinline`, ausência de controles no modo normal e pausa ao sair da área visível. Com movimento reduzido, ficam pausados e oferecem controles nativos; reprodução manual confirmada nas emulações desktop e mobile.
- Slots conferidos após a decodificação em 320, 375, 412, 768, 1024 e 1440 px, incluindo a grade de microinterações. A altura mínima automática dessa grade foi removida com `min-height: 0`, evitando expansão causada pelas dimensões intrínsecas dos vídeos verticais. Preservados os recortes centrais, os gaps de 5/6 px e as proporções desktop/mobile; sem overflow horizontal ou erros de carregamento.
- Repetidos os testes dos textos e destaques desktop, geometria das seções anteriores, quatro âncoras, indicador ativo, teclado, movimento reduzido e menu em 1024/1440 × 600/768/900 px. Menu sem barras internas ou cortes; Home, seções anteriores e JavaScript preservados. Nenhuma seção futura implementada.
- A comparação visual usa quadros dos vídeos originais: a imagem muda naturalmente durante a reprodução. Continuam válidas as diferenças naturais de métricas tipográficas já documentadas; não foram aplicadas compensações de altura. Não há vídeos pendentes nesta seção.

### Estratégia — etapa 8.5

- Implementados “Como a estratégia virou produto” e “Estruturando o serviço além da interface”, com os quatro parágrafos e todos os destaques da versão desktop. A composição mobile mantém os mesmos textos, incluindo os negritos ausentes no frame mobile desatualizado. Não há diagramas, imagens, ícones, tabelas ou vídeos nesses nós; nenhum asset novo ou arquivo pendente.
- Seção `#estrategia` com título `h2` e subseção do serviço com `h3`. Helvetica LT Pro Bold 700 a 24 px, entrelinha normal nos títulos; Roman/Bold 400/700 a 16/24 px nos parágrafos. Intervalos: 16 px após os títulos, 24 px entre parágrafos, 51 px entre os blocos e após Solução no desktop; 48 px no mobile. Texto com altura natural, sem margens negativas ou compensações de renderização.
- Habilitado o quinto link nativo no HTML, inclusive sem JavaScript. Quatro destinos futuros continuam desabilitados. O observador existente descobre a seção automaticamente; a lógica foi complementada somente para reconhecer a última seção quando ela cabe inteira na viewport. Isso corrige a seleção em telas altas, nas quais o fim da página impede que seu início alcance a faixa de leitura. A seleção continua sendo limpa na Hero e atualizada na rolagem em ambas as direções. Nenhuma regra do menu sticky ou de seus contêineres foi alterada, nem a lógica dos nove vídeos de Solução.
- Chrome headless em 320, 375, 412, 768, 1024 e 1440 px: títulos, quatro parágrafos e destaques comparados automaticamente ao contexto desktop; mesmos textos em todas as larguras. Intervalos de 16/24/48/51 px conferidos; nenhum overflow horizontal ou sobreposição. A geometria de todos os elementos da Hero, Contexto, Diagnóstico, Decisão, Solução e menu permaneceu idêntica à medição anterior. Home e assets anteriores, incluindo os nove MP4, preservados por comparação de hashes.
- Menu testado com barras nativas visíveis em 1024/1440 × 600/768/900 px: largura útil de 138 px, sticky a 32 px, rótulos completos e nenhuma rolagem interna. Cinco âncoras verificadas por clique, indicador por scroll nas duas direções, nenhuma seleção na Hero, Tab/Enter com foco visível em Estratégia, entrada direta por hash e modo estático em 400 px de altura. Smooth scroll preservado; movimento reduzido usa rolagem imediata. Confirmados os nove vídeos em modo reduzido e a reprodução/pausa de Solução no modo normal.
- Capturas em 412/1440 px comparadas aos screenshots dos nós específicos. HelveticaLTPro-Roman/Bold efetivamente renderizadas, sem fallback. Nenhuma divergência visual relevante ou erro de carregamento; mantidas as pequenas diferenças naturais das métricas de linha, sem tentar igualar alturas totais. Verificações de sintaxe do JavaScript e `git diff --check` concluídas.

### Wireframes — etapa 8.6

- Implementados “Wireframes e decisão de navegação”, a descrição, a comparação das alternativas, o destaque em Light 32 px, os dois parágrafos de justificativa e a composição do fluxo por motivos. Mantidos textos e todos os negritos desktop nas telas menores. “Direção de marca e linguagem visual” é um bloco separado posterior e não foi incluído; Resultados e demais seções futuras permanecem ausentes.
- Helvetica LT Pro Bold 700 a 24 px com entrelinha normal no título, Light 300 a 32 px no destaque e Roman/Bold 400/700 a 16/24 px nos parágrafos. Intervalos de 16 px entre os grupos, 32 px após a comparação e entre destaque/justificativa, 24 px entre os parágrafos. Após Estratégia: 51 px no desktop e 48 px no mobile. Sem alturas fixas para textos ou compensações tipográficas.
- Downloads originais PNG fornecidos pelo contexto MCP: `../assets/images/libero-wireframes-navegacao.png` e `../assets/images/libero-wireframes-motivos.png`, ambos 1240 × 720 px. Os arquivos desktop/mobile são os mesmos; não há necessidade de alternância por `<picture>`. Slots de 824 × 475/476 no desktop e 380 × 221 no mobile, com recorte central FILL via `object-fit: cover`, sem distorcer as composições. As imagens usam dimensões intrínsecas, `loading="lazy"`, `decoding="async"` e descrições alternativas. Não foram recriados os wireframes em HTML.
- Habilitado o sexto link nativo, inclusive sem JavaScript. Três destinos futuros continuam desabilitados. `libero.js` foi preservado: a descoberta automática inclui Wireframes e mantém a identificação da última seção curta, a seleção vazia durante a Hero e a lógica dos nove vídeos de Solução. Nenhum vídeo ou novo asset pendente identificado em Wireframes.
- Validação no Chrome headless em 320, 375, 412, 768, 1024 e 1440 px: título, descrição, destaque e justificativas comparados ao contexto desktop, incluindo todos os negritos. Nenhum overflow horizontal ou sobreposição; a geometria de todos os elementos das seções anteriores e do menu permaneceu idêntica à medição inicial. Home, JavaScript e assets anteriores, inclusive os nove vídeos, preservados por hashes.
- As duas imagens foram carregadas e decodificadas nas seis larguras; conferidos os arquivos, dimensões intrínsecas, descrições, ordem, slots, recorte central e dimensionamento sem distorção. `min-height: 0` nos contêineres impede que a proporção intrínseca imponha uma altura maior que o slot FILL desktop. O detalhe interno dos wireframes fica naturalmente pequeno no mobile, como no Figma; os originais foram mantidos sem ampliar, recriar ou reorganizar suas telas.
- Menu testado com barras nativas visíveis em 1024/1440 × 600/768/900 px: seis links nativos funcionais, sticky a 32 px, largura útil de 138 px, rótulos completos e nenhuma rolagem interna. Conferidos indicador por scroll nas duas direções, ausência de seleção na Hero, foco visível por Tab/Enter em Wireframes, entrada direta por hash, smooth scroll, movimento reduzido e adaptação estática a 400 px de altura. Reprodução/pausa de Solução e controles manuais em movimento reduzido continuam funcionando. Sem erros de carregamento.
- Fontes reais HelveticaLTPro-Bold/Roman/Light confirmadas; capturas em 412 e 1440 px comparadas às referências. Mantidas as diferenças naturais de métricas tipográficas, sem compensar alturas totais. Nenhuma divergência visual relevante adicional identificada.

### Direção de marca — complemento da etapa 8.6

- Bloco sem link ou destino de menu, inserido depois de Wireframes e antes de Resultados. Implementados o título, os dois parágrafos e o destaque desktop “construída para sustentar a mesma ideia central da proposta: leveza, liberdade, conveniência emocional e jovialidade.”, além dos dois painéis originais. Mesmos textos em todas as larguras; sem vídeos novos.
- Imagens baixadas pelo URL do contexto MCP: `../assets/images/libero-marca-moodboard.png` (4096 × 2124) e `../assets/images/libero-marca-interface.png` (4096 × 2109). Os mesmos arquivos são usados no desktop e mobile, em slots de 824 × 460 e 380 × 213, respectivamente. Recorte central FILL via `object-fit: cover`, sem distorções; dimensões intrínsecas, `loading="lazy"`, `decoding="async"` e descrições alternativas.
- Helvetica LT Pro Bold 700 a 24 px com entrelinha normal no título, Roman/Bold 400/700 a 16/24 px nos textos. Gap interno de 16 px; 51 px após Wireframes no desktop e 48 px no mobile. O segundo parágrafo é centralizado e limitado a 817 px, conforme o desktop, ocupando a largura disponível nas telas menores. Alturas naturais, sem compensações tipográficas.
- A lista dos seis alvos observados e as seis âncoras não foram alteradas. A leitura de Direção de marca mantém Wireframes ativo. Corrigido apenas o retorno direto desse bloco à Hero (por exemplo, tecla Home): como nenhum alvo necessariamente cruza a faixa do observador nesse salto, um listener passivo limpa a seleção ao detectar a Hero. A lógica de vídeos e o comportamento sticky permanecem intactos.
- Chrome headless em 320, 375, 412, 768, 1024 e 1440 px: título, textos e destaque comparados ao contexto desktop; imagens decodificadas, arquivos e dimensões originais confirmados, recorte central e slots responsivos conferidos, segundo parágrafo centralizado e limitado corretamente. Sem overflow horizontal, cortes ou sobreposições. Todos os elementos das seções anteriores e do menu mantiveram a geometria anterior. Home e assets anteriores preservados por hashes.
- Os nove vídeos de Solução foram testados individualmente: autoplay silencioso, avanço do tempo, loop real no fim do arquivo, reprodução inline, ausência de controles no modo normal e pausa ao sair da viewport. Sem falhas de carregamento ou reprodução. Os arquivos MP4, seus elementos HTML, seus estilos e a lógica de reprodução não foram alterados.
- Menu novamente conferido em 1024/1440 × 600/768/900 px: seis links nativos, sticky, largura útil de 138 px, rótulos completos e ausência de barras internas. Indicador acompanhado por scroll, mantido em Wireframes durante Direção de marca e limpo no retorno direto à Hero. Lista observada conferida como `contexto`, `diagnostico`, `decisao`, `solucao`, `estrategia`, `wireframes`; nenhum alvo novo adicionado.
- Tab/Enter, foco visível, entrada por hash, movimento reduzido e adaptação estática do menu em 400 px de altura também validados. Fontes reais HelveticaLTPro-Roman/Bold confirmadas; screenshots de 412/1440 px comparadas ao Figma. Nenhuma divergência visual relevante ou arquivo pendente. Resultados e Limitações permanecem sem implementação.

Próximos conteúdos: Resultados e, em seguida, o bloco independente Limitações, aguardando instrução. Nenhum commit ou push realizado.
