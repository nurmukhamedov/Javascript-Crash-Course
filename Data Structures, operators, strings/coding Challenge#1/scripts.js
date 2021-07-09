const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },

    printGoals: function({ lewandowski, muller, davies, kimmich }) {
        console.log(`Lewandowki socred ${lewandowski} goals and Muller played on ${muller}, Davies playes on${davies}, Kimmich played on ${kimmich}`);
    }
};

const [player1, player2] = game.players;
console.log(player1, player2);

const [gk, ...fieldPlayers] = player1;
console.log(gk, fieldPlayers);
const [gk2, ...fieldPlayers2] = player2;
console.log(gk2, fieldPlayers2);

const allPlayers = [...player1, ...player2];
console.log(allPlayers);

const players1final = [...player1, 'Thiago', 'Countinho', 'Perisic'];
console.log(players1final);

const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);

game.printGoals({
    lewandowski: 2,
    muller: 20,
    davies: 17,
    kimmich: 6
})
