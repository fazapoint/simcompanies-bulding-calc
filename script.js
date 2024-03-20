const selectBuildingType = document.querySelector("#buildingType");
const selectBuildingLevel = document.querySelector('#buildingLevel');
const basePreview = document.querySelector('.basePreview');

const fetchedDataBuilding = []; 
// fetch from api
async function fetchBuilding(callback){
    try{
        const response = await fetch('https://www.simcompanies.com/api/v2/constants/buildings');
        const data = await response.json();
        callback(data)
    } catch (error){
        console.error('Error fetching data:', error);
    }
}

fetchBuilding(data => {
    //process fetched data here
    const buildingNames = {
        "0": 
        {
            buildingName: "Building A",
            baseCost: 141450,
            baseBricks: 2255
        },
        "1": 
        {
            buildingName: "Building B",
            baseCost: 9999,
            baseBricks: 9999
        },
        "2": 
        {
            buildingName: "Building C",
            baseCost: 6666,
            baseBricks: 6666
        }
    }
    
    Object.keys(data).forEach(key => {
        const {
            dbLetter,
            costUnits,
            buildDuration
        } = data[key]
        const buildingInfo = buildingNames[key];
        const buildingObject = {
            dbLetter,
            costUnits,
            buildDuration,
            ...buildingInfo
        }
    
        
        if (buildingInfo){
            fetchedDataBuilding.push(buildingObject)
        }
       
    });
    
    // Select building option
    fetchedDataBuilding.forEach(item => {
        let option = document.createElement("option");
        option.text = item.buildingName;
        option.value = item.buildingName;
        selectBuildingType.appendChild(option);
    });
    console.log(fetchedDataBuilding)

    // select building level
    for (let i = 1; i <= 50; i++){
        let option = document.createElement("option");
        option.text = i;
        option.value = i;
        selectBuildingLevel.appendChild(option)
    };

    selectBuildingType.addEventListener('change', () => {
        let selectedBuildingName = selectBuildingType.value;
        let selectedBuilding = fetchedDataBuilding.find(element => element.buildingName == selectedBuildingName)
    
        basePreview.innerHTML = `<p>Base Cost: $${selectedBuilding.baseCost}</p>
                                 <p>Base Time: ${selectedBuilding.costUnits} units</p>
                                 <p>Base CU: ${selectedBuilding.buildDuration} seconds</p>`;    
    })
});