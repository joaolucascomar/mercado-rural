document.addEventListener('DOMContentLoaded', function () {
    var select = document.getElementById('categoriaSelect');
    select.addEventListener('change', function () {
        mudarVisibilidadeCategoria(this.value);
    });

    mudarVisibilidadeCategoria(select.value);
});
// A função acima adiciona um escutador de evento na página, com 'DOMContentLoaded', que é quando o conteúdo do documento é carregado, ela captura em uma variável o select, usando o id do select no html e coloca outro escutador com 'change', que captura uma mudança, como a seleção de uma option, que chama a função mudar mudarVisibilidadeCategoria com o valor de quem foi modificado, abaixo é chamada novamente com o valor do select(por padrão todos) 

function mudarVisibilidadeCategoria(valorSelecionado) {
    var categorias = document.querySelectorAll('.categoria');
    categorias.forEach(function (categoria) {
        if (valorSelecionado === 'Todos' || categoria.id === valorSelecionado) {
            categoria.style.display = 'block';
        } else {
            categoria.style.display = 'none';
        }
    });
}
// Utiliza um querySelectorAll pra selecionar os elementos da classe 'categoria' e passa por cada uma com o forEach, onde muda o display para block(exibido) ou none(oculto) comparando o valor selecionado(value da option) com a categoria(id da section)
