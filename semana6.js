document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('container');
    container.classList.add('container', 'bg-dark');
    container.style.border = "2px solid";
    container.style.width = "300px";


    const input = document.createElement('input');
    input.classList.add('info','text-light', 'bg-dark');
    input.textContent = input;
    input.style.width = "100%";

    //var inputValores = document.createElement("input");
    //inputValores.innerHTML = "input";

    // Criação da grid
    const grid = document.createElement('div');
grid.classList.add('row', 'g-2', 'text-light');

// Criação dos botões em um vetor, para alinhar tudo de uma vez só 
const botoes = [
    'AC', '(', '%', 'X',
    '7', '8', '9', '/',
    '4', '5', '6', '-',
    '1', '2', '3', '+',
    '0', ',', '='
];

botoes.forEach(function(button, index) {
    
    if (index % 4 === 0) {
        const linha = document.createElement('div');
        linha.classList.add('row', 'g-2', 'text-light');
        grid.appendChild(linha);
    }

    const col = document.createElement('div');
    col.classList.add('col');

    const btn = document.createElement('button');
    btn.classList.add('btn', 'btn-lg'); // Removido 'btn-primary' para aplicar a cor personalizada

    // Verifica se o botão é um número ou não
    if (isNaN(button)) { // Se o botão não for um número
        btn.classList.add('btn-warning'); // Aplica a cor laranja
    } else {
        btn.classList.add('btn-primary'); // Aplica a cor padrão para números
    }

    btn.textContent = button;

    col.appendChild(btn);
    grid.lastChild.appendChild(col); 
});   

container.appendChild(input);
container.appendChild(grid);



    //####################################
    //Ações


    var valor1 = 0;
    var operacao = '';
    var valor2 = 0;
    var total = 0;

    grid.addEventListener('click', function(e) {
        if (e.target.tagName === 'BUTTON') {
            console.log('Button clicked:', e.target.textContent);
            
            if(e.target.textContent == 'AC'){
                input.value = '';
                valor1 = 0;
                valor2 = 0;
                total = 0;
                operacao = '';
            }
            else if(e.target.textContent == '+' || e.target.textContent == 'X' || e.target.textContent == '-' || e.target.textContent == '/' || e.target.textContent == '%'){
                console.log(e.target.textContent);
                valor1 = parseFloat(input.value);
                operacao = e.target.textContent;
                input.value = '';
            }
            else if(e.target.textContent === '='){
                valor2 = parseFloat(input.value);
                total = Calcular(valor1, valor2, operacao);
                input.value = total.toString(); 
                console.log(valor1);
                console.log(operacao);
                console.log(valor2);
                console.log(total);
            }
            else if(e.target.textContent === ','){
                // Substitui a vírgula por um ponto
                input.value += '.';
            }
            else{
                input.value += e.target.textContent;
            }
        }
    });


    function Calcular(valor1, valor2, operacao){
        if(operacao === '+'){
            console.log("Valor 1: " +valor1);
            console.log("Valor 2: " +valor2);
            total = valor1 + valor2;
        }
        else if(operacao === '-')
            total = valor1 - valor2;
        else if(operacao === 'X')
            total = valor1 * valor2;
        else if(operacao === '/')
            total = valor1 / valor2;
        else if(operacao === '%')
            total = valor1 * valor2 / 100;
        return total;
    }





});
