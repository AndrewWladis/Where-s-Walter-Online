if (parseInt(localStorage.getItem('stars')) > 4) {
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
    // Have a random chance of you being caught and you have to go through a wheres walter og style level and you make more money
}

addButton('BACK TO MAP', 'map')