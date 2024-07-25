function mudarVisibilidadeCategoria() {
    var todos = document.getElementById('todos').checked;
    var categorias_selecionadas = document.querySelectorAll('.filtro:checked:not(#todos)');

    if (todos) {
        // Mostra todas as categorias
        document.querySelectorAll('.categoria').forEach(function (categoria) {
            categoria.style.display = 'block';
        });
    } else {
        // Esconde todas as categorias
        document.querySelectorAll('.categoria').forEach(function (categoria) {
            categoria.style.display = 'none';
        });

        // Mostra as categorias selecionadas
        categorias_selecionadas.forEach(function (categoria) {
            var elemento_selecionado = document.getElementById(categoria.value);
            if (elemento_selecionado) {
                elemento_selecionado.style.display = 'block';
            }
        });
    }
}

document.querySelectorAll('.filtro').forEach(function (checkbox) {
    checkbox.addEventListener('change', function () {
        if (this.id === 'todos') {
            if (this.checked) {
                // Desmarca todas as outras categorias se "Todos" for marcado
                document.querySelectorAll('.filtro:not(#todos)').forEach(function (checkbox_categoria) {
                    checkbox_categoria.checked = false;
                });
            }
        } else {
            // Desmarca "Todos" se qualquer outra categoria for marcada
            if (this.checked) {
                document.getElementById('todos').checked = false;
            }
        }
        mudarVisibilidadeCategoria();
    });
});

document.addEventListener('DOMContentLoaded', function () {
    mudarVisibilidadeCategoria();
});