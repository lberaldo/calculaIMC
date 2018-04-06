function valida(){
    var form = document.querySelector('.form-group');
    var imc = document.querySelector('.imc');
    imc.innerHTML = "";

    var peso = form.peso.value;
    var altura = form.altura.value;
    var mensagem = "";
    if (peso > 500) {
        var obeso = document.createElement("h1");

        obeso.textContent = "Você está obeso!";
        obeso.classList.add('obeso');

        imc.appendChild(obeso);
        event.preventDefault();
    }
    if (peso >0 && peso < 500) {
        if (altura > 0 && altura < 3.00) {
            var imcc  = peso / (altura *altura);
            var mensagem = document.createElement('h1');
            mensagem.classList.add('obeso');
            mensagem.textContent = "Seu IMC atualmente é de:"+imcc.toFixed(2);
            imc.appendChild(mensagem);
            var table = document
            event.preventDefault();
        }
    }
}