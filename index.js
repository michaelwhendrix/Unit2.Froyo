//make function named userFlavorCount
//that accepts a string of a list of flavors as a parameter named flavorList
const userFlavorCount =(flavorList) => {
    const flavorsArray = flavorList.split(',');
    let flavorsObject = {};
    for(let i = 0; i < flavorsArray.length; i++) {
        flavorsObject[flavorsArray[i]] = 1;
    }
    console.log(flavorsObject);
}
//mak const variable named flavorsArray that takes flavorList string and splits into array
//make const variable named flavorObject set empty
userFlavorCount('vanilla,chocolate,peach,chocoalate,vanilla,vanilla,strawberry');