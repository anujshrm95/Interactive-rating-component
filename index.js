const card1 = document.querySelector(".card")
const card2 = document.querySelector(".card2")
const submit = document.querySelector(".submit")
const ratin = document.querySelector(".ratin")
const bttns = document.querySelectorAll(".btn")

submit.addEventListener("click", ()  =>{
    card2.classList.remove("hidden")
    card1.style.display = "none"
})

bttns.forEach((btn) => {
    btn.addEventListener("click", () =>{
        ratin.innerHTML = btn.innerHTML
    })
});
