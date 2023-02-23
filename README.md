# Aplicação Back-End

Esta aplicação back-end foi desenvolvida em Node.js com o uso da biblioteca Express e do ORM Prisma, utilizando um banco de dados relacional MySQL. O objetivo da aplicação é gerenciar usuários, empresas, locais das empresas e responsáveis das empresas, garantindo a segurança dos dados e a integridade das informações.

# Tecnologias utilizadas

. Node.js
. Express
. Prisma
. MySQL
. Bcrypt
. Jsonwebtoken
. CORS
. DotEnv
. Typescript

# Funcionalidades

. Cadastro de usuário: permite cadastrar um novo usuário no banco de dados MySQL utilizando o ORM Prisma. A senha é criptografada utilizando a biblioteca Bcrypt para garantir a segurança das informações.

. Login de usuário: autentica o usuário utilizando JWT e expira automaticamente após um determinado tempo, garantindo a segurança das informações.

. Cadastro de empresas: permite cadastrar empresas no banco de dados e relacionar com o usuário responsável pelo gerenciamento.

. Cadastro de locais das empresas: permite cadastrar os locais das empresas e relacionar com a empresa e com o usuário responsável pelo gerenciamento.

. Cadastro de responsáveis das empresas: permite cadastrar os responsáveis das empresas e relacionar com a empresa e com o local.

# Como executar a aplicação

1. Clone o repositório para sua máquina.

2. Instale as dependências usando o comando npm install ou yarn.

3. Crie um banco de dados MySQL e configure o arquivo .env com as informações necessárias.

4. Execute as migrações do banco de dados utilizando o comando npx prisma migrate dev ou yarn prisma migrate dev.

5. Inicie a aplicação com o comando npm run dev ou yarn dev.

6. Acesse a aplicação utilizando uma ferramenta para testar API, como o Postman ou o Insomnia.

# Considerações finais

Esta aplicação back-end foi desenvolvida com o objetivo de gerenciar usuários, empresas, locais das empresas e responsáveis das empresas, utilizando um banco de dados relacional para garantir a integridade das informações. Utilizamos tecnologias modernas e seguras, como o Bcrypt para criptografar as senhas dos usuários e o JWT para garantir a autenticação dos mesmos. O uso do ORM Prisma facilita a manipulação do banco de dados e torna o código mais legível e organizado.