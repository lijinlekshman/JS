'use strict';

function calcAge(birthYear){
    const age = 2025 - birthYear;
    console.log(firstName);

    function printAge(){
        const output = `${firstName} are ${age}, born in ${birthYear}`;
        console.log(output);

        if(birthYear >= 1981 && birthYear <= 1996){
            var millenial = true;
            const str = `Oh, and Your are a Millenial, ${firstName}`;
            console.log(str);
        }
        //  console.log(str); // blocking scope cant call outside
          console.log(millenial); // variable declasred with var is function scope and its can be a ccess from outer side but in the same function; 
    }
    printAge();
    return age;
}

const firstName = 'Lijin';
calcAge(1991);
// console.log(age); // cannot access in outer
// printAge(); // cannot access in outer


