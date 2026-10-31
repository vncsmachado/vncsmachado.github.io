# vncsmachado.github.io

Portfólio de Vinicius Machado, Product Designer. Base estática para Home e Case LIBERÔ, destinada ao GitHub Pages. Introdução vetorial animada, Header, Hero, projeto LIBERÔ, Sobre mim e Footer implementados na Home.

## Estrutura

```text
index.html                  Home
cases/libero.html           Case LIBERÔ
favicon.ico                 Favicon original preservado
assets/
  css/styles.css            Base compartilhada e tokens confirmados
  css/home.css              Seções implementadas da Home
  css/libero.css            Estilos futuros do case
  js/main.js                Entrada para futuras interações
  images/                   Imagens
  icons/                    Ícones
  logos/                    Logos
  videos/                   Vídeos
  animations/               Assets de animação
  fonts/                    Somente fontes com distribuição web autorizada
  documents/                Currículo PDF
```

As pastas de assets usam `.gitkeep` para serem preservadas pelo Git enquanto estiverem vazias. Para novos arquivos, usar nomes descritivos em minúsculas, sem espaços ou acentos, separados por hífens.

## Decisões técnicas

- HTML semântico, CSS e JavaScript nativos, sem dependências ou build.
- Caminhos relativos funcionam na raiz do GitHub Pages, em subdiretórios e em um servidor local. O case usa `../assets/` e `../favicon.ico`.
- A base mantém estilos nativos do navegador, foco visível e semântica das listas. O espaçamento de leitura é provisório e não representa valores do Figma.
- As cores e medidas recuperadas das seções da Home são aplicadas em `home.css`, reutilizando os tokens globais existentes.
- CSS de cada página está separado do global. O JavaScript é carregado com `defer` e implementa a cópia do e-mail do Footer; a navegação do currículo usa apenas o link HTML nativo.
- O favicon existente foi preservado. Não há assets fictícios, URLs temporárias do Figma ou fontes Adobe redistribuídas.

## Visualização local

Abrir `index.html` diretamente no navegador funciona nesta base, pois os caminhos são relativos e não há requisições dinâmicas. Para desenvolvimento por HTTP, usar um servidor estático local com a raiz neste diretório (por exemplo, a extensão Live Server do VS Code, se disponível).

## GitHub Pages

O conteúdo é compatível com publicação estática a partir da raiz (`/`) do branch escolhido em **Settings → Pages → Deploy from a branch**. Não é necessário instalar pacotes ou executar build. Não há conteúdo que exija configuração especial do Jekyll.

A configuração remota de Pages ainda precisa ser conferida no GitHub. Esta etapa não executa commits, pushes, publicação ou alterações de configuração Git.

## Pendências e próxima etapa

### Header da Home

- Referências consultadas: metadados de `507:101` e `507:26`; contexto e screenshots apenas dos Headers `507:102` e `507:27`.
- Altura mínima de 144 px; logo de 48 × 48 px; padding vertical de 32 px; padding horizontal de 100 px no desktop e 16 px no mobile; links separados por 34 px, em vermelho `#F20505`, sobre fundo `#F8F9F4`.
- O Figma não especifica breakpoint: a transição para margens desktop em 48rem é uma decisão de implementação, sujeita à revisão nas próximas etapas. O layout usa Flexbox com quebra de linha conforme o Auto Layout retornado.
- A logo usa o original vetorial fornecido em `assets/logos/vinicius-machado.svg`, com `viewBox="0 0 407.72 347.83"`, um path e dois polígonos, sem imagens rasterizadas incorporadas. Renderizada com `object-fit: contain` em 48 × 48 px, preservando a proporção do SVG. O `alt=""` é intencional: o link já possui o nome acessível “Vinicius Machado — início”.
- A fonte do Header é Operetta 8 Regular (`operetta-8`, 400 normal), 20 px, entrelinha normal e sublinhado de 4%. O Adobe Web Project `kmd2lah` está integrado em Home e Case LIBERÔ pelo stylesheet oficial, sem redistribuir arquivos de fonte. Georgia/Times New Roman permanecem apenas como fallback para falha de carregamento.
- Validação após a integração Adobe Fonts: `document.fonts.load()` carregou as 12 combinações de família/peso/estilo em ambas as páginas; o Chrome confirmou `Operetta8-Regular` como fonte efetivamente renderizada no Header. As seis larguras foram verificadas novamente, sem overflow ou erros de carregamento. Tamanho, peso, entrelinha `normal`, sublinhado e espaçamentos CSS foram preservados.
- Validação inicial no Chrome headless em 320, 375, 412, 768, 1024 e 1440 px: Header de 144 px, logo carregada a 48 × 48 px, sem overflow horizontal nem erros de carregamento/execução. Screenshots em 412 e 1440 px conferidas com o Figma. A fonte temporária desloca o início do grupo de links cerca de 1,7 px à esquerda e o topo do texto 1 px abaixo das referências; não compensar com ajustes artificiais antes de carregar a fonte correta.
- “Sobre mim” aponta para a seção `#sobre-mim`, já implementada. O smooth scroll existente respeita `prefers-reduced-motion` e a âncora nativa transfere o foco para a seção, que tem `tabindex="-1"`.
- Currículo disponível em `assets/documents/curriculo.pdf`, acessível pelo link nativo do Header com `target="_blank"` e `rel="noopener noreferrer"`. O bloqueio anterior foi removido do HTML e do JavaScript. Sem atributo `download`, permitindo visualização no navegador e download pelo próprio visualizador.
- Na etapa do Header, nenhuma outra seção foi implementada ou alterada visualmente.

### Hero da Home

- Referências: metadados, contexto e screenshots dos nós `507:109` (desktop) e `507:34` (mobile), sem solicitar contexto dos frames completos. A variável `medium gray` retornou `#595856`.
- Elementos: nome em caixa alta, título semântico `h1` “Product Designer”, localização “Curitiba - PR” e texto de apresentação. Nenhum asset visual é necessário para a Hero.
- Helvetica LT Pro Bold (700 normal) no nome/localização a 24 px e no título a 64 px; Roman (400 normal) na descrição a 20 px. As entrelinhas de 24/63/20 px seguem as alturas das caixas de texto dos metadados, para manter a geometria em vez de depender de `normal` no navegador.
- A Hero inicia em y=192, com 48 px entre o Header e a seção. Em 412 px, altura de 630 px, padding de 32/16/48 px, intervalo de 256 px entre os grupos e de 20 px entre os textos; título limitado a 274 px e descrição a 374 px, sem exceder a largura disponível.
- Em 1440 px, altura de 215 px, nome em x=100/y=87,5 relativo à seção e apresentação em x=630/y=26, com 710 × 147 px. Os espaços verticais efetivos de 26/42 px seguem os metadados e a screenshot: o padding nominal 32/48 px exportado não cabe nessa altura fixa com o conteúdo de 147 px. A linha cinza inferior é desenhada internamente sem aumentar a altura da seção.
- Adaptação entre as referências: margens desktop em 48rem, como no Header; duas colunas a partir de 64rem, com gap fluido limitado aos 256 px da referência. Esses breakpoints são decisões de implementação; não há frame tablet fornecido. A altura pode crescer nas larguras menores para acomodar o texto sem overflow.
- Chrome headless verificado em 320, 375, 412, 768, 1024 e 1440 px, sem rolagem horizontal, sobreposição ou erros de carregamento. Screenshots de 412 e 1440 px comparadas com o Figma; posições e dimensões principais coincidem com os metadados. Permanecem pequenas diferenças nas métricas visuais/rasterização dos textos entre navegador e Figma, sem compensações artificiais nos glifos.
- O navegador confirmou `HelveticaLTPro-Bold` e `HelveticaLTPro-Roman` efetivamente renderizadas. Header, logo SVG, fontes globais, JavaScript e Case LIBERÔ foram preservados, incluindo navegação por teclado, smooth scroll e bloqueio do currículo pendente.
- Sem assets pendentes para a Hero. Aguardar instruções para as próximas seções.

### Projeto LIBERÔ da Home

- Referências: `get_metadata` nos frames desktop/mobile, seguido de `get_design_context` e `get_screenshot` exclusivamente nos nós `507:119` e `507:44`. Nenhum contexto de página completa foi solicitado.
- Card com capa original, identificação LIBERÔ/2024, separador SVG, título, descrição e CTA “Ler mais”. A capa ativa usa `assets/images/libero-capa-optimized.webp` (4096 × 2731 px), com variantes responsivas de 760/1240/2480 px; o separador original em `assets/icons/libero-separador.svg` (1 × 40 px). Não há dependências de URLs temporárias do Figma.
- Seção 48 px após a Hero, padding vertical de 32 px e margens laterais de 16 px no mobile/100 px a partir de 48rem, preservando o padrão existente. Capa com `object-fit: cover`, proporção 380/153 no mobile e 1240/500 no desktop; espaço até os detalhes de 46/48 px. Os detalhes têm altura mínima de 284 px e crescem conforme necessário em telas menores.
- Tipografia: Helvetica LT Pro Light 300 nos rótulos a 20 px, Bold 700 no título a 30/32 px e Roman 400 na descrição a 20 px; CTA com Operetta 8 Regular 400 a 20 px. O peso Light foi disponibilizado no kit Adobe durante a implementação e confirmado no Chrome como `HelveticaLTPro-Light`, sem substituição por outro peso.
- Títulos com larguras máximas de 365/504 px e entrelinhas de 29/31 px, conforme as caixas de texto do Figma. Descrição com limite de 381/468 px e entrelinha de 20 px. No mobile de 412 px, a descrição é limitada aos 380 px úteis para evitar o excesso de 1 px presente no metadado do Figma.
- Um único link HTML nativo, com nome acessível “Ler mais sobre o case LIBERÔ”, cobre todo o card por pseudo-elemento e leva a `cases/libero.html`. O foco por teclado contorna o card. Sem links aninhados, JavaScript adicional ou efeitos visuais no card completo; o hover do texto “Ler mais” está descrito abaixo.
- Validação no Chrome headless em 320, 375, 412, 768, 1024 e 1440 px: sem rolagem horizontal, sobreposição ou erros de carregamento; fontes e ambos os assets carregados. Capturas em 412/1440 px comparadas com as referências: seção de 547/896 px e capa de 380 × 153/1240 × 500 px, com pequenas diferenças de rasterização tipográfica.
- Navegação confirmada com Tab/Enter, clique na capa e clique no CTA, incluindo carregamento da página de destino. Header, Hero, logo SVG, fontes/estilos globais, JavaScript e arquivos do Case LIBERÔ preservados.
- Nenhum asset ou ajuste manual pendente nesta seção. O currículo também está disponível pelo Header.

### Sobre mim da Home

- Consultados `get_metadata`, `get_design_context` e `get_screenshot` nos nós `507:136` (desktop) e `507:61` (mobile). A implementação preserva os dois parágrafos, as oito ferramentas e as duas fotografias das referências. Naquela etapa, o Footer ainda não havia sido implementado.
- Seção semântica com `id="sobre-mim"`, título `h2`, subtítulo `h3`, lista de ferramentas e textos alternativos nas fotografias. Helvetica LT Pro Bold 700 em 32 px no título e 20 px em “Ferramentas:”; Roman 400 em 16 px na lista e nos parágrafos. Entrelinhas derivadas das caixas do Figma: 31/20/16 px; parágrafos separados por 18 px.
- Seção 72 px após o projeto; padding superior de 48 px e inferior de 32 px; margens de 16 px no mobile e 100 px a partir de 48rem. Traço cinza `#595856` desenhado internamente no topo, sem acrescentar altura.
- Em 412 px, a seção mede 1768 px, o grupo lateral 487 px, o espaço entre título e ferramentas 194 px e o grupo de apresentação inicia a 663 px do topo. As fotos de 340 × 340 px ficam empilhadas com intervalo de 36 px, 22 px após os parágrafos.
- Em 1440 px, a seção mede 663 px; o grupo lateral começa em x=100/y=48 relativo à seção, com 153 px entre título e ferramentas. A apresentação ocupa 709 px a partir de x=631/y=48. Fotos lado a lado de 340 × 340 px com intervalo de 29 px, 22 px após o texto.
- Adaptação intermediária: duas colunas a partir de 64rem, como na Hero; abaixo, organização mobile. Em telas menores que a largura da foto, os quadrados reduzem fluidamente; em desktop intermediário, as fotos dividem o espaço disponível sem overflow. Esses pontos de transição são decisões de implementação, pois não há referência tablet específica.
- Fotografias ativas: `assets/images/vinicius-machado-retrato.jpg` (896 × 1200 px, original preservado) e `assets/images/vinicius-machado-formatura-2040.webp` (2040 × 1360 px, derivada do JPEG original de 3648 × 2432 px). Não há ícones adicionais nesta seção.
- Recorte do retrato preservado conforme o Figma: imagem com altura de 133,93% da caixa, topo em -4,9% no mobile/-4,89% no desktop e deslocamento horizontal de -0,1% apenas no desktop. Formatura com `object-fit: cover` centralizado. As caixas quadradas limitam os recortes.
- Chrome headless validado em 320, 375, 412, 768, 1024 e 1440 px: fotos/fontes carregadas, oito ferramentas, dois parágrafos, sem overflow horizontal ou sobreposições. Screenshots de 412/1440 px comparadas com o Figma; geometria principal e enquadramentos conferidos, com pequenas diferenças de rasterização tipográfica.
- Link “Sobre mim” validado por clique e Tab/Enter: hash correto, foco na seção e rolagem suave; com movimento reduzido, comportamento `auto`. A rolagem respeita o limite do documento quando a seção inteira cabe no fim da página. Nenhuma lógica de rolagem foi duplicada e o Header não foi alterado.
- Header, Hero, projeto LIBERÔ, fontes/estilos globais, JavaScript, assets anteriores e Case LIBERÔ preservados. Navegação do card por mouse/teclado conferida novamente. Sem assets pendentes ou intervenção manual necessária para Sobre mim.

### Footer da Home

- Consultados metadados, contexto e screenshots exclusivamente dos nós `507:168` e `507:93`, sem contexto dos frames completos. Elemento `<footer>` após o conteúdo principal, com “Todos os direitos reservados™”, e-mail e três redes sociais. Nenhum asset novo é necessário.
- Fundo preto `#000000`, texto padrão `#F20505` e Operetta 8 Regular 400 a 20 px, reutilizando os tokens globais. Entrelinha de 24 px conforme as caixas do Figma; redes sublinhadas com espessura de 4%. Os hovers das redes sociais estão descritos abaixo.
- Em 412 px: altura de 420 px, padding de 32/16 px, intervalo de 194 px entre copyright e contatos, links empilhados com intervalo de 14 px e área de cada link ocupando a largura do grupo. Em 1440 px: altura de 204 px, margens de 100 px, copyright em x=100/y=90 relativo ao Footer e grupo de contatos de 590 px em x=750/y=90.
- Adaptação intermediária: margens desktop a partir de 48rem; composição horizontal com quebra de linha a partir de 64rem. Quando os dois grupos não cabem lado a lado, passam para linhas distintas, separados por 32 px. Em 320 px, o e-mail quebra em duas linhas e a altura cresce para 444 px, sem reduzir a fonte nem causar overflow.
- Destinos recuperados do Figma: Instagram `https://www.instagram.com/vncs_machado?srtk=Nm9iZGc0OWQyOGR5&utm_source=qr`, Twitter `https://x.com/vncs_machado?s=11` e LinkedIn `https://www.linkedin.com/in/viniciushmachado/`. Todos usam `target="_blank"` e `rel="noopener noreferrer"`. O e-mail mantém a aparência sem sublinhado da referência e agora é um botão que copia `vncs_machado@outlook.com`, sem abrir um cliente de e-mail.
- Validação no Chrome headless em 320, 375, 412, 768, 1024 e 1440 px, sem overflow horizontal, sobreposição ou erros de carregamento. Fonte efetiva confirmada como `Operetta8-Regular`. Screenshots desktop/mobile comparadas ao Figma; permanecem pequenas diferenças de rasterização tipográfica.
- Os quatro contatos receberam foco com Tab e contorno visível. LinkedIn aberto por Enter; Instagram e Twitter abertos por clique, com os destinos confirmados em novas abas. A página externa de cada serviço pode ter redirecionamentos ou exigir login.
- Cópia do e-mail implementada em `assets/js/main.js` com `navigator.clipboard.writeText()`, extraindo o endereço do texto existente. Botão nativo com `type="button"`, nome acessível “Copiar endereço de e-mail”, cursor pointer e foco visível, mantendo fonte/cor/espaçamentos. O sucesso só aparece após a promessa ser resolvida: “Copiado!” é anunciado por uma região `aria-live="polite"` e removido em 2 segundos. O feedback fica acima dos contatos, fora do fluxo, sem deslocamentos. Falha ou indisponibilidade mostram instrução de cópia manual, sem falso sucesso; cliques concorrentes e temporizadores anteriores são controlados.
- Ajuste de cópia validado no Chrome: leitura real da área de transferência após clique nas seis larguras; Enter e Espaço também copiaram o endereço correto. Confirmados o desaparecimento do sucesso, as falhas por permissão negada e API ausente, ausência de deslocamentos/overflow e preservação das redes sociais e demais seções. Nenhuma aba, navegação, aplicativo de e-mail ou envio de mensagem é acionado pela cópia.
- Header, Hero, projeto LIBERÔ, Sobre mim, fotos, logo, integração Adobe, estilos globais, JavaScript e Case LIBERÔ preservados. Navegação do card e da âncora Sobre mim, incluindo movimento reduzido, conferida novamente.
- Nenhum link fictício, asset pendente ou intervenção manual necessária para o Footer. O botão “Voltar ao topo” não foi implementado na Home nem no Case LIBERÔ.

### Hover e transições da Home

- Token global `--color-link-hover: #ae0606`. Aplicação apenas em Sobre mim, Currículo, texto “Ler mais”, Instagram, Twitter e LinkedIn, com `transition: color 200ms ease`. Os estilos padrão, fontes, sublinhados, medidas e destinos permanecem iguais.
- Regras de hover limitadas a `(hover: hover) and (pointer: fine)`, evitando estados persistentes em telas de toque. Com `prefers-reduced-motion: reduce`, as transições são removidas; foco visível e smooth scroll existentes foram preservados.
- O texto do CTA usa `.project-card__label` acima do pseudo-elemento que estende o link ao card. `:has(.project-card__label:hover)` aplica a cor apenas sobre “Ler mais”, preservando o clique na capa sem acionar hover visual no card inteiro. Nenhum novo efeito na logo, fotografias ou botão de copiar e-mail.
- Chrome headless: comparação do estado padrão antes/depois em 320, 375, 412, 768, 1024 e 1440 px, com geometria, fontes, cores, decorações e destinos idênticos; sem overflow. Confirmadas cor final `rgb(174, 6, 6)`, propriedade `color`, duração `0.2s`, função `ease` e interpolação de cor durante a transição.
- Testados movimento reduzido, emulação de toque sem hover, foco por Tab nos oito controles, navegação por card/CTA, âncora Sobre mim e smooth scroll, novas abas do currículo/redes sociais e cópia real do e-mail com feedback. JavaScript e Case LIBERÔ não foram alterados. Na etapa de hover, a animação da logo ainda não havia sido iniciada.

### Introdução e animação vetorial

- Introdução no mesmo `index.html`, como overlay fixo de tela cheia, fora do fluxo da Home. Fundo `#F8F9F4`, logo centralizada, altura `100svh` com fallback `100vh`. A Home permanece renderizada abaixo, começando pelo Header, sem reservar espaço para a introdução.
- SVG inline, três paths, cores, proporções, `viewBox` e `clipPath` preservados. A animação continua exclusivamente em CSS: V de baixo para cima em 1100 ms; esquerda entre 1000–1900 ms; direita entre 1080–1980 ms; zoom de 1 para 1.025 entre 1980–2580 ms. Sem loop, desaparecimento automático ou alteração da logo do Header.
- O primeiro gesto para baixo (wheel/touchpad, toque, ArrowDown, Espaço, PageDown ou End) inicia a saída, mesmo antes do fim da animação. O overlay sobe e perde opacidade com `500ms ease-in-out`; ao terminar, recebe `hidden` e não pode ser reencontrado rolando para cima. Não há redirecionamento nem temporizador para iniciar o avanço. Um fallback de 600 ms apenas finaliza uma saída já solicitada caso `transitionend` não seja emitido.
- Durante a introdução, a rolagem da Home fica suspensa e suas regiões usam `inert` temporariamente, evitando foco atrás do overlay. O gesto inicial revela a Home no topo; `touch-action: pinch-zoom` impede que a inércia desse gesto desloque o Header, preservando o zoom por pinça. Após a saída, os estados anteriores são restaurados e todos os listeners temporários são removidos com `AbortController`.
- O atalho “Avançar para a Home” aparece ao receber Tab. Enter ou as teclas de avanço removem o overlay e transferem o foco ao Header, sem prendê-lo. O smooth scroll existente permanece intacto. Com movimento reduzido, a logo aparece completa imediatamente e a saída não tem animação. Sem JavaScript, o overlay permanece oculto e a Home fica acessível desde o início.
- Chrome headless: entrada, permanência após a animação, interpolação da saída, primeira rolagem, retorno ao topo sem introdução/espaço vazio, limpeza de listeners, teclado e atalho, toque emulado, movimento reduzido e JavaScript desativado. Em 320, 375, 412, 768, 1024 e 1440 px, conferidas centralização e ausência de overflow; a geometria e os estilos da Home após a saída coincidem com a referência anterior.
- Links do currículo e das redes sociais, card/CTA LIBERÔ, âncora Sobre mim, foco e cópia real do e-mail foram conferidos após a remoção do overlay. Conteúdo das seções anteriores, SVG original, estilos globais e página do Case preservados.
- Limite da validação: Chrome headless e emulação de toque; aparelhos físicos, barras móveis reais e outros navegadores não foram testados.

- Famílias confirmadas no CSS do Adobe Fonts: `operetta-8`, `helvetica-lt-pro` e `roboto`; todas com 400 e 700, normal e italic, e Helvetica LT Pro também com Light 300 normal. As variáveis globais `--font-operetta`, `--font-helvetica` e `--font-roboto` incluem fallbacks serif/sans-serif apropriados. As seções implementadas usam suas respectivas fontes; os demais componentes aguardam a leitura dos designs.
- Identificar os frames desktop e mobile da Home e do Case LIBERÔ. O header desktop já consultado é o nó `507:102` do arquivo Figma `RXlxl9DLCRFMvs9gVWFD9k`.
- Consultar primeiro `get_metadata` para mapear a hierarquia; depois consultar `get_design_context` por seção, conferir `get_screenshot` e recuperar variáveis quando necessário. Evitar contexto de páginas completas devido ao timeout já observado.
- Recuperar assets por seção para estas pastas, priorizando SVG quando disponível; listar arquivos que precisarem de fornecimento manual após essa inspeção.
- Aguardar novas instruções antes de avançar para outra etapa. Além da introdução solicitada e das transições de hover, não há animações adicionais.

## Consolidação das mídias — etapa 10.2.3

Os 21 originais substituídos foram arquivados fora do repositório, com SHA-256 verificado, e removidos somente após confirmar a ausência de referências no site. O [manifesto de mídias](media-optimization.json) registra os caminhos ativos, as variantes responsivas, a correspondência com os originais e o backup permanente. As versões otimizadas e o retrato JPEG foram preservados; a estratégia de carregamento permanece inalterada.
