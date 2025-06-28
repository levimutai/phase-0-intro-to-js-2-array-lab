// Write your solution here!
// Appends a cat to the end of the cats array (destructive)
function destructivelyAppendCat(name) {
  cats.push(name);
}

// Prepends a cat to the beginning of the cats array (destructive)
function destructivelyPrependCat(name) {
  cats.unshift(name);
}

// Removes the last cat from the cats array (destructive)
function destructivelyRemoveLastCat() {
  cats.pop();
}

// Removes the first cat from the cats array (destructive)
function destructivelyRemoveFirstCat() {
  cats.shift();
}

// Returns a new array with a cat appended (nondestructive)
function appendCat(name) {
  return [...cats, name];
}

// Returns a new array with a cat prepended (nondestructive)
function prependCat(name) {
  return [name, ...cats];
}

// Returns a new array with the last cat removed (nondestructive)
function removeLastCat() {
  return cats.slice(0, cats.length - 1);
}

// Returns a new array with the first cat removed (nondestructive)
function removeFirstCat() {
  return cats.slice(1);
}