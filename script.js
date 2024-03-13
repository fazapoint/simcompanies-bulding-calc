const select = document.querySelector("#buildings")
const levelSlider = document.querySelector('#levelSlider');
const sliderValue = document.querySelector('#sliderValue')

const buildingTypes = ["Aerospace electronics", "Aerospace factory", "Automotive R&D", "Bakery", "Bank", "Beverage factory", "Breeding laboratory"]

buildingTypes.forEach(value => {
    let option = document.createElement("option");
    option.text = value;
    option.value = value;
    select.appendChild(option);
})

sliderValue.innerText = levelSlider.value;

levelSlider.addEventListener("input", () => {
    sliderValue.innerText = levelSlider.value
})