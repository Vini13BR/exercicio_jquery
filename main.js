$(document).ready(function(){
    // VARIAVEIS GLOBAIS
    const tarefa = $('#inputTarefa');

    // FUNÇÃO PARA MOSTRAR E ESCONDER POP-UP
    $('header button').click(function(){
        $('.adicionarTarefa').show();
        $('.containerAdicionarTarefa').slideDown();
    })
    $('#buttonCancelar').click(function(){
        $('.containerAdicionarTarefa').slideUp();
        $('.adicionarTarefa').hide();
    })

    // FUNCIONAMENTO DO CADASTRO DE TAREFAS
    $('form').on('submit', function(e){
        e.preventDefault();
        const tarefaAdicionada = tarefa.val();
        const adcTarefa = $('<li></li>').text(tarefaAdicionada);
        $('#listaTarefas').append(adcTarefa)
        $('#inputTarefa').val('');
    })

    //Funcionamento riscar
    $(document).on('click', '#listaTarefas li', function(){
        $(this).toggleClass('riscar');
    })
})  