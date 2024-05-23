const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const PORT = 3000;
const PORT2 = 8080;
const filmes = require('./filmes.json');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));


const usuarios = [
    {id:1,nome:"Raul", email:'raul@lindo.com', senha:'123'},
    {id:2,nome:"leo", email:'leo@teste.com', senha:'123'},
    {id:3,nome:"ze", email:'ze@teste.com', senha:'123455'},
    {id:4,nome:"ruela", email:'ruela@teste.com', senha:'12345'}
];

app.get('/login', (req, res)=> {
    res.sendFile(path.join(__dirname,'public', 'login.html'));
});


app.post('/login', (req, res) => {
    const { email, senha} = req.body;

    const usuario = usuarios.find(u=> u.email === email);

    if(!usuario || usuario.senha !==senha){
        return res.status(401).send('Credenciais inválidas');
    }

    res.redirect('/index.html');
});

app.listen(PORT, () =>{
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

app.listen(PORT2, () =>{
    console.log(`Servidor rodando em http://localhost:${PORT2}`);
});

app.get('/sucesso', (req, res)=> {
    res.sendFile(path.join(__dirname,'public', 'sucesso.html'));
});

app.post('/sucesso', (req,res) => {
    const {nome, email, senha} = req.body;

    if(usuarios.some(u => u.email === email)){
        return res.status(400).send('Este email já existe');
    }
    const id = usuarios.length+1;
    const novo = {id, nome, email,senha};

    usuarios.push(novo);
    res.redirect('/login.html');
});


// Definição da porta em que o servidor irá ouvir

// Configuração do middleware CORS para permitir solicitações de diferentes origens

// Definição do middleware para servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Definição da rota para os filmes
app.get('/filmes', (req, res) => {
    res.json(filmes); // Retorna os dados dos filmes como uma resposta JSON
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});



