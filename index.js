function findMatching(driversNames, name){
    name = name.toLowerCase () 
return driversNames.filter(dName => dName.toLowerCase() === name);
}

function fuzzyMatch(driversNames, name){
return driversNames.filter(dName => dName.startsWith(name))
}

function matchName(driversNames, name){
return driversNames.filter(driver => driver.name === name)   
}