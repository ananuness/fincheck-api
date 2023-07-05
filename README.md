# Fincheck

<p align="center">
  API para gestão de finanças pensado para ser algo simples e intuitivo.
</p>

## Rodando a aplicação

```bash
# instalando dependências
$ npm i

# rodando o app em desenvolvimento
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Conceitos importantes

- **Controller:** responsável por receber as requisições, extrair as informações
necessárias, validá-las e delegar o que será executado para o recurso responsável 
pela regra de negócio/lógica;

- **Service ou useCase:** responsável pela implementação das regras de negócio 
e/ou lógicas necessárias da aplicação

## Links uteis

https://www.prisma.io/docs/reference/api-reference/prisma-schema-reference
