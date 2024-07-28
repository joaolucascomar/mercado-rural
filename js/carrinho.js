const produtos_selecionados = [];

listaDosProdutos = () => {
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

inicializarLoja = () => {
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

removerProduto = (index) => {
  let produto = produtos_selecionados[index]
  produto.quantidade = 0;
  produtos_selecionados.splice(index, 1);
  atualizarCarrinho();
}

adicionarItem = (index) => {
  let produto = produtos_selecionados[index]
  produto.quantidade++;
  atualizarCarrinho();
}

removerItem = (index) => {
  let produto = produtos_selecionados[index]
  if (produto.quantidade <= 1){
    removerProduto(index);
  } else {
    produto.quantidade--;
    atualizarCarrinho();
  }
}

valorTotal = () => {
  let valorTotal = 0.0;
  
  produtos_selecionados.map((produto)=>{
    valorTotal += (produto.quantidade * produto.valor_unidade)
  })
  
  return valorTotal;
}

atualizarValorTotal = () => {
  var containerCarrinho = document.getElementById('valorTotal');
  containerCarrinho.innerHTML = "";
  
  if (produtos_selecionados.length > 0){
    containerCarrinho.innerHTML+= `
      R$ ${valorTotal().toFixed(2)}
    `;
  }
}

atualizarCarrinho = () => {
  var containerCarrinho = document.getElementById('carrinho');
  listaDosProdutosSelecionanos = "";

  produtos_selecionados.map((produto, index)=>{
    if (produto !== undefined){ 
      listaDosProdutosSelecionanos+= `
        <tr>
          <td>${produto.nome}</td>
          <td>${produto.quantidade}</td>
          <td>
            <input type="button" value="+" onclick="adicionarItem(${index})">
            <input type="button" value="-" onclick="removerItem(${index})">  
            <input type="button" value="X" onclick="removerProduto(${index})">
          </td>
        </tr>
      `;
    }
  })

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

  atualizarValorTotal();
}

mapearLinks = () => {
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
}

inicializarLoja();
mapearLinks();