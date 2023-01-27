// global variables
let pokeId;
let audioStart;
var pokeName;
let audioCorrect;
let randNames;
let points = 0;
let highscore = 0;

// functions
let addZeros = function (pokeId) {
    if (pokeId < 10) {
        return `00${pokeId}`;
    } else if (pokeId < 100) {
        return `0${pokeId}`;
    } else {
        return pokeId;
    }
};

function fetchName(id) {
    return fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            return data["names"][5]["name"];
        })

};

let fetchPokeNames = function (num) { // works? 
        for (let i = 0; i < num; i++) {
            fetchName(Math.floor(Math.random() * 893))
                .then((value) => {
                    randNames.push(value);
                    console.log("generated: "+ randNames);
                })
                .then(() => {
                    fetchName(pokeId)
                        .then((value) => {
                            pokeName = value;
                        })
                        .then(() => {
                            console.log("received: "+ randNames);
                            for (let i = 0; i < 4; i++) {
                                document.getElementsByTagName("button")[i].innerHTML = randNames[i];
                            }
                            document.getElementsByTagName("button")[Math.floor(Math.random() * 4)].innerHTML = pokeName;
                        }) 
                })
        }
};

let checkAnswer = function (clicked_id) {
    console.log(clicked_id);
    document.getElementById("pokemonImg").style.filter = "brightness(100%)";
    if (document.getElementById(clicked_id).innerHTML === pokeName) {
        document.getElementById(clicked_id).style.backgroundColor = "green";
        console.log("correct sound");
        audioCorrect.play();
        points += 1;
        if (highscore < points) {
            highscore = points;
        }
    } else {
        points = 0;
        let buttons = document.getElementsByClassName("button");
        for (let i = 0; i < buttons.length; i++) {
            if (document.getElementById(`b${i + 1}`).innerHTML === pokeName) {
                document.getElementById(`b${i + 1}`).style.backgroundColor = "green";
            } else {
                document.getElementById(`b${i + 1}`).style.backgroundColor = "red";
            }
        }
    }
    document.getElementById("highscore").innerHTML = `highscore: ${highscore}`;
    document.getElementById("points").innerHTML = `points: ${points}`;
    console.log("waiting...");
    setTimeout(function () {
        setup();
    }, 2000)
};

function setup() {
    for (let i = 0; i < 4; i++) { document.getElementById(`b${i + 1}`).style.backgroundColor = null };
    document.getElementById("pokemonImg").style.filter = "brightness(0%)";
    pokeId = Math.floor(Math.random() * 893);
    audioStart = new Audio("assets/whos-that-pokemon.mp3");
    pokeName = "";
    audioCorrect = new Audio("assets/correct.mp3");
    randNames = [];
    let pokeIdZeros = addZeros(pokeId);
    let pokeImg = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokeIdZeros}.png`;
    document.getElementById("pokemonImg").src = pokeImg;
    fetchPokeNames(4) // works
}

setup()
audioStart.play();