const selectBuildingType = document.querySelector("#buildingType")
const selectBuildingLevel = document.querySelector('#buildingLevel')

const buildingTypes = [
    {
        name: "Aerospace electronics",
        baseCost: 141450,
        baseTime: 6,
        baseRC: 164,
        baseBricks: 2255,
        basePlanks: 656,
        baseCU: 41
    },
    {
        name: "Aerospace factory",
        baseCost: 106950,
        baseTime: 6,
        baseRC: 124,
        baseBricks: 1705,
        basePlanks: 496,
        baseCU: 31
    },
    {
        name: "Automotive R&D",
        baseCost: 138000,
        baseTime: 6,
        baseRC: 160,
        baseBricks: 2200,
        basePlanks: 640,
        baseCU: 40
    },
    "Bakery",
    "Beverage factory",
    "Breeding laboratory",
    "Car dealership",
    "Car factory",
    "Catering",
    "Chemistry laboratory",
    "Concrete plant",
    "Construction factory",
    "Electronics factory",
    "Electronics store",
    "Factory",
    "Farm",
    "Fashion & Design",
    "Fashion factory",
    "Fashion store",
    "Food processing plant",
    "Gas station",
    "General contractor",
    "Grocery store",
    "Hangar",
    "Hardware store",
    "Kitchen",
    "Launch pad",
    "Mill",
    "Mine",
    "Oil rig",
    "Physics laboratory",
    "Plant research center",
    "Power plant",
    "Propulsion factory",
    "Quarry",
    "Ranch",
    "Refinery",
    "Restaurant",
    "Sales offices",
    "Shipping depot",
    "Slaughterhouse",
    "Software R&D",
    "Vertical integration facility",
    "Water reservoir"
];

let default_building_option = document.createElement("option");
default_building_option.text = "Choose here"
selectBuildingType.append(default_building_option);

buildingTypes.forEach(building => {
    let option = document.createElement("option");
    option.text = building.name;
    option.value = building.name;
    selectBuildingType.appendChild(option);
});

for (let i = 1; i <= 50; i++){
    let option = document.createElement("option");
    option.text = i;
    option.value = i;
    selectBuildingLevel.appendChild(option)
};