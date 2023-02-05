if (localStorage.getItem('role') != 'DEA') {
    window.location.replace('./map.html')
}

const people = ['Nacho Varga', 'Lalo Salamanca', 'Hector Salamanca', 'Tyrus Kitt', 'Marco Salamanca', 'Leonel Salamanca', 'Jack Welker', 'Werner Ziegler', 'Robert Daly', 'Adrian Chase', 'Stan Marsh', 'Marco Salamanca', 'Juan Bolsa', 'Mike Ehrmantraut', 'Hugo Archilleya', 'Max Arciniega', 'Tomas Cantillo', 'Duane Chow', 'Benicio Fuentes', 'James Kilkelly']
const timePlace = document.getElementById('time');
const labelText = document.getElementsByTagName('label')[0];
const input = document.getElementsByTagName('input')[0];
let person;
let isGameOn = false;
let score = 0;
let timeNum;

function createModal() {
    let money = score * 10;
    localStorage.setItem('money', parseInt(localStorage.getItem('money')) + money);
    document.body.innerHTML += '<div class="modal-content"><p class="modal-header"> </p><p class="modal-header"> </p><p class="modal-header"> </p></div>'
    const modal = document.querySelector('.modal-content');
    document.querySelectorAll('p.modal-header')[0].innerText = `Pay: ${money + 200}`;
    document.querySelectorAll('p.modal-header')[1].innerText = 'click to go back to map';
    labelText.innerText = ' '
    modal.onclick = function(){
        window.location.href = './map.html';
    }
}

function changeName() {
    person = people[Math.floor(Math.random() * people.length)]
    while (person === labelText.innerText) {
        person = people[Math.floor(Math.random() * people.length)]
    }
    labelText.innerText = `Search: ${person}`;
}

function changeText() {
    if (!isGameOn && timePlace.innerText === '3') {
        timePlace.innerText = '2';
    } else if (!isGameOn && timePlace.innerText === '2') {
        timePlace.innerText = '1';
    } else if (!isGameOn && timePlace.innerText === '1') {
        timePlace.classList.remove('red-text')
        timePlace.classList.add('light-green-text')
        isGameOn = true;
        timeNum = 30;
        changeName()
        timePlace.innerText = timeNum
    } else if (isGameOn && timeNum > -1 && timeNum != 3) {
        timePlace.innerText = timeNum;
        timeNum--;
    } else if (isGameOn && timeNum === 3) {
        timePlace.classList.remove('light-green-text')
        timePlace.classList.add('red-text')
        timePlace.innerText = timeNum;
        timeNum--;
    } else if (isGameOn && timeNum === 0) {        
        isGameOn = false;
        timeNum--;
    } else if (timeNum === -1) {
        createModal()
        timeNum--;
    }
}

setInterval(changeText, 1000);

document.addEventListener("keydown", function (e) {
    console.log('event listener being called')
    if (e.key === "Enter" && isGameOn) {
      e.preventDefault();
      if (input.value.toLowerCase() === person.toLowerCase()) {
        console.log('second if being called')
        changeName()
        score++
      }
      input.value = '';
      changeName()
    }
});