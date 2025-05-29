'use strict';

//Global 
conole.log(this);

//Regular funcation - Global Method

const calcAge = function(birthYear){
    console.log(2025-birthYear);
    console.log(this);
};
calcAge(1991);



//Arrow function - Global Scope

const calcAgeArrow = birthYear => {
    console.log(2025-birthYear);
    console.log(this);
};
calcAgeArrow(1991);



// Method 
const lijin = {
    year: 1991,
    calcAge:function(){
        console.log(this);
        console.log(2025 - this.year);
    },
};
lijin.calcAge();


const endhinu = {
    year:2017,
};

endhinu.calcAge = lijin.calcAge;
endhinu.calcAge();