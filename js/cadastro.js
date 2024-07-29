function mudaPagina() {
    const cadastro = document.getElementById('cadastro');
    cadastro.style.display = 'none';
    cadastro.style.height = '0';
    cadastro.style.overflow = 'hidden';
}
// Ela captura a seção do cadastro e a oculta, definindo seu display para none, e sua altura ocupada para zero, além de ocultar a barra de rolagem com overflow = 'hidden'

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
// Cria o 'produtor' com base no valores do form, seleciona a seção do produtor e modifica seu html, com o uso de template string (``) é posivel passar os dados dos atributos de produtor e cria-lo dinamicamente

function enviarFormulario(event) {
    event.preventDefault();
    // Impede que a pgina recarregue

    const dadosProdutor = {
        nome: document.getElementById('nome').value,
        email: document.getElementById('email').value,
        telefone: document.getElementById('telefone').value,
        cnpj: document.getElementById('cnpj').value,
        descricao: document.getElementById('descricao').value
    }
    // Captura os dados do form com o uso dos seus ids em um objeto dadosProdutor
    
    alert("Cadastro realizado com sucesso!");
    mudaPagina()
    gerarProdutor(dadosProdutor);
}
// Chamada ao submeter o formulário