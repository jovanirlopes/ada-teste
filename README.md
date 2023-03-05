# Desafio Técnico - Backend

O propósito desse desafio é a criação de uma API que fará a persistência de dados de um quadro de kanban. Esse quadro possui listas, que contém cards.

## Rodando a aplicação atraves do Docker

### Para subir a aplicação Front + Back + DB basta usar o comando ele rodara os containeres com as configurações padrões.

```
> docker-compose up
```
### Para executar o Frontend executar os seguintes comandos:

```
> cd FRONT
> yarn
> yarn start

```
### Para executar o Backend em modo desenvolvimento

```
> cd BACK
> npm i
> npm run dev
```
### Para executar o Backend em produção
```
> cd BACK
> npm i
> npm run build
> npm run start
```
## Variáveis
### Casonho tenha necessidade existem algumas variaveis que podem ser personalizada em um arquivo .env são elas:

ALterar a porta em que o backend escutará.
```
PORT
```
Segredo do servidor para gerar os tokens.
```
JWT_SECRET
```
Login padrão da aplicação.
```
DEFAULT_LOGIN
```
Senha padrão da aplicação.
```
DEFAULT_PASSWORD
```
Qual banco de dados será usado ex. mariadb, mysql, postgre.
```
DB_TYPE
```
Endereço que o banco de dados está sendo executado.
```
DB_HOST
```
O nome do banco de dados que será utilizado.
```
DB_NAME
```
O usuário do banco de dados.
```
DB_USER
```
Senha do usuário do banco de dados.
```
DB_ROOT_PASSWORD
```