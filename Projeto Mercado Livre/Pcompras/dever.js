//declara as variáveis utilizadas 
//no programa
let listaCompras = []; //variavel global
let acao = ""; 
let idEditar = 0;

//função para cadastrar as informações
//de produtos
function cadastrar() {
    //recupera as informações do formulário
    let nome  = document.getElementById("nome").value;
    let preco = parseFloat(document.getElementById("preco").value);
    let qtd   = document.getElementById("quantidade").value;

    //insere os dados na tabela
    let linha = [nome,preco,qtd];
    
    //se o usuario clicou no link para 
    //editar o item, entao devemos inserir o 
    //item na lista de compras na posicao correta
    //caso contrário iremos inserir no final da
    //lista de compras
    if (acao === "EDITAR") {
        listaCompras[idEditar] = linha;
        acao = "";
    } else {
        listaCompras.push(linha);
    }
            
    //limpa os campos do formulario
    //após a inclusão dos valores na tabela
    document.getElementById("nome").value       = "";
    document.getElementById("preco").value      = "";
    document.getElementById("quantidade").value = "";

    popularTabela();    
}
//fim da function

//insere na tabela HTML as 
//informações cadastradas
function popularTabela() {
    //cria uma referencia para a tabela
    //no código HTML
    let tabela = document.getElementById("produtos");
    
    //limpa a tabela HTML com as informações antigas    
    var tableHeaderRowCount = 1;
    var rowCount = tabela.rows.length;
    for (var i = tableHeaderRowCount; i < rowCount; i++) {
        tabela.deleteRow(tableHeaderRowCount);
    }
    //fim for
    
    //percorre a lista de compras até 
    //o tamanho máximo da lista
    for (let index = 0; index < listaCompras.length; index++) {
        //adiciona uma linha na tabela HTML
        var row = tabela.insertRow(-1);

        //adiciona as colunas da tabela HTML
        var cell1 = row.insertCell(0); //coluna #
        var cell2 = row.insertCell(1); //coluna Nome Produto
        var cell3 = row.insertCell(2); //coluna Preço
        var cell4 = row.insertCell(3); //coluna Quantidade
        var cell5 = row.insertCell(4); //coluna Ações

        //adiciona as colunas para informação
        let linha = listaCompras[index];        
        cell1.innerHTML = index;
        cell2.innerHTML = linha[0];
        cell3.innerHTML = "R$ " + linha[1].toFixed(2);
        cell4.innerHTML = linha[2];
        cell5.innerHTML = "<a href='#' onclick='removerItem(" + index + ")'>Remover    </a>     " +
                          "<a href='#' onclick='editarItem(" + index + ")' data-bs-toggle='modal' data-bs-target='#formProdutos'>Editar</a>";         
    }
    //fim do FOR    
}
//fim da function

//realiza o calculo do valor das compra
function calcularCompras() {
    let total = 0; //total da compra

    for (let index = 0; index < listaCompras.length; index++) {
        let linha = listaCompras[index];
        let valor = linha[1] * linha[2]; //preço x quantidade
        total = total + valor;
    } //fim for
    
    //exibe a informação no modal de calculo das compras
    document.getElementById("totalCompras").innerHTML = 
    "O total da sua compra é = R$ " + total.toFixed(2);
}
//fim function

//remove um item da lista de compras
function removerItem(id) {
    //remove um item do array de qualquer
    //posição no array
    listaCompras.splice(id,1);
    
    //chama a função para atualizar a tabela HTML
    popularTabela();
}
//fim function

//funcao para editar um item da lista
function editarItem(id) {
    //recupera o item que será editado
    let item = listaCompras[id];

    //formulário
    document.getElementById("nome").value = item[0];
    document.getElementById("preco").value = item[1];
    document.getElementById("quantidade").value = item[2];
    
    acao = "EDITAR"; //variavel de controle
    idEditar = id;
}
//fim function