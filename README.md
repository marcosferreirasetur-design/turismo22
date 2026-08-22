# Observatório do Turismo de Bertioga

Aplicativo móvel piloto do **OMTB — Observatório Municipal do Turismo de Bertioga**. A primeira versão apresenta a arquitetura do painel executivo, oito eixos de inteligência e o catálogo inicial de fontes.

> **Importante:** os cartões sem valores e o gráfico marcado como “modelo” não representam estatísticas oficiais. A publicação de números depende de validação, metodologia, fonte e data de atualização.

## Executar

Requisitos: Node.js 20+ e npm.

```bash
npm install
npm start
```

Use o aplicativo Expo Go para abrir o QR code, ou execute `npm run android`, `npm run ios` ou `npm run web`.

## Escopo inicial

- painel executivo responsivo;
- oito eixos de indicadores;
- catálogo de fontes e rastreabilidade;
- diretriz de divulgação agregada e LGPD;
- estrutura compatível com Android, iOS e web;
- preparação para integração futura com bases IBGE/Seade, RAIS/Caged, Cadastur, Fazenda Municipal e pesquisas do trade/eventos.

## Próximas etapas

1. Validar identidade visual e conteúdo institucional.
2. Importar as bases oficiais e criar fichas metodológicas.
3. Implementar filtros por período, atividade e território.
4. Criar API segura, autenticação administrativa e rotina de atualização.
5. Configurar builds assinados para distribuição Android e iOS.

Projeto institucional em desenvolvimento. Prefeitura do Município de Bertioga — Secretaria de Turismo e Cultura.
