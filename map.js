if (parseInt(localStorage.getItem('stars')) > 9) {
    window.location.href = './gameover.html';
}

function navigateTo(place) {
    window.location.href = `./${place}.html`;
}