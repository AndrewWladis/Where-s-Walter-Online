let role = localStorage.getItem('role')
let assets = localStorage.getItem('assets')
document.getElementById('role').innerText += ` ${role}`;
document.getElementById('money').innerText += ` ${localStorage.getItem('money')}`

if (assets != null) {
    let header = document.createElement('h1');
    header.innerText = 'assets: ' + localStorage.getItem('assets').split(',').join(', ');
    document.querySelector('.row').appendChild(header)
}

if (role === 'DEA') {
     
} else {
    let header = document.createElement('h1');
    header.innerText = 'stars: ' + localStorage.getItem('stars');
    document.querySelector('.row').appendChild(header);

    let cookbutton = document.createElement('button');
    cookbutton.classList.add('cookbutton');
    cookbutton.innerText = 'Cook'
    document.querySelector('.row').appendChild(cookbutton);
    cookbutton.onclick = function(){
        window.location.href = './cook.html';
    }
}