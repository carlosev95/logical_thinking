const sectionWin = document.getElementById('win')
const sectionLose = document.getElementById('lose')
const sectionPost = document.getElementById('post')

let btnSubmit = document.getElementById("btn-enviar")
let numberSelect = document.getElementById("number-select")

btnSubmit.addEventListener("click", function() {
    if (numberSelect.value === "1") {
    sectionPost.style.display = 'none'
    sectionWin.style.display = 'block'
    } else {
    sectionPost.style.display = 'none'
    sectionLose.style.display = 'block'
    }
})

function reloadGame() {
    location.reload()
}