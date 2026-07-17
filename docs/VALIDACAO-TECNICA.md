# Validação técnica

Data da validação: 17 de julho de 2026.

## Resultado

- `npm run typecheck`: aprovado.
- `npm run lint`: aprovado.
- `npm run build`: aprovado.
- `npm audit --omit=dev`: 0 vulnerabilidades conhecidas após override do PostCSS para 8.5.19.
- Inicialização do servidor de produção: aprovada.
- Resposta da página inicial: HTTP 200.
- Headers básicos de segurança: presentes.
- `robots.txt`: gerado.
- `sitemap.xml`: gerado.

## Rotas geradas

O build criou 24 saídas entre páginas, rotas dinâmicas pré-renderizadas e arquivos de metadados.

## Observações

- O domínio ainda usa `https://example.com` até `NEXT_PUBLIC_SITE_URL` ser configurada.
- Webhooks de contato e newsletter precisam ser configurados antes da publicação.
- Conteúdos marcados como `[INFORMAÇÃO A CONFIRMAR]` não devem chegar à produção sem validação.
