const game = {
    team1: 'India',
    team2: 'Sri Lanka',
    players:[
        [
            'Dhoni', 
            'Raina', 
            'Jadeja', 
            'Ashwin',
            'Gambhir',
             'Kohli', 
             'Rohit', 
             'Rahane'
        ],
        [
            'Sangakkara',
            'Jayawardene',
            'Dilshan',
            'Malinga',
            'Perera',
            'Mathews',
            'Chameera',
            'Kusal'          
            ]
    ],
    score: '4:0',
    scored: ['Dhoni', 'Raina', 'Jadeja', 'Ashwin', 'Sangakkara', 'Jayawardene'],
    date: 'Nov 10th, 2023',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5
    }
}

//challenge 1
const [players1, players2] = game.players;
console.log(players1, players2)

//challenge 2
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

//challenge 3
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

//challenge 4
const players1Final = [...players1, 'Yuvaraj', 'Raina', 'Sachin'];
console.log(players1Final);

//challenge 5
const {odds: {team1, x:draw, team2}} = game;
console.log(team1, draw, team2);


//challenge 6
const printGoals = function(...players){
console.log(`${players.length} goals were scored`)
}

printGoals('Sevag', 'Pathan', 'laxman');

printGoals(...game.scored);

//challenge 7
team1 < team2 && console.log(`Team 1 is the Winner`);
team1 > team2 && console.log(`Team 2 is the Winner`);
