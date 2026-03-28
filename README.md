#Projeto Acadêmico - FATEC Jacareí

📌 Cadastro de Usuários (Web App)

Aplicação web simples para cadastro de usuários contendo nome e email, com persistência em banco de dados PostgreSQL hospedado online.

🚀 Tecnologias utilizadas
HTML
CSS
JavaScript
Node.js
Express
PostgreSQL

📂 Funcionalidades
Cadastro de usuários
Armazenamento de nome e email
Integração com banco de dados PostgreSQL online
Estrutura básica de API (CRUD parcial)

🗄️ Banco de Dados

O banco de dados utilizado é o PostgreSQL, hospedado em ambiente online.

Exemplo de estrutura da tabela:
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL
);

⚙️ Como executar o projeto

1. Clone o repositório

2. Acesse a pasta
cd seu-repositorio

3. Instale as dependências
npm install

4. Configure as variáveis de ambiente

Crie um arquivo .env na raiz do projeto com as credenciais do banco:

*DB_HOST=seu_host
 *DB_USER=seu_usuario
 *DB_PASSWORD=sua_senha
 *DB_NAME=seu_banco
 *DB_PORT=5432

5. Execute a aplicação
npm start


Body (JSON):

{
  "name": "João",
  "email": "joao@email.com"
}
📌 Observações
Projeto com foco educacional
Estrutura simples para prática de integração front + back + banco
Pode ser expandido facilmente para incluir validações, autenticação e CRUD completo
