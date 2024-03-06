function obterData(){
   let data = new Date(); // Corrigido: Instanciando o objeto Date

    const dias = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

    console.log(data);

    let diaDaSemana = data.getDay(); 
    let dia = data.getDate();
    let mes = data.getMonth(); 
    let ano = data.getFullYear(); 

    let dataPorExtenso = dias[diaDaSemana] + ", " + dia + " de " + meses[mes] + " de " + ano;

    console.log(dataPorExtenso);

    document.getElementById("data").innerHTML = dataPorExtenso;
    
}


function tempoReal(){
    let data = new Date();
    let hora = data.toLocaleTimeString();
    setTimeout(tempoReal, 1000);
    console.log(hora);

    document.getElementById("tempo").innerHTML = hora;
    
}

function checarPalindromo(){
    let palavra = document.getElementById("palindromo").value;
    let p1 = palavra.toUpperCase();
    let p2 = p1.split('').reverse().join('');
    console.log(p1);
    console.log(p2);
    let resultado;

    if(p1 === p2){
        resultado = "É palídromo! " + p1 + " ao contrário é: " + p2;
    }
    else{
        resultado = "Não são palídromos! " + p1 + " é diferente de " + p2;
    }

    document.getElementById("resultPalindromo").innerHTML = resultado;
}

obterData();

tempoReal();

document.getElementById("bt").addEventListener("click", checarPalindromo);









