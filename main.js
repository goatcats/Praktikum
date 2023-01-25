let audioStart = new Audio("assets/whos-that-pokemon.mp3");
audioStart.play();
console.log("starting sound");
let addZeros = function (pokeId) {
    if (pokeId < 10) {
        return `00${pokeId}`;
    } else if (pokeId < 100) {
        return `0${pokeId}`;
    } else {
        return pokeId;
    }
};
let pokeId = Math.floor(Math.random() * 893)
let pokeIdZeros = addZeros(pokeId);

let pokeImg = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokeIdZeros}.png`;
document.getElementById("pokemonImg").src = pokeImg;

let fetchPokeNames = function (num) {
    let randNames = [];
    for (i = 0; i < num; i++) {
        $.getJSON(`https://pokeapi.co/api/v2/pokemon-species/${Math.floor(Math.random() * 893)}`, function (randData) {
            let randName = randData["names"][5]["name"];
            randNames.push(randName);
        });
    }
    return randNames;
};
let randNames = fetchPokeNames(4);
var pokeName;
let setButtons = function () {
    $.getJSON(`https://pokeapi.co/api/v2/pokemon-species/${pokeId}`, function (data) {
        let pokeInfo = data;
        pokeName = pokeInfo["names"][5]["name"];
        document.getElementsByTagName("button")[0].innerHTML = randNames[0];
        document.getElementsByTagName("button")[1].innerHTML = randNames[1];
        document.getElementsByTagName("button")[2].innerHTML = randNames[2];
        document.getElementsByTagName("button")[3].innerHTML = randNames[3];
        document.getElementsByTagName("button")[Math.floor(Math.random() * 4)].innerHTML = pokeName;
    }).done(function () {
        //
    });
}
setButtons()
let audioCorrect = new Audio("assets/correct.mp3");

let checkAnswer = function (clicked_id) {
    console.log(clicked_id);
    if (document.getElementById(clicked_id).innerHTML === pokeName) {
        document.getElementById(clicked_id).style.backgroundColor = "green";
        console.log("correct sound");
        audioCorrect.play();
    } else {
        let buttons = document.getElementsByClassName("button");
        for (let i = 0; i < buttons.length; i++) {
            if (document.getElementById(`b${i + 1}`).innerHTML === pokeName) {
                document.getElementById(`b${i + 1}`).style.backgroundColor = "green";
            } else {
                document.getElementById(`b${i + 1}`).style.backgroundColor = "red";
            }
        }
    }
    console.log("waiting...");
    setTimeout(function() {
        location.reload();
    }, 2000)
};