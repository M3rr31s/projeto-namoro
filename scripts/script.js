// Variaveis

function lugarAleatorio () {
    const nao = document.querySelector("#nao")
    const y = window.innerWidth
    const x = window.innerHeight
    const texto = document.querySelector("#texto")
    const img = document.querySelector("#imagem");
    
    const randomY = Math.floor(Math.random() * 450)
    const randomX = Math.floor(Math.random() * 600)

    nao.style.left = randomY + 'px'
    nao.style.top = randomX + 'px'

    img.src = "img/gato_triste.jpg";

    texto.innerHTML = `Tem Certeza?, acho que fomos feitos um para o outro?`
    texto.innerHTML = `Não faz isso comigo, te amo tanto...`

}




sim.addEventListener("click", () => {
    const sim = document.querySelector("#sim");
    const img = document.querySelector("#imagem");
    const texto = document.querySelector("#texto")
    texto.innerHTML = `Estamos namorando agora, me mande uma foto frente e verso do seu Cartão de Crédito!...`
    img.src = "img/emoji_flor.jpg"; 
});

