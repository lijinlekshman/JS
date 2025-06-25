'use strict';

const airline = 'Lijin Air Kerala';
const plane = 'Boing A797';

console.log(plane[0]); //B
console.log(plane[1]);//o
console.log(plane[2]);//i

console.log('A320'[0]); //B 

console.log(airline.length);//16

console.log('A320'.length);//4

// Array Methods - indexOf
console.log(airline.indexOf('r'));//8

// Array Methods - lastIndexOf
console.log(airline.lastIndexOf('r'))//12

// Array Methods - indexOf - Words
console.log(airline.indexOf('Kerala'))//10

// Array Methods - slice
console.log(airline.slice(5)); //Air Kerala
console.log(airline.slice(5, 9)); // Air


// Array Methods - slice with indexOf
console.log(airline.slice(0, airline.indexOf( ' ')));// Lijin
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // Kerala


// Array Methods - slice with indexOf with Negative
console.log(airline.slice(-2)); // la
console.log(airline.slice(1, -1)); // ijin Air Keral

// Practice
const checkMidSeat = function(seat){
    const s = seat.slice(-1); 
    if(s === 'B' || s === 'E') console.log('You got the middle seat');
    else  console.log('You got lucky');
}

checkMidSeat('11B');
checkMidSeat('23C');
checkMidSeat('3E');


//replay
const priceGB = '288, 97$';
const priceUS = priceGB.replace('$', '&').replace(',', '.');

const announcement = 'All Passengers come to boarding door 23. Boarding door 23.'

//regular expression
console.log(announcement.replace(/door/g, 'gate'));

console.log(priceUS);

// Split
console.log('a+very+nice+string'.split('+'));//["a" "very", "nice", "string"]

console.log("Lijin Lekshman".split(" "));// ['Lijin', 'Lekshman']

const [firstName, lastName] = 'Lijin lekshman'.split(' ');

//join 
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const captalizeName = function(name){
    const names = name.split(' ');
    const namesUpper = [];

    for(const n of names){
    //    namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
    }
    console.log(namesUpper.join(' '));
}

captalizeName('jessica ann smith davis');
captalizeName('lijin lekshman');
captalizeName('arya lijin');


//padding
const message = 'Go to gate 25';
console.log(message.padStart(25, '+'));

console.log('Lijin'.padStart(20, '+').padEnd(25, '+'));

//credit card Number - masking
const maskCreditcard = function(number){
    const str = number + '';
    const last = str.slice(-4);
    return last.padStart(str.length, '*');
}

console.log(maskCreditcard(434215457121245));
console.log(maskCreditcard('434215457121245'));

//Repeat
const message2 = '* Bad Weather... All Departues Delayed... ';
console.log(message2.repeat(5));

const planeLine = function(n){
    console.log(`There are ${n} planes in Line ${'✈'.repeat(n)}`);
}

planeLine(5);
planeLine(3);
planeLine(12);