# Case LIBERÔ — etapas 8.1 e 8.2

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

A Hero e os detalhes do projeto aparecem antes do Contexto. O título original da Hero é o único `h1` da página. As seções posteriores ao Diagnóstico e o Footer ainda não foram implementados; não há placeholders para elas.

## Layout e tipografia

- Cores e famílias reutilizam os tokens globais. Helvetica LT Pro Roman 400 e Bold 700 a 16/24 px; títulos a 24 px; pergunta em Light 300 a 32 px com entrelinha normal. Operetta 8 Regular 400 a 20 px na navegação. Os pesos originais foram confirmados por consulta de propriedades em leitura no Figma.
- Margens de 16 px no mobile e 100 px a partir de 48rem. O menu aparece somente a partir de 64rem, quando há espaço para navegação e leitura lado a lado. Em 1440 px, menu em x=100 e conteúdo em x=520, com largura 824 px. Nas larguras intermediárias, a coluna de leitura é fluida.
- Menu sticky a 32 px do topo, sem rolagem interna ou limite de altura. Abaixo de 484 px de altura, usa `position: static` e a rolagem normal da página. Relação vertical original preservada: Contexto começa 80 px abaixo do início do menu.
- Textos usam altura natural para acomodar o conteúdo em todas as larguras. O Figma contém caixas fixas, inclusive uma descrição mobile com altura declarada de 116 px que extrapola essa caixa no screenshot. Não foram reproduzidos esses limites como recorte ou sobreposição.
- Limitação visual: as métricas das fontes web e das caixas do Figma produzem diferenças de altura e alinhamento de linhas. O grupo Contexto mede aproximadamente 1232 px no desktop e 1378 px no mobile de 412 px, contra 1199 px e 1330 px nas referências. Famílias, pesos, tamanhos e entrelinhas explícitas foram mantidos, sem compensações tipográficas arbitrárias.

## Menu e próximas âncoras

Contexto e Diagnóstico são links nativos funcionais para `#contexto` e `#diagnostico`, com smooth scroll e exceção para movimento reduzido. Conflito pertence à seção Diagnóstico e mantém esse item ativo. `IntersectionObserver` acompanha as seções reais e atualiza `aria-current="location"`; não depende de clique. A faixa de observação vai de 12% a 13% da altura da viewport. Enquanto Contexto estiver abaixo dessa faixa, nenhum item fica ativo; retornar à Hero também limpa a seleção. A Hero não foi adicionada ao menu. Sem suporte à API, os links nativos continuam funcionando sem indicação automática de seção ativa.

Os demais rótulos mantêm a aparência cinza do Figma e usam `aria-disabled="true"`, sem `href` para um destino inexistente. Não entram na sequência de Tab. `data-section` prepara a associação; ao adicionar uma seção real com o ID correspondente, o script ativa seu link e passa a observá-la. Ao implementar cada seção, adicionar também seu `href` no HTML para preservar a navegação sem JavaScript.

| Rótulo | ID futuro | Nó principal desktop |
|---|---|---|
| Decisão | `decisao` | `609:121` |
| Solução | `solucao` | `609:122` |
| Estratégia | `estrategia` | `507:419` (incluir Estrutura do serviço `507:422`) |
| Wireframes | `wireframes` | `507:425` (avaliar agrupamento com Marca `507:435`) |
| Resultados | `resultados` | `507:443` (incluir Limitações `507:446`) |
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

Próxima seção de conteúdo: Decisão. Nenhum commit ou push realizado.
