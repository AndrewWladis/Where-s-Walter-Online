let choosenCharacter = 3;

function numToWord(num) {
    if (num === 1) {
        return 'one';
    } else if (num === 2) {
        return 'two';
    } else if (num === 3) {
        return 'three';
    } else if (num === 4) {
        return 'four';
    }
}

function setOpacity(num) {
    document.getElementById(numToWord(choosenCharacter)).style.opacity = '15%';
    choosenCharacter = num;
    console.log(num)
    document.getElementById(numToWord(num)).style.opacity = '100%'
}

function setRole(role) {
    localStorage.setItem('role', role);
    if (role === 'DEA') {
        localStorage.setItem('money', 1000); 
        if (localStorage.getItem('stars') != undefined) {
            localStorage.removeItem('stars')
        }
    } else {
        localStorage.setItem('money', 0);
        localStorage.setItem('stars', 1);
    }
    localStorage.setItem('character', 3);
    window.location.href = "./map.html";
}

document.addEventListener('keyup', e => {
    if (e.key === "ArrowLeft") {
        if (choosenCharacter === 3) {
            setOpacity(2)
        } else if (choosenCharacter === 4) {
            setOpacity(3)
        } else if (choosenCharacter === 1) {
            setOpacity(4)
        } else if (choosenCharacter === 2) {
            setOpacity(1)
        }
    } else if (e.key === "ArrowRight") {
        if (choosenCharacter === 3) {
            setOpacity(4)
        } else if (choosenCharacter === 4) {
            setOpacity(1)
        } else if (choosenCharacter === 1) {
            setOpacity(2)
        } else if (choosenCharacter === 2) {
            setOpacity(3)
        }
    }
})