if (parseInt(localStorage.getItem('stars')) > 9) {
    window.location.href = './gameover.html';
}

const timePlace = document.getElementById('time');
const modal = document.querySelector('.modal-content');
const modalHeaders = document.getElementsByClassName('.modal-header');
let isGameOn = false;
let score = 0;
let timeNum;

if (localStorage.getItem('role').toLowerCase() != 'cook') {
    window.location.replace('./map.html')
}

function createElement() {
    if (timeNum > 1) {
        let element = document.createElement('img');
        element.src = `assets/elements/${Math.floor(Math.random() * 18)}.jpg`
        element.classList.add('element')
        element.style.marginTop = `${Math.floor(Math.random() * 20) + 1}%`
        element.style.marginLeft = `${Math.floor(Math.random() * 90) + 1}%`
        document.body.appendChild(element)
        element.onclick = function(){
            element.remove()
            score++
        }
        setTimeout(() => {element.remove()}, 999);
    }
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
        timePlace.innerText = timeNum
    } else if (isGameOn && timeNum > -1 && timeNum != 3) {
        createElement()
        timePlace.innerText = timeNum;
        timeNum--;
    } else if (isGameOn && timeNum === 3) {
        createElement()
        timePlace.classList.remove('light-green-text')
        timePlace.classList.add('red-text')
        timePlace.innerText = timeNum;
        timeNum--;
    } else if (isGameOn && timeNum === 0) {        
        isGameOn = false;
        timeNum--;
    } else if (timeNum === -1) {
        console.log('if statement being called');
        let money = score * 60;
        localStorage.setItem('money', parseInt(localStorage.getItem('money')) + money);
        document.querySelectorAll('p.modal-header')[0].innerText = `Amount: ${score}`;
        document.querySelectorAll('p.modal-header')[1].innerText = `Profit: ${money}`;
        document.querySelectorAll('p.modal-header')[2].innerText = 'click to go back to map';
        modal.onclick = function(){
            window.location.href = './map.html';
        }
        showModal()
    }
}

setInterval(changeText, 1000);

function hideModal() {
    modal.style.opacity = 0;
}

function showModal() {
    modal.style.opacity = '100%';
}

hideModal()