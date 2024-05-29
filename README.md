nome: Raul florentino, Thiago Souza, Lucas Noe, Luan da Silva e Lionel Oliveira

## Infolix - Desenvolvimento para WEB SERVICE
Este projeto é um site que exibe informações sobre diversos filmes, facilitando a busca e descoberta de filmes para assistir.

Servidor: 3000

# Telas
Login
Cadastro
Home
Informações
Dinâmica

# Configuração do Projeto
Para configurar o projeto, devemos comceçar instalando o NPM com o código( NPM init), após isso, instalamos o EXPRESS, com o código (NPM install express).
Para abrir o projeto, utilizamos o código (node index.js) e assim irá abrir o servidor no localhost 3000.


# Funcionamento
Após iniciar o servidor e abrir o projeto no navegador, você será direcionado para a tela de login. Se já tiver um login, basta inserir suas credenciais para acessar a tela Home. Caso contrário, clique em "Cadastrar" para realizar o cadastro de um novo usuário.

Telas do Projeto
Tela de Login:

Permite que os usuários façam login.
Redireciona para a tela Home após um login bem-sucedido.
Tela de Cadastro:

Permite que novos usuários se registrem no sistema.
Tela Home:

Exibe o catálogo de filmes disponíveis.
Redireciona para a tela de informações sobre o filme selecionado.
Tela de Informações:

Exibe informações detalhadas sobre o filme selecionado.
Puxa as informações diretamente de um arquivo JSON.
Possui três funcionalidades principais:
Exibir informações detalhadas do filme.
Fornecer uma rota para voltar à Home.
Tela dinâmica para avaliação do filme, permitindo que os usuários atribuam notas de 1 a 5 estrelas.
Observações
As rotas são configuradas de forma que a tela de login redireciona para a tela Home após a autenticação bem-sucedida.
A tela Home exibe o catálogo de filmes e redireciona para a tela de informações específicas de cada filme.
A tela de informações é alimentada por dados obtidos de um arquivo JSON.
