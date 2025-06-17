'use strict';

const weekdays = [
    'Sunday',
    'monday',
    'Tuesday',
    'Wednesday',
    'Thurseday',
    'Friday',
    'Saturday',
]

const openingHours = {
        [weekdays[1]]: {
            open : '7:30 AM',
            Close: '10:30 PM',
        },
        Tue : {
            open : '6:30 AM',
            Close: '9:30 PM',
        },
        Wed : {
            open : '8:30 AM',
            Close: '11:30 PM',
        },
        [weekdays[4]]: {
            open : '9:30 AM',
            Close: '10:30 PM',
        },
        Fri : {
            open : '10:30 AM',
            Close: '10:30 PM',
        },
};

const restaurant = {

    name : 'Alakapuri',
    catergories: ['Italian', 'Indian', 'Chineese', 'Fast food'],
    starterMenu : ['Dosa', 'Idily', 'Porotta', 'Snacks'],
    mainMenu : ['Chicken Biriyani', 'Beef Biriyani', 'Kappa Biriyani', 'Fried Rice', 'Noodles'],
    location : 'Civil Jn, Kakkanad',
    //ES6 Object Literal
    openingHours,

    //old method of function
    // order: function(starterIndex, mainIndex){
    //     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    // },


    // New ES6 method ^
    order(starterIndex, mainIndex){
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderPasta : function(ing1, ing2, ing3){
        console.log(`Here is Your Delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
    },

    orderDelivery: function({
        starterIndex = 1,
        mainIndex = 0,
        time = '20:00',
        address,
    }){
        console.log(
            `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
        );
    },
}


console.log(restaurant)

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for(const item of menu) console.log(item);

console.log('------------------------------- Next ----------------------')

for(const item of menu.entries()){
    console.log(`${item[0] + 1} : ${item[1]}`);
}

console.log('------------------------------- Next ----------------------')
//De-structuring
for(const [i, el] of menu.entries()){
    console.log(`${i + 1}: ${el}`)
}


// -------------------- ENHANCED OBJECT LITERALS ----------------------- //

if(restaurant.openingHours && restaurant.openingHours.sat) console.log(restaurant.openingHours.sat.open);

//with optional chaining
console.log(restaurant.openingHours.sat?.open);

//Example
const days = [
    'Sunday',
    'monday',
    'Tuesday',
    'Wednesday',
    'Thurseday',
    'Friday',
    'Saturday',
]

for (const day of days){
    const open = restaurant.openingHours[day]?.open ??  'closed';
    console.log(`On ${day}, we open at ${open}`);
}


//optional chaining on Methods
 console.log(restaurant.order?.(1,2) ?? 'Method does not Exist');

 console.log(restaurant.orderRosotto?.(1,2) ?? 'Method does not exist');


 //Arrays
 