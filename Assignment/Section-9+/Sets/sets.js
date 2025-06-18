'use strict';
const italianFoods = new Set([
    'pasta',
    'gnocchi',
    'tomatoes',
    'olive oil',
    'garlic',
    'basil',
]);

const mexicanFoods = new Set([
    'tortillas',
    'beans',
    'rice',
    'tomatoes',
    'avocado',
    'garlic',
])


//interseciton in sets
const commonFoods = italianFoods.intersection(mexicanFoods);
console.log(commonFoods);
console.log([...commonFoods]);

//uninon in sets
const ItalianMexicanFusion = italianFoods.union(mexicanFoods);
console.log('Union:', ItalianMexicanFusion);

console.log([...new Set([...italianFoods, ...mexicanFoods])]);


//difference in sets
const uniqueItalian = italianFoods.difference(mexicanFoods);
console.log(uniqueItalian);

const uniqueMexican = mexicanFoods.difference(italianFoods);
console.log(uniqueMexican);


//symmetricDifference in sets
const unqItaMexFoods = italianFoods.symmetricDifference(mexicanFoods);
console.log(unqItaMexFoods);


//isDisjointFrom in sets
console.log(italianFoods.isDisjointFrom(mexicanFoods));

//subsetof in sets
// console.log(italianFoods.subsetOf(mexicanFoods));

//isSupersetof
console.log(mexicanFoods.isSupersetOf(italianFoods));