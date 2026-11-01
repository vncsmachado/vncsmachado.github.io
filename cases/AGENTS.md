# Referências do Case LIBERÔ

- Desktop do Figma é a fonte principal e definitiva de conteúdo e a referência visual desktop.
- Mobile é referência de composição, disposição, dimensionamento e comportamento responsivo. Sempre utilizar os textos desktop, mesmo quando o frame mobile tiver outra redação.
- Não criar variantes de conteúdo por breakpoint. Preservar os textos, a pontuação e os destaques desktop, permitindo quebras de linha e alturas naturais.
- Aplicar esta orientação às revisões e a todas as próximas seções do Case, sem depender de nova solicitação.
- O menu representa os marcos narrativos principais, não todos os blocos. Direção de marca (após Wireframes e antes de Resultados) e Limitações (após Resultados) são blocos independentes: não adicionar links para eles ao menu nem incluí-los na lista de seções observadas pela navegação.

## Manutenção técnica

- Antes de alterar o Case, conferir `README.md` neste diretório e o `../README.md` principal contra os arquivos reais. Preservar o design, a redação desktop, fontes e tokens; não compensar diferenças imperceptíveis de métricas com alturas fixas ou margens negativas.
- Em alterações guiadas pelo Figma, usar o MCP e a skill local `figma-design-to-code` antes de `get_design_context`. Mapear com `get_metadata`, consultar contexto e screenshot de nós específicos; evitar contexto de frames completos por risco de timeout. Nunca inventar conteúdo ou substituir recursos ausentes por placeholders.
- Estilos e comportamentos do Case pertencem a `../assets/css/libero.css` e `../assets/js/libero.js`. Footer compartilhado pertence a `../assets/css/footer.css` e `../assets/js/footer.js`. Usar caminhos relativos, HTML semântico e links nativos, sem dependências novas desnecessárias.
- Preservar as nove âncoras reais, `aria-current="location"`, a linha de leitura geométrica a 13%, atualizações agrupadas por requestAnimationFrame, seleção vazia na Hero e Conclusão durante o Footer. Menu apenas no desktop: manter sticky, ausência de overflow interno e adaptação estática abaixo de 484 px de altura.
- Preservar os MP4s otimizados, fontes em `data-src`, preload inicial none, antecipação de 400 px, separação entre carregamento e reprodução e alternativa de movimento reduzido. Consultar `../media-optimization.json` para recursos ativos; originais arquivados não são caminhos de distribuição.
- Preservar as correções de contraste e a navegação à âncora da Home sem interferência da introdução. A decisão de acessibilidade A05 está centralizada no README principal; não implementar controles adicionais nem declarar conformidade WCAG integral por iniciativa própria.
