if (parseInt(localStorage.getItem('stars')) > 4) {
    window.location.href = './gameover.html';
}

const room = document.querySelector('div.room');
const row = document.querySelector('div.row');
const subtitle = document.getElementById('subtitle');
const options = document.getElementsByClassName('option');
let money = parseInt(localStorage.getItem('money'));

room.style.backgroundImage = 'url(assets/sauloffice.jpg)'

async function typeSentence(sentence, delay = 60) {
    subtitle.innerText = '';
    const letters = sentence.split("");
    let i = 0;
    while(i < letters.length) {
      await waitForMs(delay);
      subtitle.append(letters[i].toUpperCase());
      i++
    }
    return;
}
  
function waitForMs(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

function createCharacter(guy) {
    const character = document.createElement('img')
    character.classList.add('choose-your-character-character-choosen')
    character.src = guy;
    if (guy === './assets/saul.png') {
        character.classList.add('flip')
    }
    row.appendChild(character);
}

createCharacter(`./assets/${parseInt(localStorage.getItem('character'))}.png`)
createCharacter('./assets/saul.png')

options[1].onclick = function(){
    if (options[1].innerText.toUpperCase() === 'YES') {
        localStorage.setItem('assets', '');
        localStorage.setItem('money', 0); 
        localStorage.setItem('stars', 0);
        typeSentence("Saul Goodman: Can't say it's been a pleasure.")
        setInterval(function () {window.location.href = "./map.html";}, 5000);
    } else {
        typeSentence("Saul Goodman: Are you sure? You have to understand there's no coming back from this. You're gonna get new socials, new identities, you can't contact your friends or relatives ever again.")
        options[1].innerText = 'yes';
    }
};

options[0].onclick = function(){
    window.location.href = "./map.html";
};