const modalOverlay = document.querySelector('.modal_overlay')
const cards = document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener('click', function() {
        const imgID = card.getAttribute('id')
        const textoH2 = modalOverlay.querySelector('h2')
        const textP = modalOverlay.querySelector('p')

        modalOverlay.classList.add('active')
        modalOverlay.querySelector('img').src = `images/${imgID}.png`
        textoH2.innerHTML = card.querySelector('p').innerHTML
        textP.innerHTML = card.querySelector('#author').innerHTML
    })
}

document.querySelector('.close_modal').addEventListener('click', function() {
    modalOverlay.classList.remove('active')
    modalOverlay.querySelector('img').src = " "

})