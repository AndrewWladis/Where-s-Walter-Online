if (parseInt(localStorage.getItem('stars')) > 4) {
    window.location.href = './gameover.html';
}

function navigateTo(place) {
    window.location.href = `./${place}.html`;
}