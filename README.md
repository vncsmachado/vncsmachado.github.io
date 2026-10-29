# vncsmachado.github.io

Portfólio de Vinicius Machado, Product Designer. Base estática para Home e Case LIBERÔ, destinada ao GitHub Pages. Apenas o Header da Home foi implementado visualmente.

## Estrutura

```text
index.html                  Home
cases/libero.html           Case LIBERÔ
favicon.ico                 Favicon original preservado
assets/
  css/styles.css            Base compartilhada e tokens confirmados
  css/home.css              Estilos futuros da Home
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
- As cores e medidas recuperadas do Header são aplicadas em `home.css`, usando os tokens globais de cor.
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
- Nenhuma outra seção foi implementada ou alterada visualmente.

- Famílias confirmadas no CSS do Adobe Fonts: `operetta-8`, `helvetica-lt-pro` e `roboto`; todas com 400 e 700, normal e italic. As variáveis globais `--font-operetta`, `--font-helvetica` e `--font-roboto` incluem fallbacks serif/sans-serif apropriados. Apenas o Header recebe aplicação tipográfica nesta etapa; os demais componentes mantêm seus estilos até a leitura dos respectivos designs.
- Identificar os frames desktop e mobile da Home e do Case LIBERÔ. O header desktop já consultado é o nó `507:102` do arquivo Figma `RXlxl9DLCRFMvs9gVWFD9k`.
- Consultar primeiro `get_metadata` para mapear a hierarquia; depois consultar `get_design_context` por seção, conferir `get_screenshot` e recuperar variáveis quando necessário. Evitar contexto de páginas completas devido ao timeout já observado.
- Recuperar assets por seção para estas pastas, priorizando SVG quando disponível; listar arquivos que precisarem de fornecimento manual após essa inspeção.
- Aguardar novas instruções antes de implementar as demais seções da Home. Não há animações adicionais.
