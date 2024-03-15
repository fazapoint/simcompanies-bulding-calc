const selectBuildingType = document.querySelector("#buildingType")
const selectBuildingLevel = document.querySelector('#buildingLevel')

const buildingTypes = ["Aerospace electronics", "Aerospace factory", "Automotive R&D", "Bakery", "Bank", "Beverage factory", "Breeding laboratory"]

buildingTypes.forEach(value => {
    let option = document.createElement("option");
    option.text = value;
    option.value = value;
    selectBuildingType.appendChild(option);
})

for (let i = 1; i <= 50; i++){
    let option = document.createElement("option");
    option.text = i;
    option.value = i;
    selectBuildingLevel.appendChild(option)
}