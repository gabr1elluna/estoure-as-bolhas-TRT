document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('container');
    const imagens = ['assets/bolhas/bolha1.png', 'assets/bolhas/bolha2.png', 'assets/bolhas/bolha3.png', 'assets/bolhas/bolha4.png', 'assets/bolhas/bolha5.png', 'assets/bolhas/bolha6.png']; 
    const iniciarJogoButton = document.getElementById('jogo');
    const box = document.querySelector('.box');
    const somBolha = new Audio('assets/pop.mp3');
    const contagemBolhasEstouradas = document.getElementById('contagemBolhasEstouradas');
    let contagemClicks = 0;



    function mudarImagem() {
        const imagem = document.createElement('img');
        imagem.src = imagens[Math.floor(Math.random() * imagens.length)];
        imagem.className = 'imagem';
        imagem.style.position = 'absolute';


        const containerWidth = container.offsetWidth - 2*50
        const containerHeight = container.offsetHeight - 2*50
        const maxWidth = containerWidth - (imagem.offsetWidth - 2*4);
        const maxHeight = containerHeight - (imagem.offsetHeight - 2*4);
        const left = Math.floor(Math.random() * maxWidth);
        const top = Math.floor(Math.random() * maxHeight);

        imagem.style.left = left + 'px';
        imagem.style.top = top + 'px';

        

        imagem.addEventListener('click', function() {
            contagemClicks++
            contagemBolhasEstouradas.textContent = `Bolhas Estouradas: ${contagemClicks}`;
            somBolha.play();
            container.removeChild(imagem);
            mudarImagem();
        });
        container.appendChild(imagem);
    }

    
    iniciarJogoButton.addEventListener('click', function() {
        box.classList.add('hidden');
        mudarImagem();
    });
});

