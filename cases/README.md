# Case LIBERÔ — etapa 8.1

Implementação em `libero.html`, com estilos em `../assets/css/libero.css` e script exclusivo em `../assets/js/libero.js`. A Home e seus arquivos não foram alterados.

## Referências e escopo

Arquivo Figma `RXlxl9DLCRFMvs9gVWFD9k`, desktop `507:332` e mobile `507:176`. Consultados os metadados gerais; contexto e screenshots apenas dos componentes necessários:

- Contexto desktop: `609:120`, incluindo Visão Geral e Contexto e problema.
- Mobile: Visão Geral `507:205` e Contexto e problema `507:208`.
- Menu: `610:136`; ícone de retorno: `I507:490;54616:25426`.
- Header de navegação: `507:177`. A logo SVG existente foi reutilizada.

Hero, detalhes do projeto, demais seções e Footer não foram implementados. Não há espaços vazios reservados para eles. Por isso, o Contexto aparece logo abaixo da navegação nesta entrega, antes da sua posição final na página completa. O título principal “Case LIBERÔ” é acessível, sem acrescentar texto visível ao design.

## Layout e tipografia

- Cores e famílias reutilizam os tokens globais. Helvetica LT Pro Roman 400 e Bold 700 a 16/24 px; títulos a 24 px; pergunta em Light 300 a 32 px com entrelinha normal. Operetta 8 Regular 400 a 20 px na navegação. Os pesos originais foram confirmados por consulta de propriedades em leitura no Figma.
- Margens de 16 px no mobile e 100 px a partir de 48rem. O menu aparece somente a partir de 64rem, quando há espaço para navegação e leitura lado a lado. Em 1440 px, menu em x=100 e conteúdo em x=520, com largura 824 px. Nas larguras intermediárias, a coluna de leitura é fluida.
- Menu sticky a 32 px do topo, com rolagem interna em viewports baixas. Relação vertical original preservada: Contexto começa 80 px abaixo do início do menu.
- Textos usam altura natural para acomodar o conteúdo em todas as larguras. O Figma contém caixas fixas, inclusive uma descrição mobile com altura declarada de 116 px que extrapola essa caixa no screenshot. Não foram reproduzidos esses limites como recorte ou sobreposição.
- Limitação visual: as métricas das fontes web e das caixas do Figma produzem diferenças de altura e alinhamento de linhas. O grupo Contexto mede aproximadamente 1232 px no desktop e 1378 px no mobile de 412 px, contra 1199 px e 1330 px nas referências. Famílias, pesos, tamanhos e entrelinhas explícitas foram mantidos, sem compensações tipográficas arbitrárias.

## Menu e próximas âncoras

Contexto é um link nativo funcional para `#contexto`, com smooth scroll e exceção para movimento reduzido. `IntersectionObserver` acompanha as seções reais e atualiza `aria-current="location"`; não depende de clique. Sem suporte à API, o primeiro item permanece selecionado e o link nativo funciona.

Os demais rótulos mantêm a aparência cinza do Figma e usam `aria-disabled="true"`, sem `href` para um destino inexistente. Não entram na sequência de Tab. `data-section` prepara a associação; ao adicionar uma seção real com o ID correspondente, o script ativa seu link e passa a observá-la. Ao implementar cada seção, adicionar também seu `href` no HTML para preservar a navegação sem JavaScript.

| Rótulo | ID futuro | Nó principal desktop |
|---|---|---|
| Diagnóstico | `diagnostico` | `507:361` (incluir Conflito `507:472`) |
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

Nenhum vídeo foi identificado no Contexto; nenhum arquivo está pendente para esta seção. Os recursos de etapas futuras ainda precisam ser inspecionados individualmente; um PNG retornado pelo MCP não comprova a disponibilidade de um vídeo original.

Para vídeos futuros, usar arquivos locais em `../assets/videos/`, com `<video autoplay muted loop playsinline preload="metadata">` e `<source type="video/mp4">`. O script do Case prepara pausa fora da viewport e retomada na entrada. Com movimento reduzido, desativa autoplay, pausa e oferece controles nativos; falhas de autoplay também liberam controles. Fornecer um poster original quando disponível. A reprodução real não pode ser validada sem os arquivos de vídeo; não foram criados substitutos.

## Validação

Chrome headless em 320, 375, 412, 768, 1024 e 1440 px: imagens e fontes carregadas, sem overflow horizontal, menu exclusivo do desktop, posição sticky, âncora Contexto, foco por teclado, atalho de conteúdo, movimento reduzido e retorno à Home. As fontes efetivamente renderizadas foram verificadas como HelveticaLTPro-Roman, HelveticaLTPro-Bold e HelveticaLTPro-Light. Capturas de 412 e 1440 px comparadas às referências dos componentes.

Próxima seção de conteúdo: Diagnóstico, incluindo o bloco Conflito. A Hero do Case continua pendente e deverá ser solicitada em etapa própria. Nenhum commit ou push realizado.
