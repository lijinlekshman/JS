'use strict';

//creating map from scratch
const question = new Map([
    ['question', 'What is the best programming language in the world?'],
    [1, 'C'],
    [2, 'Java'],
    [3, 'Javascript'],
    ['correct', 3],
    [true, 'Correct'],
    [false, 'Try Again!']
]);

console.log(question);


//convert object to map
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

//Quiz app
console.log(question.get('question'));
for(const [key, value] of question) {
    if(typeof key === 'number') console.log(`Answer ${key} : ${value}`);
}

const answer = Number(prompt('Your Answer'));
console.log(answer); 

console.log(question.get(question.get('correct') === answer));