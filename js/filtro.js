document.addEventListener('DOMContentLoaded', function () {
    var select = document.getElementById('categoriaSelect');
    select.addEventListener('change', function () {
        mudarVisibilidadeCategoria(this.value);
    });

    // Inicializa a visibilidade das categorias
    mudarVisibilidadeCategoria(select.value);
});

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
