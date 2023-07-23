### npm init

### npm install --save express
no
### npm app.js

### npm install -g nodemon

### npm install --save-dev nodemon

### npm install --save sequelize-cli

//Sequelize-cli interface de linha de comando usada para criar modelos,
configurações e arquivos de migração para bancos de dados.
### npm install --save mysql2

//Iniciar o Sequelize-cli e criar o arquivo config
### npx sequelize-cli init

//Manipular variaveis de ambiente
### npm install dotenv --save

//Criar a Models usuarios
### npx sequelize-cli model:generate --name Users --attributes name:string, email:string

//Executar as migrations
### npx sequelize-cli db:migrate