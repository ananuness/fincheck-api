<div align="center">
  <img src="./assets/fincheck-banner.png" alt="fincheck">
  <h1>💳️ Fincheck</h1>
</div>


<p align="center">
  API para gestão de finanças pessoais, mapeando contas bancárias e transações. 
  Pensado para ser algo simples e intuitivo.
</p>

## 📍 Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes 
ferramentas: [Git](https://git-scm.com), 
[Node.js >= 16](https://nodejs.org/en/). Além de ter o 
[PostgreSQL](https://www.postgresql.org/download/) instalado ou um 
container com a imagem do PostgreSQL rodando
## ⚙️ Rodando a aplicação

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

## 🚀 Features

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

## 🌐 Rotas

### POST /auth/signup

### POST /auth/signin

### GET /users/me

### GET /categories

### POST /bank-accounts

### GET /bank-accounts

### PUT /bank-accounts/:id

### DELETE /bank-accounts/:id


## 🔗 Links úteis

- Documentação do [Nestjs](https://docs.nestjs.com/)
- [Definindo datasource no Prisma](https://www.prisma.io/docs/reference/api-reference/prisma-schema-reference)
- Documentação do [Prisma](https://docs.nestjs.com/recipes/prisma#set-up-prisma) 
usado com o Nestjs

<hr>

<p align="center">
  Feito com 💚 por 
  <a href="https://www.linkedin.com/in/ana-beatriz-nunes/">Ana Beatriz Nunes</a>
</p>