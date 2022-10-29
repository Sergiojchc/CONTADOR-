let contador = 0;
const valor = document.querySelector('#valor');
const botones = document.querySelectorAll('.boton')
botones.forEach(boton => {
    boton.addEventListener('click', function(e) {
        const estilos = e.currentTarget.classList;
        if(estilos.contains('+')) {
            contador++;
        } 
        else if(estilos.contains('-')) {
            contador--;
        }
        else {
            contador = 0; 
            valor.style.color = 'yellow';
        }
          valor.textContent = contador;
        if(contador > 0) {
            valor.style.color = 'green';
        }
        if(contador < 0) {
            valor.style.color = 'red';
        }
    })
})