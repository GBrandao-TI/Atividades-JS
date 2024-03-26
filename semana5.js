document.addEventListener("DOMContentLoaded", function(event) {
    
    var container = document.getElementById("container");

    var h1 = document.createElement("h1");
    h1.innerHTML = "Total";

    var inputTotal = document.createElement("input");
    inputTotal.innerHTML = "total";

    var inputHomens = document.createElement("input");
    inputHomens.innerHTML = "qtdeHomens";

    var inputMulheres = document.createElement("input");
    inputMulheres.innerHTML = "qtdeMulheres";

    //var btnReload = document.createElement("button");
    //tnReload = "Recarregar";
    //imagens
    var imgReload = document.createElement("img");
    imgReload.innerHTML = "Recarregar";
    imgReload.src = "https://cdn1.iconfinder.com/data/icons/google_jfk_icons_by_carlosjj/128/sync.png";
    imgReload.alt = "Recarregar";

    var imgHomem = document.createElement("img");
    imgHomem.innerHTML = "homem";
    imgHomem.src = "https://cdn4.iconfinder.com/data/icons/business-users-1/256/man_white_business.png";
    imgHomem.alt = "Homens";


    var adicionarHomem = document.createElement("img");
    adicionarHomem.innerHTML = "addhomem";
    adicionarHomem.src = "https://cdn1.iconfinder.com/data/icons/ui-navigation-1/152/plus-128.png";
    adicionarHomem.alt = "addhomem";    

    var subtrairHomem = document.createElement("img");
    subtrairHomem.innerHTML = "removehomem";
    subtrairHomem.src = "https://cdn0.iconfinder.com/data/icons/mobile-device/512/erase-cut-minus-blue-round-2-128.png";
    subtrairHomem.alt = "removehomem";

    var imgMulher = document.createElement("img");
    imgMulher.innerHTML = "mulher";
    imgMulher.src = "https://i.pinimg.com/originals/9b/67/88/9b6788434b3ea5d2c1ade31388def253.png";
    imgMulher.alt = "Mulheres";


    var adicionarMulher = document.createElement("img");
    adicionarMulher.innerHTML = "addmulher";
    adicionarMulher.src = "https://cdn1.iconfinder.com/data/icons/ui-navigation-1/152/plus-128.png";
    adicionarMulher.alt = "addmulher";    

    var subtrairMulher = document.createElement("img");
    subtrairMulher.innerHTML = "removeMulher";
    subtrairMulher.src = "https://cdn0.iconfinder.com/data/icons/mobile-device/512/erase-cut-minus-blue-round-2-128.png";
    subtrairMulher.alt = "removeMulher";

    //



    

    //insere os campos criados na div container

    container.appendChild(h1);
    container.appendChild(inputTotal);
    container.appendChild(imgReload);
    container.appendChild(imgHomem);
    container.appendChild(adicionarHomem);
    container.appendChild(subtrairHomem);
    container.appendChild(inputHomens);
    container.appendChild(imgMulher);
    container.appendChild(adicionarMulher);
    container.appendChild(subtrairMulher);
    container.appendChild(inputMulheres);

    //CSS

    container.style.textAlign = "center";
    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.alignItems = "center";
    container.style.justifyContent = "center";
    container.style.width = "100%";
    container.style.maxWidth = "500px"; // Ajuste conforme necessário
    container.style.margin = "auto";

    h1.style.display = "block";
    h1.style.textAlign = "center";
    h1.innerHTML = "Total";

    inputTotal.style.display = "inline-block";
    inputTotal.style.textAlign = "center";

    imgReload.style.display = "inline-block";
    imgReload.style.position = "absolute";
    imgReload.style.right = "30%";

    imgHomem.style.display = "block";
    imgHomem.style.position = "absolute";
    imgHomem.style.left = "20%";
    imgHomem.style.top = "20%";

    adicionarHomem.style.position = "absolute";
    adicionarHomem.style.left = "20%";
    adicionarHomem.style.top = "60%";

    subtrairHomem.style.position = "absolute";
    subtrairHomem.style.left = "30%";
    subtrairHomem.style.top = "60%";

    inputHomens.style.display = "block";
    inputHomens.style.position = "absolute";
    inputHomens.style.left = "25%";
    inputHomens.style.top = "50%";


    imgMulher.style.display = "block";
    imgMulher.style.position = "absolute";
    imgMulher.style.right = "20%";
    imgMulher.style.top = "20%";
    

    adicionarMulher.style.position = "absolute";
    adicionarMulher.style.right = "30%";
    adicionarMulher.style.top = "60%";

    subtrairMulher.style.position = "absolute";
    subtrairMulher.style.right = "20%";
    subtrairMulher.style.top = "60%";

    inputMulheres.style.display = "block";
    inputMulheres.style.position = "absolute";
    inputMulheres.style.right = "20%";
    inputMulheres.style.top = "50%";


    function redimensionarImagens(largura, altura) {
        var imagens = document.getElementsByTagName('img');
        for (var i = 0; i < imagens.length; i++) {
            imagens[i].style.width = largura + '%';
            imagens[i].style.height = altura + '%';
        }
    }
    
    // Chame a função para redimensionar todas as imagens para 100px de largura e 100px de altura
    redimensionarImagens(10, 10);

    // container.style = "text-align: center, display: block";
    // h1.style = "display: block, text-align: center;";
    // inputTotal.style = "display: inline-block, text-align: center;";
    // imgReload.style = "display: inline-block, right: 10%;";
    // imgHomem.style = "display: block, left: 20%;";
    // adicionarHomem.style = "";
    // subtrairHomem.style = "";
    // inputHomens.style = "display:"
    // imgMulher.style = "";
    // adicionarMulher.style ="";
    // subtrairMulher.style = "";
    // inputMulheres.style = "";



    // function CriarElementos(){
    //     console.log("go");
    // }
    var qtdeTotal = 0;
    var qtdeHomens = 0;
    var qtdeMulheres = 0;

    adicionarHomem.onclick = function(){
        qtdeHomens++;
        qtdeTotal++;
        inputHomens.value = qtdeHomens;
        inputTotal.value = qtdeTotal;
    }

    subtrairHomem.onclick = function(){
        if(qtdeHomens > 0){
            qtdeHomens--;
            qtdeTotal--;
            inputHomens.value = qtdeHomens;
            inputTotal.value = qtdeTotal;
        }
        
    }
    
    adicionarMulher.onclick = function(){
        qtdeMulheres++;
        qtdeTotal++;
        inputMulheres.value = qtdeMulheres;
        inputTotal.value = qtdeTotal;
    }

    subtrairMulher.onclick = function(){
        if(qtdeMulheres > 0){
            qtdeMulheres--;
            qtdeTotal--;
            inputMulheres.value = qtdeMulheres;
            inputTotal.value = qtdeTotal;
        }
        
    }

    
    imgReload.onclick = function(){
        console.log("Deve recarregar");
        qtdeTotal = 0;
        qtdeHomens = 0;
        qtdeMulheres = 0;
        inputTotal.value = 0;
        inputHomens.value = 0;
        inputMulheres.value = 0;

    }


    //CriarElementos();


});

