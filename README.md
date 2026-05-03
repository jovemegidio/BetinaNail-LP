<div align="center">

# Betina Balduti — Nail Designer

**Landing page institucional desenvolvida em Next.js 16, com exportação estática e deploy contínuo no GitHub Pages.**

[![Deploy to GitHub Pages](https://github.com/jovemegidio/BetinaNail-LP/actions/workflows/gh-pages.yml/badge.svg)](https://github.com/jovemegidio/BetinaNail-LP/actions/workflows/gh-pages.yml)
[![Next.js](https://img.shields.io/badge/Next.js-16-000000?logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](#licença)

[**Acessar site →**](https://jovemegidio.github.io/BetinaNail-LP/)

</div>

---

## Sumário

- [Visão geral](#visão-geral)
- [Demonstração](#demonstração)
- [Arquitetura e decisões técnicas](#arquitetura-e-decisões-técnicas)
- [Stack](#stack)
- [Estrutura do projeto](#estrutura-do-projeto)
- [Execução local](#execução-local)
- [Build estático](#build-estático)
- [Pipeline de deploy](#pipeline-de-deploy)
- [Sobre o desenvolvedor](#sobre-o-desenvolvedor)
- [Licença](#licença)

---

## Visão geral

Site institucional de uma profissional de nail design, projetado para apresentar serviços, portfólio, depoimentos e canal de contato. A aplicação enfatiza identidade visual, performance e descoberta orgânica, atendendo aos requisitos de uma vitrine digital de pequeno negócio.

A entrega contempla design responsivo, otimização tipográfica com fontes do Google, animações suaves, componentização atômica e fluxo automatizado de publicação.

---

## Demonstração

| Página | URL |
| --- | --- |
| Produção (GitHub Pages) | https://jovemegidio.github.io/BetinaNail-LP/ |
| Repositório | https://github.com/jovemegidio/BetinaNail-LP |

---

## Arquitetura e decisões técnicas

| Decisão | Justificativa |
| --- | --- |
| **Next.js 16 com `output: 'export'`** | Geração de site totalmente estático, eliminando custos de servidor e maximizando TTFB em CDN. |
| **`basePath` e `assetPrefix` configurados** | Compatibilidade com URL de subpasta do GitHub Pages (`/BetinaNail-LP`), garantindo carregamento correto de assets. |
| **App Router (React Server Components)** | Padrão moderno do Next.js, com melhor separação de responsabilidades e bundles mais enxutos. |
| **Tailwind CSS 4 + Radix UI** | Velocidade de desenvolvimento com primitivas acessíveis prontas para produção. |
| **Tipografia variável (Cormorant + Inter)** | Identidade serifada + sans-serif harmônica, carregada via `next/font` com self-hosting automático. |
| **Imagens otimizadas e estáticas** | `images.unoptimized: true` para compatibilidade com export estático sem servidor de otimização. |
| **CI/CD GitHub Actions** | Build reproduzível e publicação automática via `actions/deploy-pages` oficial. |
| **Arquivo `.nojekyll`** | Desativa o processamento Jekyll, evitando que pastas iniciadas com `_` (como `_next`) sejam ignoradas pelo Pages. |

---

## Stack

**Core**
- [Next.js 16](https://nextjs.org/) — framework React com App Router
- [React 19](https://react.dev/)
- [TypeScript 5.7](https://www.typescriptlang.org/)

**UI / Design System**
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/) — primitivas acessíveis
- [Lucide Icons](https://lucide.dev/)
- [shadcn/ui](https://ui.shadcn.com/) — componentes utilitários

**Formulários e validação**
- [React Hook Form](https://react-hook-form.com/)
- [Zod](https://zod.dev/)

**Tooling**
- pnpm como gestor de pacotes
- GitHub Actions como esteira de CI/CD

---

## Estrutura do projeto

```
BetinaNail-LP/
├── app/                      # App Router — layout e páginas
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/               # Componentes de seção e UI
│   ├── header.tsx
│   ├── hero.tsx
│   ├── about.tsx
│   ├── services.tsx
│   ├── portfolio.tsx
│   ├── testimonials.tsx
│   ├── contact.tsx
│   ├── footer.tsx
│   └── ui/                   # Primitivas reutilizáveis (shadcn/ui)
├── public/                   # Assets estáticos e .nojekyll
├── styles/                   # Estilos globais auxiliares
├── lib/                      # Utilitários
├── hooks/                    # Hooks compartilhados
├── .github/workflows/        # Pipeline de deploy
│   └── gh-pages.yml
├── next.config.mjs           # Configuração de export estático
├── tsconfig.json
└── package.json
```

---

## Execução local

**Pré-requisitos:** Node.js 20+ e pnpm 9+.

```bash
# clonar o repositório
git clone https://github.com/jovemegidio/BetinaNail-LP.git
cd BetinaNail-LP

# instalar dependências
pnpm install

# iniciar servidor de desenvolvimento
pnpm dev
```

A aplicação estará disponível em `http://localhost:3000`.

---

## Build estático

```bash
# gerar versão estática em ./out
pnpm run export
```

O diretório `out/` contém o site pronto para ser servido por qualquer CDN ou hospedagem estática.

---

## Pipeline de deploy

O fluxo de publicação é totalmente automatizado pelo GitHub Actions:

1. **Trigger:** todo `push` na branch `main` (ou execução manual via `workflow_dispatch`).
2. **Build:** instalação reproduzível com `pnpm install --frozen-lockfile` e geração do export estático.
3. **Artefato:** o conteúdo de `out/` é empacotado com `actions/upload-pages-artifact`.
4. **Deploy:** publicação atômica via `actions/deploy-pages`, com URL final exposta como output do job.

Permissões mínimas (`contents: read`, `pages: write`, `id-token: write`) seguem as recomendações de segurança do GitHub Pages baseado em OIDC.

> **Configuração necessária no repositório:** em **Settings → Pages**, definir _Source_ como **GitHub Actions**.

---

## Sobre o desenvolvedor

Este projeto integra meu portfólio de soluções front-end. Demonstra, de forma prática, a aplicação dos seguintes conhecimentos:

- Modelagem de aplicações React modernas com App Router
- Configuração avançada de exportação estática para hospedagens com URL em subpasta
- Componentização escalável e design system com Tailwind e Radix
- Implementação de pipelines de CI/CD em GitHub Actions com publicação OIDC
- Boas práticas de acessibilidade, semântica HTML e performance web

Estou aberto a oportunidades de colaboração e disponível para entrevistas técnicas.

**Contato:** [github.com/jovemegidio](https://github.com/jovemegidio)

---

## Licença

Distribuído sob a licença MIT. Consulte o arquivo `LICENSE` para mais informações.
