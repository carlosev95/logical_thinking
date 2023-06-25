const sectionWin = document.getElementById('win')
const sectionLose = document.getElementById('lose')

function checkDominos() {    
    const topNumber = parseInt(document.querySelector('.top input').value);
    const bottomNumber = parseInt(document.querySelector('.bottom input').value);
    const sectionDomino = document.getElementById('ocultar-domino')
    if (topNumber === 4 && bottomNumber === 6) {
        sectionWin.style.display = 'block'
        sectionDomino.style.display = 'none'
    } else {
        sectionLose.style.display = 'block'
        sectionDomino.style.display = 'none'
    }
}

function reloadGame() {
    location.reload()
}