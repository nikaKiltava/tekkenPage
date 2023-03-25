let audio = document.getElementById("character-hover-sound")
const characters = Array.from(document.getElementsByClassName("character"));
const charactersArray = ["Kazuya", "Bryan", "Jin", "King", "Hwoarang", "Kazumi", 
"Heihachi", "Eddy", "Paul", "Yoshimitsu", "Julia", "Law"]

const characterQuotes = [
    "If you want something, you must take it for yourself, or forever live in regret.",
    "Ain't nothing gonna save you now boy!",
    "Real power is to strike fear in a man without saying a single word. Remember that.",
    "My mask is a symbol of my pride! Yours is just to protect your girly face!",
    "One hit and you're done. Bring it! You're no challenge at all.",
    "Pleased to meet you -- please accept my kindest regards.",
    "My Tekken will create the destruction of the Devil and the renewal of the Gods!",
    "Let's Finish This Now!",
    "You wanna be a human, I wanna be the universe's greatest fighter.",
    "Your power, of great use it is to me. Savage brute! Be gone!",
    "Spirits, give me strength. Thank you, spirits. Okay. Your sacrifice won't be in vain.",
    "You have your reasons for fighting, but so do I! That's why I can't give up here!"
]

const quote = document.getElementById("quote")
const kazuya = document.getElementById("kazuya")
const bryan = document.getElementById("bryan")
const bryanSound = document.getElementById("bryan-sound");
const jin = document.getElementById("jin")
const king = document.getElementById("king")
const hwoarang = document.getElementById("hwoarang")
const kazumi = document.getElementById("kazumi")
const heihachi = document.getElementById("heihachi")
const eddy = document.getElementById("eddy")
const paul = document.getElementById("paul")
const yoshimitsu = document.getElementById("yoshimitsu")
const julia = document.getElementById("julia")
const law = document.getElementById("law")
const charSelectSound = document.getElementById("char-select-sound")
const characterSelectHover = document.getElementById("character-select")


characters.forEach(character =>{
    character.addEventListener('mouseover', function hoverSound(){
            audio.play();
    })
    character.addEventListener('click', function selectSound(){
        charSelectSound.play();
    })
})


bryan.addEventListener("click", function(){
    bryanSound.play();
});


function hoverCharacter(n){
    characterSelectHover.innerHTML = charactersArray[n];
    quote.innerHTML = characterQuotes[n];
}
function chooseCharacterSentence(){
    characterSelectHover.innerHTML = "select character";
    quote.innerHTML = "True King Never Dies. Never Give Up Soldier. Fight For Your Life";
}