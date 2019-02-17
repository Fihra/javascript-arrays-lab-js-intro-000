var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(newKitten){
  kittens.push(newKitten);
  return kittens;
}

function destructivelyPrependKitten(newKitten){
  kittens.unshift(newKitten);
  return kittens;
}

function destructivelyRemoveLastKitten(newKitten){
  kittens.pop(newKitten);
  return kittens;
}

function destructivelyRemoveFirstKitten(newKitten){
  kittens.shift(newKitten);
  return kittens;
}

function appendKitten(newKitten){
  var newArray = kittens.concat(newKitten);
  return newArray;
}

function prependKitten(newKitten){
  var newArray = [newKitten, ...kittens];
  return newArray;
}

function removeLastKitten(){
  var newArray = kittens.splice(2,1);
  return newArray;
}
