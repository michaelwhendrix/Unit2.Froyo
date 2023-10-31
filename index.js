//make function named userFlavorCount
//that accepts a string of a list of flavors as a parameter named flavorList
const userFlavorCount =(flavorList) => {
    const flavorsArray = flavorList.split(',');
    let flavorObject = {};
    flavorObject[flavorsArray[0]] = 1;
    console.log(flavorObject);
}
//mak const variable named flavorsArray that takes flavorList string and splits into array
//make const variable named flavorObject set empty
userFlavorCount('vanilla,chocolate,peach,chocoalate,vanilla,vanilla,strawberry');