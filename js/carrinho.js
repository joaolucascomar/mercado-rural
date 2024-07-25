const produtos_selecionados = [];
const produtos = [
  {
    id: 100,
    nome: 'Trento',
    img: 'produto.png',
    quantidade: 0,
    valor_unidade: 2.50
  },

  {
    id: 200,
    nome: 'Bala',
    img: 'produto.png',
    quantidade: 0,
    valor_unidade: 0.15
  },

  {
    id: 200,
    nome: 'Bala',
    img: 'produto.png',
    quantidade: 0,
    valor_unidade: 0.15
  },

  {
    id: 200,
    nome: 'Bala',
    img: 'produto.png',
    quantidade: 0,
    valor_unidade: 0.15
  },

  {
    id: 200,
    nome: 'Bala',
    img: 'produto.png',
    quantidade: 0,
    valor_unidade: 0.15
  },

  {
    id: 200,
    nome: 'Bala',
    img: 'produto.png',
    quantidade: 0,
    valor_unidade: 0.15
  },

  {
    id: 200,
    nome: 'Bala',
    img: 'produto.png',
    quantidade: 0,
    valor_unidade: 0.15
  },

  {
    id: 200,
    nome: 'Bala',
    img: 'produto.png',
    quantidade: 0,
    valor_unidade: 0.15
  }
]

listaDosProdutos = () => {
  listaDosProdutos = "";
  produtos.map((produto, index)=>{
    listaDosProdutos += ` 
      <tr>
        <td scope="row" class="col-2"><img src="${produto.img}" width="50" height="50"/></td>
        <td class="col-7">${produto.nome}</td>
        <td class="col-3"><input type="button" class="btn btn-success adicionar" key="${index}" value="Adicionar"></td>
      </tr>
    `;
  })

  return listaDosProdutos;
}

inicializarLoja = () => {
  var containerProdutos = document.getElementById('produtos');
  containerProdutos.innerHTML = `
    <div class="table-wrapper-scroll-y my-custom-scrollbar">
      <table class="table table-bordered table-hover">
        <thead>
          <tr>
            <th scope="col" class="col-2">Produto</th>
            <th scope="col" class="col-7"></th>
            <th scope="col" class="col-3"></th>
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
      ${valorTotal().toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}
    `;
  }
}

atualizarCarrinho = () => {
  var containerCarrinho = document.getElementById('carrinho');
  listaDosProdutosSelecionanos = "";

  produtos_selecionados.map((produto, index)=>{
    if (produto !== undefined){ 
      listaDosProdutosSelecionanos+= `
        <tr class="row">
          <td class="col-2">${produto.nome}</td>
          <td class="col-7">${produto.quantidade}</td>
          <td class="col-3">
            <input type="button" class="btn btn-primary" value="+" onclick="adicionarItem(${index})">
            <input type="button" class="btn btn-primary" value="-" onclick="removerItem(${index})">  
            <input type="button" class="btn btn-danger" value="X" onclick="removerProduto(${index})">
          </td>
        </tr>
      `;
    }
  })

  containerCarrinho.innerHTML = `
    <table class="table table-bordered table-hover table-sm">
      <thead>
        <tr class="row">
          <th class="col-2">Produto</th>
          <th class="col-7">Quantidade</th>
          <th class="col-3">Ações</th>
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

inicializarLoja();
mapearLinks();