// função auto-invocavel para pegar noe do usuário aoiniciar a aplicação
const usuario = function(){
    nome = prompt('Digite seu nome') 
}
usuario()   


function calcular(){
    
    // Pegando os valores do HTML
    let resultado = document.getElementById('resultado')
    let peso = document.getElementById('peso').value
    let altura = document.getElementById('altura').value

    //Validação de Formulário se estiver vazio 
    if (peso === '' || altura === '') {
        alert("Por favor, preencha todos os campos.");
        document.getElementById('peso').focus()
        return;
      }

    // Calcular IMC
    let imc = peso/(altura*altura)

    
    
    // Marca a linha correspondente à classificação do IMC
    if (imc < 18.5) {
        document.getElementById('abaixo-peso').classList.add('marked-row');
    } else if (imc >= 18.5 && imc < 25) {
        document.getElementById('peso-normal').classList.add('marked-row');
    } else if (imc >= 25 && imc < 30) {
        document.getElementById('sobrepeso').classList.add('marked-row');
    } else if (imc >= 30 && imc < 35) {
        document.getElementById('obesidade-grau-1').classList.add('marked-row');
    } else if (imc >= 35 && imc < 40) {
        document.getElementById('obesidade-grau-2').classList.add('marked-row');
    } else {
        document.getElementById('obesidade-grau-3').classList.add('marked-row');
    }
    

    // Mostrar resultado na tela 
    resultado.innerHTML = ` <div id="info">
                                Nome: ${nome} <br> 
                                IMC: ${imc.toFixed(2)} <br>
                                Peso: ${peso} Kg <br>
                                Altura: ${altura}<br>
                                <button onclick="apagar()">Apagar</button><br>
                            </div>
                           
                           
                           `
}

function apagar(){
    resultado.innerHTML=""
    peso.value = ''
    altura.value = ''
    document.getElementById('peso').focus()

    // Remove a marcação de todas as linhas da tabela
    var rows = document.querySelectorAll('#tabela-imc tr');
    rows.forEach(function(row) {
      row.classList.remove('marked-row');
    });
    

}

// Marca a linha correspondente à classificação do IMC
if (imc < 18.5) {
    document.getElementById('abaixo-peso').classList.add('marked-row');
  } else if (imc >= 18.5 && imc < 25) {
    document.getElementById('peso-normal').classList.add('marked-row');
  } else if (imc >= 25 && imc < 30) {
    document.getElementById('sobrepeso').classList.add('marked-row');
  } else if (imc >= 30 && imc < 35) {
    document.getElementById('obesidade-grau-1').classList.add('marked-row');
  } else if (imc >= 35 && imc < 40) {
    document.getElementById('obesidade-grau-2').classList.add('marked-row');
  } else {
    document.getElementById('obesidade-grau-3').classList.add('marked-row');
  }



