//make function named userFlavorCount
//that accepts a string of a list of flavors as a parameter named flavorList
const userFlavorCount =(flavorList) => {
    const flavorsArray = flavorList.split(',');
    let flavorsObject = {};
    for(let i = 0; i < flavorsArray.length; i++) {
        flavorsObject[flavorsArray[i]] = 0;
        }
        const flavorKeys = Object.keys(flavorsObject);
        console.log(flavorKeys);
    for(let i = 0; i < flavorsArray.length; i++) {
        for(let j = 0; j < flavorKeys.length; j++) {
            if(flavorsArray[i] === flavorKeys[j]) {
                flavorsObject[flavorKeys[j]]++;
            }
        }
    }
    console.log(flavorsObject);
}

//mak const variable named flavorsArray that takes flavorList string and splits into array
//make const variable named flavorObject set empty object
// add for loop to get each index in array
userFlavorCount('vanilla,chocolate,peach,chocolate,vanilla,vanilla,strawberry');