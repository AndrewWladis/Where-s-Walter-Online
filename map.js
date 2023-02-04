const modal = document.querySelector('.modal-content')
modal.style.opacity = 0;

function navigateTo(place) {
    window.location.href = `./${place}.html`;
}

function hideModal() {
    document.body.style.opacity = '100%';
    modal.style.opacity = 0;
}

function showModal() {
    modal.style.opacity = '100%';
}

/*function buyPlace(place) {
    let money = localStorage.getItem('money');

    if (parseInt(money) > 250000) {
        document.getElementsByClassName('modal-header')[0].innerText = `Would you like to buy ${place} for $250,000`;
    } else {
        document.getElementsByClassName('modal-header')[0].innerText = 'You need at least 250gs to get this.'
    }
    document.getElementsByClassName('modal-header')[1].innerText = `Current Balance: ${money}`

    showModal()
    modal.addEventListener('click', hideModal)
}*/