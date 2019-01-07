console.log("1. length: ", cerealData.length);

// names of Kellogs cereals

// filter to choose the right ones
// map to get the names
// forEach
// log each one

// detect whether a single cereal is a kellogs cereal
const isKellogs = function(cereal) {
  return cereal.mfr === "K";
};

// filter to choose the cereals whose mfr is 'K'

const kellogs = cerealData.filter(isKellogs);
console.log(kellogs);

// map to get the names of some cereals

const getName = function(cereal) {
  return cereal.name;
};

const kellogsNames = kellogs.map(getName);

const logInput = function(input) {
  console.log(input);
};

// cerealData
//   .filter(isKellogs)
//   .map(getName)
//   .forEach(logInput);

// log for any manufacturer

function isManufacturer(manufacturer) {
  // all the variables here, are available in the function
  return function(cereal) {
    return cereal.mfr === manufacturer;
  };
}

function logForManufacturer(manufacturer) {
  cerealData
    .filter(
      isManufacturer(manufacturer)
      /*
    function(cereal) {
      return cereal.mfr === manufacturer
    }
    */
    )
    .map(getName)
    .forEach(logInput);
}

logForManufacturer("Q");
