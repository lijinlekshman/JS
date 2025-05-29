const resturant = {
    name : 'Melino Foods',
    location: 'Los angels, california, USA',
    categories: ['Italian', 'Pizzeria', 'Vegitarian', 'Chinese'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Ramen', 'Manthi'],
    order: function(starterIndex, mainIndex){
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    }
};

let [ek, dho] = resturant.categories;
console.log(ek, dho);

//we can skip the element with
let [e, , f] = resturant.categories;
console.log(e, f);

// we can switch variables - first we need to declare in let

const temp = e;
e = f;
f = temp;

console.log(e,f);

// we can switch the values with - re-assigning values -  without temperory middle variable like above

[ek, dho] = [dho, ek];
console.log(ek, dho);


// Receive 2 return values from a function
console.log(resturant.order(2,0));

//---------------------------------------------------------------------------------------//

// Nested destructing
const nested = [2,4,[5,6]];
const [i, , j] = nested;

console.log(i, j); // 2 [5,6]

// Nested for individual values
const [k, ,[l, m]] = nested;
console.log(k,l,m); // 2 5 6


//-------------------------------------------------------------------------------------//

//Default values
const [p=1, q=1, r=1] = [8,9];
console.log(p, q, r); //8 9 1


