const sectionWin = document.getElementById('win')
const sectionLose = document.getElementById('lose')
const topNumber = parseInt(document.querySelector('.top input').value);
const bottomNumber = parseInt(document.querySelector('.bottom input').value);
//const btnReload = document.getElementById('reboot')

function checkDominos() {    
    if (topNumber === 4 && bottomNumber === 6) {
        sectionWin.style.display = 'block'
    } else {
        sectionLose.style.display = 'block'
    }
}

function reloadGame() {
    location.reload()
}