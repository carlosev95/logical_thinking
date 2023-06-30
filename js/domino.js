const sectionWin = document.getElementById('win')
const sectionLose = document.getElementById('lose')

function checkDominos() {    
    const topNumber = parseInt(document.querySelector('.top input').value);
    const bottomNumber = parseInt(document.querySelector('.bottom input').value);
    const sectionPost = document.getElementById('post')
    
    if (topNumber === 4 && bottomNumber === 6) {
        sectionWin.style.display = 'block'
        sectionPost.style.display = 'none'
    } 
     else {
        sectionLose.style.display = 'block'
        sectionPost.style.display = 'none'
    }
}

function reloadGame() {
    location.reload()
}