# Vinicius Machado — Product Designer

Portfólio profissional desenvolvido para apresentar minha abordagem em Product Design, UX/UI Design e desenvolvimento de interfaces digitais.

O projeto foi criado a partir de uma identidade visual própria, com layouts desenvolvidos no Figma e implementação em HTML, CSS e JavaScript, sem utilização de frameworks ou templates.

**[Acessar portfólio](https://vncsmachado.github.io/)**

---

## Projeto em destaque — LIBERÔ

A **LIBERÔ** é uma proposta de plataforma digital desenvolvida como Trabalho de Conclusão de Curso em Design.

O projeto explora uma alternativa para tornar as viagens mais práticas, permitindo que viajantes aluguem itens diretamente de estabelecimentos comerciais no destino, reduzindo a necessidade de transportá-los na bagagem.

O Case apresenta o processo de design, incluindo pesquisa, definição do problema, decisões estratégicas, desenvolvimento da solução, prototipação e reflexões sobre os resultados e possibilidades futuras.

A LIBERÔ é um projeto acadêmico e conceitual. Suas propostas de impacto e evolução não representam resultados de um produto lançado comercialmente.

**[Explorar o Case LIBERÔ](https://vncsmachado.github.io/cases/libero.html)**

## Tecnologias e ferramentas

- **HTML5:** estrutura semântica das páginas.
- **CSS3:** layouts responsivos, estilos e animações.
- **JavaScript:** interações, navegação e comportamentos dinâmicos.
- **Figma:** design das interfaces e referências visuais.
- **Adobe Fonts:** integração das famílias tipográficas da identidade visual.
- **Git e GitHub:** versionamento e gerenciamento do código.
- **GitHub Pages:** hospedagem e publicação do site.

A implementação utiliza tecnologias nativas da Web, sem frameworks ou processo de build.

## Funcionalidades

### Home

- Introdução animada da identidade visual, com saída automática após 3 segundos ou antecipada por interação.
- Apresentação profissional e acesso ao Case LIBERÔ.
- Seção Sobre mim, com ferramentas e informações profissionais.
- Currículo disponível em PDF.
- Links para redes sociais e funcionalidade de copiar e-mail.

### Case LIBERÔ

- Apresentação do projeto e de seu processo de desenvolvimento.
- Nove seções principais e dois blocos complementares.
- Menu lateral com navegação por âncoras e identificação automática da seção ativa.
- Sete demonstrações de fluxos e duas de microinterações em vídeo.
- Layout responsivo para diferentes tamanhos de tela.
- Imagens e vídeos otimizados, com carregamento progressivo.

## Estrutura do projeto

```text
/
├── index.html
├── favicon.ico
├── cases/
│   ├── libero.html
│   ├── README.md
│   └── AGENTS.md
├── assets/
│   ├── css/
│   │   ├── styles.css
│   │   ├── home.css
│   │   ├── libero.css
│   │   └── footer.css
│   ├── js/
│   │   ├── main.js
│   │   ├── libero.js
│   │   └── footer.js
│   ├── images/
│   ├── icons/
│   ├── logos/
│   ├── videos/
│   ├── animations/
│   ├── fonts/
│   └── documents/
└── media-optimization.json
```

Para informações específicas sobre a arquitetura e as decisões técnicas do Case, consulte a [documentação da LIBERÔ](cases/README.md).

## Desempenho e acessibilidade

O portfólio incorpora práticas de otimização e acessibilidade, incluindo:

- HTML semântico e navegação por teclado.
- Indicadores de foco e contraste de cores revisado.
- Suporte à preferência por movimento reduzido.
- Imagens em WebP e vídeos MP4 otimizados.
- Carregamento sob demanda de recursos visuais.
- Adaptação responsiva e suporte a diferentes configurações de leitura.

**Limitação conhecida:** os vídeos são reproduzidos automaticamente e em loop, sem controle permanente de pausa no modo padrão. Essa decisão mantém uma limitação em relação ao critério WCAG 2.2.2; portanto, o projeto não declara conformidade integral com WCAG 2.2 AA.

## Execução local

Para visualizar o projeto localmente:

1. Clone o repositório.
2. Abra a pasta no Visual Studio Code ou editor de sua preferência.
3. Inicie um servidor HTTP local, como a extensão Live Server.
4. Acesse `index.html` para visualizar a Home e `cases/libero.html` para acessar o Case.

Algumas funcionalidades, como a cópia de e-mail, dependem de um contexto seguro (`localhost` ou HTTPS).

## Publicação

O portfólio está hospedado no GitHub Pages, utilizando a branch `main` e o diretório raiz do repositório.

**Site:** https://vncsmachado.github.io/

---

Desenvolvido por **Vinicius Machado**.
