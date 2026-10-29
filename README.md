# vncsmachado.github.io

Portfólio de Vinicius Machado, Product Designer. Base estática para Home e Case LIBERÔ, destinada ao GitHub Pages. O Header e a Hero da Home foram implementados visualmente.

## Estrutura

```text
index.html                  Home
cases/libero.html           Case LIBERÔ
favicon.ico                 Favicon original preservado
assets/
  css/styles.css            Base compartilhada e tokens confirmados
  css/home.css              Header e Hero da Home
  css/libero.css            Estilos futuros do case
  js/main.js                Entrada para futuras interações
  images/                   Imagens
  icons/                    Ícones
  logos/                    Logos
  videos/                   Vídeos
  animations/               Assets de animação
  fonts/                    Somente fontes com distribuição web autorizada
  documents/                Currículo PDF (ainda não fornecido)
```

As pastas de assets usam `.gitkeep` para serem preservadas pelo Git enquanto estiverem vazias. Para novos arquivos, usar nomes descritivos em minúsculas, sem espaços ou acentos, separados por hífens.

## Decisões técnicas

- HTML semântico, CSS e JavaScript nativos, sem dependências ou build.
- Caminhos relativos funcionam na raiz do GitHub Pages, em subdiretórios e em um servidor local. O case usa `../assets/` e `../favicon.ico`.
- A base mantém estilos nativos do navegador, foco visível e semântica das listas. O espaçamento de leitura é provisório e não representa valores do Figma.
- As cores e medidas recuperadas do Header e da Hero são aplicadas em `home.css`, reutilizando os tokens globais existentes.
- CSS de cada página está separado do global. O JavaScript é carregado com `defer` e bloqueia a navegação do currículo enquanto ele estiver marcado com `aria-disabled="true"`.
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
- “Sobre mim” aponta para `#sobre-mim`, cuja seção será implementada posteriormente. O smooth scroll solicitado respeita `prefers-reduced-motion`.
- Fornecer `assets/documents/curriculo.pdf` e remover `aria-disabled="true"` do link no HTML para ativá-lo. O caminho relativo, `target="_blank"` e `rel="noopener"` já estão configurados; não há PDF fictício nem atributo `download`, permitindo visualização e download pelo visualizador do navegador.
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

- Famílias confirmadas no CSS do Adobe Fonts: `operetta-8`, `helvetica-lt-pro` e `roboto`; todas com 400 e 700, normal e italic. As variáveis globais `--font-operetta`, `--font-helvetica` e `--font-roboto` incluem fallbacks serif/sans-serif apropriados. Header e Hero usam suas respectivas fontes; os demais componentes mantêm seus estilos até a leitura dos respectivos designs.
- Identificar os frames desktop e mobile da Home e do Case LIBERÔ. O header desktop já consultado é o nó `507:102` do arquivo Figma `RXlxl9DLCRFMvs9gVWFD9k`.
- Consultar primeiro `get_metadata` para mapear a hierarquia; depois consultar `get_design_context` por seção, conferir `get_screenshot` e recuperar variáveis quando necessário. Evitar contexto de páginas completas devido ao timeout já observado.
- Recuperar assets por seção para estas pastas, priorizando SVG quando disponível; listar arquivos que precisarem de fornecimento manual após essa inspeção.
- Aguardar novas instruções antes de implementar as demais seções da Home. Não há animações adicionais.
