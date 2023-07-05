# NestJS: falando sobre o Framework

A grande diferença do Nest para frameworks como express ou fastify, é o fato 
dele ser "parcialmente opinado", ou seja, ele é muito flexível. Então, ao mesmo 
tempo que ele traz uma opinião de como devemos codar nossa aplicação, ele 
também deixa as "portas abertas" para conseguirmos estruturar nosso projeto, 
seguir patterns e usar quaiquer ferramentas que quisermos. 

> Frameworks opinados dizem ou tentam dizer como você deve programar, organizar
> arquivos, onde cada funcionalidade deve estar etc. A exemplo disso, temos o
> Adonis.

Debaixo dos panos, o Nest faz uso de estruturas de servidor HTTP robustas como o
Express (padrão) e, opcionalmente, pode ser configurado para usar o Fastify 
também. Além de combinar elementos de Programação Orientada à Objetos (POO),
Programação Funcional (PF) e Programação Funcional Reativa (PFR).

Por exemplo, apenas com a parte de banco de dados, ele permite uso de diversos
ORMs (*Object-Relational Mapping*) como o Prisma, TypeORM, Sequelize etc.
Inclusive, oferece um passo a passo bem rico em sua própria documentação para
esses ORMs.

No fim, o Nest é bacana para dar um norte do que você pode fazer, mas ainda te
deixando livre para fazer suas escolhas e oferecendo um conteúdo de como fazer
isso.

## Conceitos importantes

Alguns conceitos-base importantes que são abordados no Nest e são necessários 
para poder trabalhar com ele, são:

### Controllers

Recebem as requisições HTTP, fazem o tratamento e validação dos dados e
repassam para a camada de services, para executarem suas responsabilidades. Além 
disso, os controllers são responsáveis, inclusive, por definir as rotas da 
aplicação e o que cada uma fará. 

Essa correlação é definida através de **Decorators**, que resumidamente são 
*currying functions*, ou seja, uma função que retorna outra função, com a
finalidade de adicionarmos comportamentos em uma classe, método, atributo etc. 
Por exemplo:

```js
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
```

O decorator `@Controller()` serve para adicionar o comportamento de controlador,
à classe `AppController`, que irá lidar com as requisições HTTP e assim por 
diante. Além de aceitar como argumento, uma string, a base url para todas 
requisições incluídas nesse controller ou, se vazio, será a rota raíz.

Já o decorator `@Get()` serve para informar que queremos uma rota GET e que será
resolvida pelo método `getHello()`. Como também, recebe como parâmetro uma 
string informando qual é a rota específica desse endpoint.

O que, para os desenvolvedores que já tiveram contato com o desenvolvimento de 
APIs Java com Spring, é um conceito já conhecido por *annotations*.

### Services

A camada de services no frontend, por exemplo, é onde fazemos nossas requisições
à serviços externos. Porém, há um outro conceito que pode ser atribuído ao
service, que é ser a camada que estará a **regra de negócio** da aplicação.
Essas regras podem estar em uma camada nomeada por *useCases*, por exemplo, mas 
aqui no Nest os casos de uso, as regras são os services. Além de ser nessa
camada que manipulamos o banco de dados.

Apesar do Nest oferecer a liberdade para utilizarmos a nomenclatura que
preferirmos, é interessante conhecer e seguir o que o recomendado também.

### Injeção de dependências

Observando o service do Nest gerado inicialmente, notamos que existe um 
decorator chamado `@Injectable()` e ele está diretamente ligado à esse conceito
de injeção de dependências. E observando o controller gerado, vemos que o
service é **passado no construtor** de maneira privada e não é instanciado em
momento algum. 

O que nos diz que o controller **apenas receberá** as dependências necessárias 
dele, ou seja, precisamos *injetar* as dependências nele através de seu 
construtor, o que significa que sua classe 
**não é mais responsável por criar ou buscar os objetos dos quais depende**,
apenas passa a requerir a injeção dessa dependência.

Dito isso, o decorator *Injectable* ajuda ao Nest entender que ele precisa criar
uma instância da classe decorada e injetar onde está sendo requerida, deixando
essas instâncias prontas para uso. A vantagem disso é:

- maior facilidade de refatoração;
- possibilidade de criação de mocks, facilitando os testes unitários;

### Modules

Os módulos em Nest são como se fossem caixas, na qual organizamos os controllers,
os services de uma funcionalidade, entidade etc, afim de dividir melhor a
aplicaçao, por exemplo, determinando quais serão os controllers e services que
estarão num módulo apenas para a entidade Users, mas lembrando que essa
organização pode ser feita por funcionalidades e podem se conversar entre os
módulos da aplicação. 

Tanto é que, por padrão, os módulos não se conversam entre si, mas ainda assim, 
se necessário, é possível fazer importação de módulos.

Além dos módulos oferecerem a facilidade de não precisarmos criar nenhuma
instância no projeto, pois tudo isso é feito automaticamente pelo Nest através
desses módulos gerados:

```bash
@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
```

É nesse módulo onde informaremos todos os módulos que criarmos em `imports`. E 
dada essa informação o Nest irá gerar todas as instâncias necessárias. Então 
resumindo, os módulos têm dois papéis:

- Separar a aplicação em módulos para entidades, funcionalidades etc;
- Gerar todas as instâncias necessárias para a aplicação rodar.

### Pipes

À grosso modo, os pipes são classes anotadas com `@Injectable()`, que ficarão
entre a *Request* que o cliente está enviando e o *Route Handler*, que são os 
decorators de rota dos métodos como o `@Get()`, ou seja, antes do controller,
agindo basicamente como um *middleware*. E esses pipes têm dois casos de uso:

- **Transformation:** transforma os dados para o formato desejado;

- **Validation:** valida as entradas, se forem válidas passam adiante, senão, 
uma exceção é lançada;

## CLI do Nest

Diferente do express que apenas vamos adicionando os arquivos e instalamos ele 
via npm, o Nest oferece uma CLI (interface de linha de comando), que serve para
criar o projeto e gerar alguns arquivos, o boilerplate para nossa aplicação.
Para instalar, basta rodar globalmente o comando:

```bash
npm i -g @nest-js/cli

nest new <project-name> # cria um novo projeto nest
```

#### Comandos básicos

```bash
# gera apenas um arquivo de módulo
nest g module <module-name>

# gera o módulo, controller e o service.
# Irá perguntar com que quer trabalhar
# REST API, GraphQL (code/schema first),
# Microservice ou WebSockets. E se 
# gostaria de gerar os endpoints no
# controller 
nest g resource <resource-name>
```