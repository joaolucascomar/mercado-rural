function mudaPagina() {
    const cadastro = document.getElementById('cadastro');
    cadastro.style.display = 'none';
}

function gerarProdutor(produtor) {
    var containerProdutor = document.getElementById('produtor');
    containerProdutor.innerHTML = `
    <br>
    <h2 class="subtitulo-produtor">Minha loja:</h2>
    <div class="produtor">
        <h1 class="titulo-produtor">${produtor.nome}</h1>
        <div class="dados-produtor">
            <img src="../images/horta.jpg" alt="Imagem de uma horta">
            <div class="descricao">
                <p>${produtor.descricao}</p>
                <div class="contato">
                    <p>Telefone: ${produtor.telefone}</p>
                    <p>CNPJ: ${produtor.cnpj}</p>
                </div>
            </div>
        </div>
    </div>
    <h2 class="subtitulo-produtor">Confira os Produtos:</h2>
    <p class="texto-produtos">Nenhum Produto Cadastrado...</p>
    `;
}

function enviarFormulario(event) {
    event.preventDefault();

    const dadosProdutor = {
        nome: document.getElementById('nome').value,
        email: document.getElementById('email').value,
        telefone: document.getElementById('telefone').value,
        cnpj: document.getElementById('cnpj').value,
        descricao: document.getElementById('descricao').value
    }
    
    alert("Cadastro realizado com sucesso!");
    mudaPagina()
    gerarProdutor(dadosProdutor);
}