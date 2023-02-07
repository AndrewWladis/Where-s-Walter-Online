if (parseInt(localStorage.getItem('stars')) > 4) {
    window.location.href = './gameover.html';
}

class shopItem {
    constructor(name, price, fullname) {
      this.name = name;
      this.price = price;
      this.fullname = fullname;
    }
}

const room = document.querySelector('div.room');
const row = document.querySelector('div.row');
const subtitle = document.getElementById('subtitle');
const options = document.getElementsByClassName('option');
let money = parseInt(localStorage.getItem('money'));
let assets = localStorage.getItem('assets').toLowerCase();
const boxcutter = new shopItem('boxcutter', 5, 'Box Cutter');
const gun = new shopItem('gun', 250, 'gun');
const turtlebomb = new shopItem('turtlebomb', 1500, 'Turtle Bomb');
const saulfunkopop = new shopItem('saulfunkopop', 2000, 'Saul Funko Pop');
let selectedItem = gun;

function quickSortAlgo(origArray) {
    if (origArray.length <= 1) {
        return origArray;
    } else {
        var left = [];
        var right = [];
        var newArray = [];
        var pivot = origArray.pop();
        var length = origArray.length;
        for (var i = 0; i < length; i++) {
            if (origArray[i].price <= pivot.price) {
                left.push(origArray[i]);
            } else {
                right.push(origArray[i]);
            }
        }
        return newArray.concat(quickSortAlgo(left), pivot, quickSortAlgo(right));
    }
}

let items = quickSortAlgo([gun, turtlebomb, saulfunkopop, boxcutter])

for (let i = 0; i < items.length; i++) {
    let item = items[i]
    let itemPic = document.createElement('img')

    itemPic.src = `assets/${item.name}.png`
    itemPic.id = item.name;
    document.querySelector('.shop').appendChild(itemPic)
    itemPic.onclick = function(){
        changeSelected(item)
    }
}

changeSelected(boxcutter)

function changeSelected(item) {
    let classItems = document.getElementsByClassName('choosen-item')
    if (classItems.length > 0) {
        classItems[0].classList.remove('choosen-item');
    }
    document.getElementById(item.name).classList.add('choosen-item');
    selectedItem = item;
    if (assets.includes(`${item.name},`)) {
        options[1].innerText = `You already have ${item.fullname}`;
    } else {
        options[1].innerText = `buy ${item.fullname} for ${item.price}`;
    }
}

options[1].onclick = function(){
    let ifhasstatement = localStorage.getItem('assets').toLowerCase.includes(selectedItem.fullname + '+');
    if (parseInt(localStorage.getItem('money')) >= selectedItem.price && !ifhasstatement) {
        localStorage.setItem('assets', assets + selectedItem.fullname + ',');
        localStorage.setItem('money', money - selectedItem.price);
        options[1].innerText = `You purchased ${selectedItem.name}`;
    } else if (ifhasstatement) {
        options[1].innerText = `You already have ${selectedItem.name}`;
    } else {
        options[1].innerText = `You need ${selectedItem.price - money} more to get ${selectedItem.name}`;
    }
};

options[0].onclick = function(){
    window.location.href = "./map.html";
};

document.addEventListener('keyup', e => {
    if (e.key === "ArrowLeft") {
        if (selectedItem === boxcutter) {
            changeSelected(saulfunkopop)
        } else {
            changeSelected(items[items.indexOf(selectedItem) - 1])
        }
    } else if (e.key === "ArrowRight") {
        if (selectedItem === saulfunkopop) {
            changeSelected(boxcutter)
        } else {
            changeSelected(items[items.indexOf(selectedItem) + 1])
        }
    }
})