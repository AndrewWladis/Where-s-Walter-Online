if (parseInt(localStorage.getItem('stars')) > 9) {
    window.location.href = './gameover.html';
}

function addButton(text, location) {
    let cookbutton = document.createElement('button');
    cookbutton.classList.add('cookbutton');
    cookbutton.innerText = text
    document.querySelector('.row').appendChild(cookbutton);
    cookbutton.onclick = function(){
        window.location.href = `./${location}.html`;
    }
}

if (localStorage.getItem('role') === 'DEA') {
    addButton('WORK', 'work')
} else {
    localStorage.setItem('stars', parseInt(localStorage.getItem('stars')) + 1)
}

addButton('BACK TO MAP', 'map')