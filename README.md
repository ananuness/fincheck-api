<div align="center">
  <img src="./assets/fincheck-banner.png" alt="fincheck">
  <h1>💳️ Fincheck</h1>
</div>


<p align="center">
  API para gestão de finanças pessoais, mapeando contas bancárias e 
  transações. Pensado para ser algo simples e intuitivo.
</p>

## Features

- [x] Login de usuário
- [x] Cadastro de usuário
- [x] Visualização dos dados do usuário
- [x] Cadastro de contas bancárias
- [x] Listagem de contas bancárias
- [x] Edição de uma conta bancária
- [x] Exclusão de uma conta bancária
- [x] Listagem de categorias para transações
- [x] Cadastro de transações
- [x] Listagem de transações por mês e ano, conta bancária e tipo (INCOME/EXPENSE)
- [x] Edição de uma transação
- [x] Exclusão de uma transação

## Pré-requisitos

- Node.js >= 16
- Git
- PostgreSQL instalado ou um container com a imagem do PostgreSQL rodando
## Rodando a aplicação

Antes de rodar a API, garanta que preencheu corretamente o arquivo `.env`,
seguindo o exemplo passado no arquivo `.env.example`. Após isso, siga
os passos:

```bash
# instalando a CLI do nest globalmente
npm i -g @nestjs/cli

# instalando dependências
$ npm i

# rodando a API em watch mode
$ npm run start:dev
```

## Conceitos importantes

- **Controller:** responsável por receber as requisições, extrair as 
informações necessárias, validá-las e delegar o que será executado para 
o recurso responsável pela regra de negócio/lógica;

- **Service ou useCase:** responsável pela implementação das regras de 
negócio e/ou lógicas necessárias da aplicação

## Links uteis

https://www.prisma.io/docs/reference/api-reference/prisma-schema-reference
