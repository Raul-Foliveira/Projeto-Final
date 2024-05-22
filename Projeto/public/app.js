document.addEventListener('DOMContentLoaded', function () {
    fetch('http://localhost:8080/filmes')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('filmes-container');
            data.forEach(filme => {
                const filmeDiv = document.createElement('div');
                filmeDiv.classList.add('filme');
                filmeDiv.innerHTML = `
                    <h2>${filme.nome}</h2>
                    <img src="${filme.foto}" alt="Imagem de ${filme.titulo}" style="width: 200px; height: auto;">
                    <p>${filme.descricao}</p>
                `;
                container.appendChild(filmeDiv);
            });
        })
        .catch(error => console.error('Erro ao carregar filmes:', error));
});
