const colorList = ["pallet", "viridian", "pewter", "cerulean", "vermillion", "lavender", "celadon", "saffron", "fuschia", "cinnabar"];
const house = document.querySelector("#house")

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

        house.classList.remove(house.classList[1])

        house.classList.add(item.classList[1])
    })
})