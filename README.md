# Betina Nail Landing Page

Site institucional para a Betina Nail, desenvolvido como landing page responsiva e otimizada para apresentar serviços, portfólio e contato.

## Visão geral

Esta aplicação é uma landing page moderna construída com Next.js 16 e Tailwind CSS. A estrutura foi ajustada para exportação estática e deploy no GitHub Pages com base de URL personalizada para o repositório `BetinaNail-LP`.

## Principais funcionalidades

- Layout responsivo para desktop e mobile
- Seções de hero, serviços, portfólio, depoimentos e contato
- Navegação interna com âncoras
- Design visual focado em serviços de beleza e estética
- Deploy automático via GitHub Actions

## Stack técnica

- Next.js 16 (App Router)
- React 19
- Tailwind CSS 4
- TypeScript
- GitHub Actions para deploy contínuo

## Deploy no GitHub Pages

A configuração inclui:

- `next.config.mjs` com `output: 'export'`
- `basePath: '/BetinaNail-LP'`
- `assetPrefix: '/BetinaNail-LP/'`
- Workflow `/.github/workflows/gh-pages.yml` para deploy automático ao branch `gh-pages`

O site ficará disponível em:

`https://jovemegidio.github.io/BetinaNail-LP/`

> Após o primeiro push para `main`, o GitHub Actions irá gerar a versão estática e publicar no branch `gh-pages`.

## Como executar localmente

```bash
pnpm install
pnpm dev
```

Para gerar a versão estática local:

```bash
pnpm run export
```

## Estrutura de repositório

- `app/` - páginas e componentes principais
- `components/` - blocos reutilizáveis do layout
- `public/` - ativos estáticos
- `styles/` - estilos globais
- `next.config.mjs` - configuração Next.js para exportação estática

## Nota para recrutadores

Este projeto demonstra habilidade em:

- configurar aplicações Next.js para deploy estático em GitHub Pages
- adaptar roteamento e assets para base de URL de repositório
- estruturar código em componentes reutilizáveis
- integrar CI/CD com GitHub Actions

Obrigado pela avaliação. Estou disponível para discutir detalhes técnicos e soluções implementadas.
