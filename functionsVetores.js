const sltOpcoes = document.getElementById("sltOpcoes");
const inValor = document.getElementById("inValor");
const inPosicao = document.getElementById("inPosicao");
const btExecutar = document.getElementById("btExecutar");
const outSaida = document.getElementById("outSaida");

btExecutar.addEventListener("click", executarFunc);

const vetNumeros = [31, 7, 53, 18, 24, 9];

function executarFunc() {
    let opcao = sltOpcoes.value;
    let valor = Number(inValor.value);
    let posicao = Number(inPosicao.value);

    switch (opcao) {
        case "MOSTRAR":
            outSaida.innerHTML = "Elementos do Vetor:<br>" + toString(vetNumeros);
            break;

        case "INCLUIR":
            if (inValor.value != "") {
                let inseriu = inserirElemento(vetNumeros, valor);
                if (inseriu == true) {
                    outSaida.innerHTML = "Sucesso! Elemento inserido!";
                } else {
                    outSaida.innerHTML = "Não Inserido! Elemento já existe no vetor!";
                }
            }
            break;

        case "EXCLUIR":
            if (inValor.value != "") {
                let excluiu = excluirElemento(vetNumeros, valor);
                if (excluiu == true) {
                    outSaida.innerHTML = "Sucesso! Elemento excluído!";
                } else {
                    outSaida.innerHTML = "Não Excluído! Elemento não existe no vetor!";
                }
            }
            break;

        case "ALTERAR":
            if (inValor.value != "" && inPosicao.value != "") {
                alterarElemento(vetNumeros, posicao, valor);
                outSaida.innerHTML = "Sucesso! Elemento alterado!";
            } else {
                outSaida.innerHTML = "Erro! Informe o valor e a posição para alterar!";
            }
            break;

        case "PROCURAR":
            if (inValor.value != "") {
                let index = procurarElemento(vetNumeros, valor);
                outSaida.innerHTML = "O elemento " + valor + " está na posição: " + index;
            } else {
                outSaida.innerHTML = "Erro! Informe o valor para procurar!";
            }
            break;

        case "SOMAR":
            let soma = somarElementos(vetNumeros);
            outSaida.innerHTML = "Soma dos elementos do vetor: " + soma;
            break;

        case "MENOR":
            let indexMenor = indexMenorElemento(vetNumeros);
            outSaida.innerHTML = "O menor elemento do vetor é: " + vetNumeros[indexMenor] + " e está na posição: " + indexMenor;
            break;

        case "MAIOR":
            let indexMaior = indexMaiorElemento(vetNumeros);
            outSaida.innerHTML = "O maior elemento do vetor é: " + vetNumeros[indexMaior] + " e está na posição: " + indexMaior;
            break;

        case "MEDIA":
            let media = mediaElementos(vetNumeros);
            outSaida.innerHTML = "A média dos elementos do vetor é: " + media.toFixed(2);
            break;

        case "ORDENAR":
            ordenarVetor(vetNumeros);
            outSaida.innerHTML = "Vetor ordenado com sucesso!<br>" + toString(vetNumeros);
            break;

        default:
            alert("ERRO: selecione uma opção")
    }
}

function toString(vetor) {
    /*  Converte o vetor em uma string formatada e retorna essa string
        Cada elemento do vetor é exibido em uma linha, com seu índice e valor
        Exemplo: [0]: 31
                 [1]: 7
                 [2]: 53
    */
    let strVetor = "";
    vetor.forEach(
        (numero, ind) => {
            strVetor += `[${ind}]: ${numero}<br>`;
        }
    );
    return strVetor;
}

function inserirElemento(vetor, elemento) {
    /*  Insere um elemento no vetor, caso ele não exista
        Retorna true se o elemento foi inserido, false caso contrário
    */
    if (vetor.includes(elemento) == false) {
        vetor.push(elemento);
        return true;
    }
    return false; // elemnento não incluído, pois já existe no vetor
}

function excluirElemento(vetor, elemento) {
    /*  Exclui um elemento do vetor, caso ele exista
        Retorna true se o elemento foi excluido, false caso contrário
    */
    let posicao = vetor.indexOf(elemento);
    if (posicao >= 0) {
        vetor.splice(posicao, 1);
        return true;
    }
    return false;
}

function alterarElemento(vetor, posicao, novoValor) {
    vetor.splice(posicao, 1, novoValor);
}

function procurarElemento(vetor, elemento) {
    let index = -1;
    vetor.forEach(
        (numero, ind) => {
            if (numero == elemento) {
                index = ind;
            }
        }
    );
    return index;
}

function somarElementos(vetor) {
    /*  Retorna a soma de todos os elementos do vetor
    */
    var acumuladora = 0;

    vetor.forEach(
        (numero) => {
            acumuladora += numero;
        }
    );
    return acumuladora;
}

function indexMenorElemento(vetor) {
    /*  Retorna o índice do menor elemento do vetor
    */
    var indexMenor = 0;

    for (let ind = 1; ind < vetor.length; ind++) {
        if (vetor[ind] < vetor[indexMenor]) {
            indexMenor = ind;
        }
    }
    return indexMenor;
}

function indexMaiorElemento(vetor) {
    var indexMaior = 0;
    for (let ind = 1; ind < vetor.length; ind++) {
        if (vetor[ind] > vetor[indexMaior]) {
            indexMaior = ind;
        }
    }
    return indexMaior;
}

function mediaElementos(vetor) {
    let soma = somarElementos(vetor);
    let media = soma / vetor.length
    return media;
}

function ordenarVetor(vetor) {
    vetor.sort((a, b) => a - b);
}
