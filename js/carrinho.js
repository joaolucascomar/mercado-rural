const produtos_selecionados = [];
// constante onde são armazenados os produtos do carrinho

function listaDosProdutos() {
  listaDosProdutos = "";
  produtos.map((produto, index)=>{
    listaDosProdutos += ` 
      <tr>
        <td><img src="${produto.img}" width="50" height="50"/></td>
        <td>${produto.nome}</td>
        <td>R$ ${produto.valor_unidade.toFixed(2)}</td>
        <td><input type="button" class="btn botao-tabela adicionar" key="${index}" value="Adicionar"></td>
      </tr>
    `;
  })

  return listaDosProdutos;
}
// Usada na montagem da tabela de produtos, com o map percorre o array de produtos criando um tr para cada e guarda na variável lista de produtos
// toFixed(2) serve para exibir numeros com duas casas após a virgula
// index é usado para identificar o produto, é incrementado conforme o map percorre o array
// a classe adicionar é usada na função que adiciona o produto para captura-lo


function inicializarLoja() {
  var containerProdutos = document.getElementById('produtos');
  containerProdutos.innerHTML = `
    <div>
      <table class="tabela-produtos">
        <thead>
          <tr>
            <th></th>
            <th>Produto</th>
            <th>Preço</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          ${listaDosProdutos()}
        </tbody>
      </table>
    </div>
  `;
}
// Define para a variável containerProdutos a div com id 'produtos' e adiciona no html dela a tabela de produtos, utilizando a listaDosProdutos para montar a lista

function removerProduto(index) {
  let produto = produtos_selecionados[index]
  produto.quantidade = 0;
  produtos_selecionados.splice(index, 1);
  atualizarCarrinho();
}
// Responsavel por remover um produto, recebe um index que faz referencia ao item que a ação foi chamada, define o produto, zera sua quantidade e utiliza o splice, que remove o produto do array de produtos selecionados e atualiza o carrinho

function adicionarItem(index) {
  let produto = produtos_selecionados[index]
  produto.quantidade++;
  atualizarCarrinho();
}
// define o produto, incrementa sua quantidade e atualiza o carrinho

function removerItem(index) {
  let produto = produtos_selecionados[index]
  if (produto.quantidade <= 1){
    removerProduto(index);
  } else {
    produto.quantidade--;
    atualizarCarrinho();
  }
}
// define o produto, caso a quantidade seja menor ou igual a um, ele é removido, se não sua quantidade é apenas decrementada e o carrinho atualizado

function valorTotal() {
  let valorTotal = 0.0;
  
  produtos_selecionados.map((produto)=>{
    valorTotal += (produto.quantidade * produto.valor_unidade)
  })
  
  return valorTotal;
}
// Define o valor total, percorre o array de produtos selecionados e os soma na let de valor total

atualizarValorTotal = () => {
  var containerCarrinho = document.getElementById('valorTotal');
  containerCarrinho.innerHTML = "";
  
  if (produtos_selecionados.length > 0){
    containerCarrinho.innerHTML+= `
      R$ ${valorTotal().toFixed(2)}
    `;
  }
}
// Seleciona o elemento html que exibe o valor total e o atualiza com a função valorTotal
// toFixed(2) serve para exibir numeros com duas casas após a virgula

function atualizarCarrinho() {
  var containerCarrinho = document.getElementById('carrinho');
  listaDosProdutosSelecionanos = "";

  produtos_selecionados.map((produto, index)=>{
    listaDosProdutosSelecionanos+= `
      <tr>
        <td>${produto.nome}</td>
        <td>${produto.quantidade}</td>
        <td>
          <input type="button" class="btn" value="+" onclick="adicionarItem(${index})">
          <input type="button" class="btn" value="-" onclick="removerItem(${index})">  
          <input type="button" class="btn" value="X" onclick="removerProduto(${index})">
        </td>
      </tr>
    `;
  })
// Seleciona o container do carrinho e cria/atualiza o carrinho, primeiramente percorre os produtos com o .map, e criando um tr para cada, salvando em uma variável
// index é usado para identificar o produto, é incrementado conforme o map percorre o array
// é por meio dos buttons que as funções de adicionarItem, removerItem e removerProduto são chamadas

  containerCarrinho.innerHTML = `
    <table>
      <thead>
        <tr>
          <th>Produto</th>
          <th>Quantidade</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        ${listaDosProdutosSelecionanos}
      </tbody>
    </table>
  `;
// Cria a estrutura da tabela do carrinho, e utiliza o array criado acima 

  atualizarValorTotal();
// Por utimo atualiza o valorTotal
}

function limparCarrinho() {
  var containerCarrinho = document.getElementById('carrinho');
  containerCarrinho.innerHTML = '';
}

function mapearLinks() {
  var links = document.getElementsByClassName('adicionar');
  
  for(var i=0; i < links.length; i++){
    links[i].addEventListener("click", function(){
      let key = this.getAttribute("key");
      
      produto = produtos[key]
      produto.quantidade++;
      if (!produtos_selecionados.includes(produto)){
        produtos_selecionados.push(produto);
      }

      atualizarCarrinho();
    })
  } 
}

function finalizarCompra() {
  alert('Compra Finalizada com sucesso');
  produtos_selecionados.length = 0;
  atualizarCarrinho();
  limparCarrinho();
}
// Ativada ao finalizar a compra, limpa o array de produtos_selecionados e atualiza o carrinho para que fique vazio, a função limparCarrinho serve para excluir a tabela do carrinho

inicializarLoja();
mapearLinks();
// Chamada das funções de inicialização que criam a tabela e a fazem funcionar 