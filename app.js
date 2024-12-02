// const pokemon = require("./data.js");

const game = {
    party: [],
    gyms: [
        { location: "Pewter City", completed: false, difficulty: 1 },
        { location: "Cerulean City", completed: false, difficulty: 2 },
        { location: "Vermilion City", completed: false, difficulty: 3 },
        { location: "Celadon City", completed: false, difficulty: 4 },
        { location: "Fuchsia City", completed: false, difficulty: 5 },
        { location: "Saffron City", completed: false, difficulty: 6 },
        { location: "Cinnabar Island", completed: false, difficulty: 7 },
        { location: "Viridian City", completed: false, difficulty: 8 },
    ],
    items: [
        { name: "potion", quantity: 4 },
        { name: "pokeball", quantity: 8 },
        { name: "rare candy", quantity: 99 },
    ],
}

// Exercise 1 ..................................................
// console.dir(pokemon, { maxArrayLength: null });
console.log(pokemon[58].name);

// Exercise 2 ..................................................
console.log(game);


// Exercise 3 ..................................................
game.difficulty = "Medium";

console.log(game);


// Exercise 4 ..................................................
console.log(pokemon[0].name);

game.party.push(pokemon[0])

console.log(game.party)


// Exercise 5 ..................................................

game.party.push(pokemon[30], pokemon[59], pokemon[110]);

console.log(game.party)


// Exercise 6 ..................................................

for (let idx in game.gyms){
    // console.log(game.gyms[idx])
    // console.log(game.gyms[idx].difficulty)
    if (game.gyms[idx].difficulty < 3) {
        game.gyms[idx].completed = true;
    }
}

console.log(game.gyms)

// Exercise 7 ..................................................

// game.party[0] = pokemon[1]

// console.log(game.party[0]);
// console.log(game.party)

game.party.splice(0, 1, pokemon[1])
console.log(game.party)



// Exercise 8 ..................................................

Object.values(game.party).forEach(function(val){
    console.log(val.name)
});

for (let idx in game.party) {
    console.log(game.party[idx].name)
}

// Exercise 9 ..................................................
let starterPokemon = [];

for (let idx in pokemon) {
    if (pokemon[idx].starter === true) {
        starterPokemon.push(pokemon[idx])
    }
}

console.log(starterPokemon);

Object.values(starterPokemon).forEach(function(idx){
    console.log(`Pokemon ${idx.number}: ${idx.name}`)
});

// Exercise 10 ..................................................

game.catchPokemon = function(pokemonObj) {
    game.party.push(pokemonObj);
};

game.catchPokemon(pokemon[26]);
console.log(game.party);

// Exercise 11 ..................................................
game.catchPokemon2 = function(pokemonObj) {
    game.party.push(pokemonObj);
    game.items[1].quantity += -1
};

game.catchPokemon2(pokemon[144])
console.log(game.party);
console.log(game.items);

// Exercise 12 ..................................................
for (let idx in game.gyms){
    if (game.gyms[idx].difficulty < 6) {
        game.gyms[idx].completed = true;
    }
}

console.log(game.gyms)

// Exercise 13 ..................................................

game.gymStatus = function() {
    const gymTally = { completed : 0, incomplete : 0};
    for (let i = 0; i < game.gyms.length; i++) {
        if (game.gyms[i].completed === true) {
            gymTally.completed += 1;
        } else {
            gymTally.incomplete += 1;
        }
    }
    console.log(gymTally);
}

game.gymStatus();

// Exercise 14 ..................................................

game.partyCount = function() {
    return game.party.length
};

game.partyCount();
console.log(game.partyCount());


// Exercise 15 ..................................................
for (let idx in game.gyms){
    if (game.gyms[idx].difficulty <= 8) {
        game.gyms[idx].completed = true;
    }
}

game.gymStatus();
console.log(game.gyms);

// Exercise 16 ..................................................
console.log(game);

// Exercise 17 ..................................................

game.party.sort((a,b) => b.hp - a.hp);
console.log(game.party)

// Exercise 18 ..................................................
// When adding pokemons to game.party remove the pokemon with the lowest hp

game.collection = [];

game.catchPokemon3 = function(pokemonObj) {
    if (game.party.length < 6){
        game.party.push(pokemonObj);

    } else {
        game.collection.push(game.party.at(-1));
        game.party.splice(-1, 1, pokemonObj);
    } 
        game.party.sort((a,b) => b.hp - a.hp);    
        game.items[1].quantity += -1
};

game.catchPokemon3(pokemon[93]);
game.catchPokemon3(pokemon[5]);

// console.log(game.party);
// console.log(game.collection);
// console.log(game.items);

// Exercise 19 ..................................................

game.catchPokemon4 = function(pokemonObj) {
    if (game.items[1].quantity <= 0 ){
        return console.log('There are not enough pokeballs to catch the desired Pokemon.')
    
    } else if (game.party.length < 6){
            game.party.push(pokemonObj);

    } else {
            game.collection.push(game.party.at(-1));
            game.party.splice(-1, 1, pokemonObj);
        } 
            game.party.sort((a,b) => b.hp - a.hp);    
            game.items[1].quantity += -1
};

game.catchPokemon4(pokemon[120]);
// game.catchPokemon4(pokemon[13]);
// game.catchPokemon4(pokemon[59]);
// game.catchPokemon4(pokemon[65]);
// game.catchPokemon4(pokemon[114]);

console.log(game.party);
console.log(game.collection);
console.log(game.items);

// game.catchPokemon4(pokemon[49]);


// Exercise 20 ..................................................
game.catchPokemon5 = function(pokemonName) {
        index = pokemon.findIndex(pokemon => pokemon.name.toLowerCase() === pokemonName.toLowerCase());
        console.log(index);

        if (index === -1) {
            return console.log('The selected Pokemon does not exist :(')

        }else if (game.items[1].quantity <= 0 ){
            return console.log('There are not enough pokeballs to catch the desired Pokemon.')
    
        } else if (game.party.length < 6){
                game.party.push(pokemon[index]);

        } else {
                game.collection.push(game.party.at(-1));
                game.party.splice(-1, 1, pokemon[index]);
            } 
                game.party.sort((a,b) => b.hp - a.hp);    
                game.items[1].quantity += -1
};

game.catchPokemon5('hAuNter');
console.log(game.party);
console.log(game.collection);
console.log(game.items);

// Exercise 21 ..................................................

const pokemonByType = Object.groupBy(pokemon, ({type}) => type);


console.dir(pokemonByType, { maxArrayLength: null })





