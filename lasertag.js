if (parseInt(localStorage.getItem('stars')) > 4) {
    window.location.href = './gameover.html';
}

const room = document.querySelector('div.room');
const row = document.querySelector('div.row');
const subtitle = document.getElementById('subtitle');
const options = document.getElementsByClassName('option');
let money = parseInt(localStorage.getItem('money'));
let ifhasnailsalonstatement = localStorage.getItem('assets') === null || !localStorage.getItem('assets').split(',').includes('laser tag');

room.style.backgroundImage = 'url(assets/lasertag.svg)'

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

if (!ifhasnailsalonstatement){
    options[1].innerText = 'Say hi'
}

options[1].onclick = function(){
    if (ifhasnailsalonstatement) {
        if (options[1].innerText.toUpperCase() === 'YES') {
            localStorage.setItem('money', money - 250000);
            if (localStorage.getItem('assets') != null) {
                let assets;
                assets = localStorage.getItem('assets').toLowerCase();
                localStorage.setItem('assets', `${assets}laser tag,`);
            } else {
                localStorage.setItem('assets', 'laser tag,');
            }
            typeSentence("Saul Goodman: Done! Remember, don't drink and drive, but if you do, call me.")
            options[1].innerText = 'Say hi'
        } else {
            if (money < 250000) {
                if (subtitle.innerText.toUpperCase() === `Saul Goodman: Sorry, but you only have ${money}. You need at least 250,000 to buy this fine establishment.`.toUpperCase()) {
                    typeSentence('Saul Goodman: Sorry, but I already told you. You need at least 250,000.')
                } else {
                    typeSentence(`Saul Goodman: Sorry, but you only have ${money}. You need at least 250,000 to buy this fine establishment.`)
                }
            } else {
                typeSentence("Saul Goodman: Are you sure? Once you buy this, you can't go back.")
                options[1].innerText = 'yes';
            }
        }
    } else {
        if (subtitle.innerText.toUpperCase() === "Saul Goodman: Buisness here has really picked up! You will be turning a profit in no time.".toUpperCase()) {

        } else {
            typeSentence("Saul Goodman: Buisness here has really picked up! You will be turning a profit in no time.")
        }
    }
};

options[0].onclick = function(){
    window.location.href = "./map.html";
};