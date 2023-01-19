let str = document.querySelector(".heading")

const chars = [...str.innerHTML]

str.innerHTML = ""

chars.forEach(item => {
    str.innerHTML += `
        <span>${item}</span>
    `
})