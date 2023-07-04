const sectionWin = document.getElementById('win')
const sectionLose = document.getElementById('lose')
const sectionPost = document.getElementById('post')

let btnSubmit = document.getElementById("btn-enviar")
let numberSelect = document.getElementById("number-select")

btnSubmit.addEventListener("click", function() {
    if (numberSelect.value === "1") {
    sectionPost.style.display = 'none'
    sectionWin.style.display = 'flex'
    } else {
    sectionPost.style.display = 'none'
    sectionLose.style.display = 'flex'
    }
})

function reloadGame() {
    location.reload()
}