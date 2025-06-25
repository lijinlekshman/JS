'use strict';

const gameEvents = new Map([
    [17, '⚽ GOAL'],
    [36, '👕 Subtitution'],
    [47, '⚽ GOAL'],
    [61, '👕 Subtitution'],
    [64, '🟨 Yellow Card'],
    [69, '🟥 Red Card'],
    [70, '👕 Subtitution'],
    [72, '👕 Subtitution'],
    [76, '⚽ GOAL'],
    [80, '⚽ GOAL'],
    [92, '🟨 Yellow Card'],
])

// Challenge 1.
console.log(gameEvents.values());
const events = [...new Set(gameEvents.values())];
console.log(events);


// Challenge 2.
gameEvents.delete(64);

// Challenge 3.
console.log(`An event happened, on average, every ${90 / gameEvents.size} minutes`);
//additional Bonus
const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(`An event happened, on average, every ${time / gameEvents.size} minutes`);


// Challenge 4. 
for (const [min, event] of gameEvents){
    const half = min <= time/2 ? 'FIRST' : 'SECOND';
    console.log(`[${half} Half] ${min} : ${event}`);
}

