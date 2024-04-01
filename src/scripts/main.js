document.addEventListener('DOMContentLoaded', function() {
    
    // puxa o formulário e adiciona função ao submit
    document.getElementById('form-sorteador').addEventListener('submit', function(event) {
        
        // previne o comportamento padrão de recarregar
        event.preventDefault();
        
        // variável do número inserido
        let maxNumber = document.getElementById('max-number').value;
        
        // garante um número inteiro
        maxNumber = parseInt(maxNumber);

        // função para randomizar 
        let randomNumber = Math.random() * maxNumber;
        // função que arredonda para baixo
        randomNumber = Math.floor(randomNumber + 1);

        // texto que vai aparecer para o usuário dentro do <span></span>
        document.getElementById('result-value').innerText = randomNumber
        document.querySelector('.result').style.display = 'block';
    })
})