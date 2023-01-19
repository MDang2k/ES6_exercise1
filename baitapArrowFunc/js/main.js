const colorList = ["pallet", "viridian", "pewter", "cerulean", "vermillion", "lavender", "celadon", "saffron", "fuschia", "cinnabar"];

colorList.forEach(item => {
    document.querySelector("#colorContainer").innerHTML +=
        `
    <button class="color-button ${item}">
    </button>`
});

document.querySelector(".color-button").classList.add("active")

document.querySelectorAll(".color-button").forEach(item => {
    item.addEventListener("click", () => {
        document.querySelector(".active").classList.remove("active")
        item.classList.add("active")

        document.querySelector("#house").classList.add()
    })
})