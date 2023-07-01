const sectionWin = document.getElementById('win')
const sectionLose = document.getElementById('lose')
const sectionPost = document.getElementById('post')

function checkNumber() {
    let select1 = document.getElementById('number-top')
    let select2 = document.getElementById('number-bottom')

    let valorSelect1 = select1.value
    let valorSelect2 = select2.value

    if (valorSelect1 === "4" && valorSelect2 === "6") {
        sectionPost.style.display = 'none'
        sectionWin.style.display = 'block'
    } else {
        sectionPost.style.display = 'none'
        sectionLose.style.display = 'block'
    }
}
  
function reloadGame() {
    location.reload()
}