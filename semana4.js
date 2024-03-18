function mostrarInputs(categoria) {
    if (categoria === 'aluno') {
        document.getElementById('inputAluno').style.display = 'block';
        document.getElementById('inputProfessor').style.display = 'none';
    } 
    else if (categoria === 'professor') {
        document.getElementById('inputAluno').style.display = 'none';
        document.getElementById('inputProfessor').style.display = 'block';
    }
}


function Pessoa(){
    var nome;
    var email;
    var dataNascimento;
    var telefoneFixo;
    var telefoneCelular;
    var matricula;

    this.setNome = function(nome){
        this.nome = nome;
    }
    this.getNome = function(){
        return this.nome;
    }

    this.setEmail = function(email){
        this.email = email;
    }
    this.getEmail = function(){
        return this.email;
    }
    
    this.setDataNascimento = function(dataNascimento){
        this.dataNascimento = dataNascimento;
    }

    this.getDataNascimento = function(){
        return this.dataNascimento;
    }


    this.setTelefoneFixo = function(telFixo){
        this.telefoneFixo = telFixo;
    }

    this.getTelefoneFixo = function(telFixo){
        return this.telefoneFixo;
    }


    this.setTelefoneCelular = function(telCel){
        this.telefoneCelular = telCel;
    }

    this.getTelefoneCelular = function(telCel){
        return this.telefoneCelular;
    }

    this.setMatricula = function(matricula){
        this.matricula = matricula;
    }

    this.getMatricula = function(){
        return this.matricula;
    }  

}


function Aluno(){
    //chamando o método pai
    Pessoa.call(this);
    var curso;
    
    this.setCurso = function(curso){
        this.curso = curso;
    }

    this.getCurso = function(){
        return this.curso;
    }
}

function Professor(){
    //chamando pessoa
    Pessoa.call(this);

    var area;
    var lattes;

    this.setArea = function(area){
        this.area = area;
    }

    this.getArea = function(){
        return this.area;
    }

    this.setLattes = function(l){
        this.lattes = l;
    }

    this.getLattes = function(){
        return this.lattes;
    }
}


function Enviar(){
    var categoria = document.querySelector('input[name="categoria"]:checked').value;
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var dataNascimento = document.getElementById('dataNasc').value;
    var telefoneFixo = document.getElementById('telFixo').value;
    var telefoneCelular = document.getElementById('telCelular').value;

/*Checar isso, pois não vinculou o codigo do professor

    --------------------->>>>>>>>>>>>>>>>>>>
*/
    //var matricula = document.getElementById('matriculaAluno') ? document.getElementById('matriculaProfessor').value : document.getElementById('matriculaProfessor').value;
    var curso = document.getElementById('curso') ? document.getElementById('curso').value : null;
    var area = document.getElementById('area') ? document.getElementById('area').value : null;
    var lattes = document.getElementById('lattes') ? document.getElementById('lattes').value : null;

    var aluno;
    if (categoria === 'aluno') {
        aluno = new Aluno();
        aluno.setNome(nome);
        aluno.setEmail(email);
        aluno.setDataNascimento(dataNascimento);
        aluno.setTelefoneFixo(telefoneFixo);
        aluno.setTelefoneCelular(telefoneCelular);
        aluno.setMatricula(document.getElementById('matriculaAluno').value);
        aluno.setCurso(curso);

        console.log(aluno);

        var exibeAluno = 'Aluno \nNome: ' + aluno.getNome() + '\n';
        exibeAluno += 'Email: ' + aluno.getEmail() + '\n';
        exibeAluno += 'Data de Nascimento: ' + aluno.getDataNascimento() + '\n';
        exibeAluno += 'Telefone Fixo: ' + aluno.getTelefoneFixo() + '\n';
        exibeAluno += 'Telefone Celular: ' + aluno.getTelefoneCelular() + '\n';
        exibeAluno += 'Matrícula: ' + aluno.getMatricula() + '\n';
        exibeAluno += 'Curso: ' + aluno.getCurso() + '\n';

        alert(exibeAluno);

    } else if (categoria === 'professor') {
        professor = new Professor();
        professor.setNome(nome);
        professor.setEmail(email);
        professor.setDataNascimento(dataNascimento);
        professor.setTelefoneFixo(telefoneFixo);
        professor.setTelefoneCelular(telefoneCelular);
        professor.setMatricula(document.getElementById('matriculaProfessor').value);
        professor.setArea(area);
        professor.setLattes(lattes);

        console.log(professor);

        var exibeProfessor = 'Professor \nNome: ' + professor.getNome() + '\n';
        exibeProfessor += 'Email: ' + professor.getEmail() + '\n';
        exibeProfessor += 'Data de Nascimento: ' + professor.getDataNascimento() + '\n';
        exibeProfessor += 'Telefone Fixo: ' + professor.getTelefoneFixo() + '\n';
        exibeProfessor += 'Telefone Celular: ' + professor.getTelefoneCelular() + '\n';
        exibeProfessor += 'Matrícula: ' + professor.getMatricula() + '\n';
        exibeProfessor += 'Área: ' + professor.getArea() + '\n';
        exibeProfessor += 'Lattes: ' + professor.getLattes() + '\n';

        alert(exibeProfessor);
    }

}

function Limpar() {
    document.getElementById('nome').value = '';
    document.getElementById('email').value = '';
    document.getElementById('dataNasc').value = '';
    document.getElementById('telFixo').value = '';
    document.getElementById('telCelular').value = '';
    document.getElementById('curso').value = '';
    document.getElementById('matriculaAluno').value = '';
    document.getElementById('area').value = '';
    document.getElementById('matriculaProfessor').value = '';
    document.getElementById('lattes').value = '';
}










