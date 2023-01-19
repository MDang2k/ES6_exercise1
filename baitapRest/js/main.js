function average(...numbers) {
    let sum = 0
    for (const number of numbers) {
        sum += number
        count = numbers.length
    }
    return sum / count
}

document.querySelector("#btnKhoi1").addEventListener("click", () => {
    let mathScore = document.getElementById("inpToan").value * 1,
        physicsScore = document.getElementById("inpLy").value * 1,
        chemScore = document.getElementById("inpHoa").value * 1;

    document.getElementById("tbKhoi1").innerHTML = average(mathScore, physicsScore, chemScore)
})


document.querySelector("#btnKhoi2").addEventListener("click", () => {
    let litScore = document.getElementById("inpVan").value * 1,
        hisScore = document.getElementById("inpSu").value * 1,
        geoScore = document.getElementById("inpDia").value * 1,
        engScore = document.getElementById("inpEnglish").value * 1;

    document.getElementById("tbKhoi2").innerHTML = average(litScore, hisScore, geoScore, engScore)
})