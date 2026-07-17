# Patrícia Garboni — site oficial

MVP estratégico e técnico para a marca pessoal de Patrícia Garboni e o projeto **Cinquentei e Agora**.

## Stack

- Next.js 16 com App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Zod para validação
- Conteúdo inicial em arquivos TypeScript estruturados
- GitHub + Vercel
- Sanity preparado como evolução futura

## Estado do conteúdo

O projeto não inventa formação, métricas, depoimentos, eventos, marcas, preços, datas ou informações clínicas. Campos ainda não validados aparecem como:

```text
[INFORMAÇÃO A CONFIRMAR]
```

Antes da publicação, revise esses campos e os documentos em `docs/`.

## Instalação

```bash
npm install
cp .env.example .env.local
npm run dev
```

Abra `http://localhost:3000`.

## Comandos

```bash
npm run dev        # desenvolvimento
npm run typecheck  # TypeScript
npm run lint       # ESLint
npm run build      # build de produção
npm run check      # validação completa
npm run start      # servidor de produção
```

## Conteúdo

- Configuração institucional: `src/config/site.ts`
- Conteúdos e temas: `src/content/site-content.ts`
- Páginas: `src/app/`
- Componentes: `src/components/`
- Estratégia: `docs/PLANO-ESTRATEGICO.md`
- Checklist: `docs/CHECKLIST-LANCAMENTO.md`

A primeira versão usa arquivos estruturados por simplicidade e desempenho. Quando a equipe precisar editar conteúdos sem Git, conecte o Sanity por meio de um adaptador em `src/lib/` ou `src/integrations/`, preservando os tipos existentes.

## Formulários

Os formulários são validados no servidor e preparados para enviar JSON a webhooks privados:

- `NEWSLETTER_WEBHOOK_URL`
- `CONTACT_WEBHOOK_URL`

Sem webhooks, o ambiente de desenvolvimento valida os dados e informa que a integração ainda precisa ser configurada. Em produção, o formulário retorna indisponibilidade em vez de fingir que armazenou dados.

## Analytics e cookies

`NEXT_PUBLIC_GA_ID` só é carregado após consentimento explícito. Antes do lançamento, revise a política de cookies e ofereça uma forma permanente de reabrir as preferências.

## GitHub

```bash
git init
git add .
git commit -m "feat: cria MVP do site Patrícia Garboni"
git branch -M main
git remote add origin SEU_REPOSITORIO
git push -u origin main
```

O workflow `.github/workflows/quality.yml` executa TypeScript, ESLint e build em pushes e pull requests.

## Vercel

1. Envie o projeto ao GitHub.
2. Na Vercel, escolha **New Project** e importe o repositório.
3. Cadastre as variáveis de `.env.example` em **Project Settings → Environment Variables**.
4. Faça o primeiro deploy.
5. Configure o domínio e atualize `NEXT_PUBLIC_SITE_URL`.

Cada push gera um deployment. Pull requests recebem URLs de preview.

## Segurança

- Não envie `.env.local` ao GitHub.
- Nunca use `NEXT_PUBLIC_` em chaves privadas.
- Rotacione qualquer segredo exposto acidentalmente.
- Revise dependências e alertas do GitHub/Dependabot.
- Antes da produção, configure proteção contra spam e limites no provedor dos webhooks.

## Revisões obrigatórias antes do lançamento

- Revisão da Patrícia e equipe de marca.
- Revisão profissional dos conteúdos de saúde.
- Revisão jurídica das políticas.
- Testes de acessibilidade, SEO, formulários e desempenho.
