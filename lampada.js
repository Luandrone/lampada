const turnOn = document.getElementById('turnOn');
const tunrOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');

function isLampBroken () {
    return lamp.src.indexOf ('quebrada') > -1
}

function lampOn () {
    if(!isLampBroken ()){
        lamp.src = './img/ligada.jpg';
        lamp.innerHTML = 'Desligar'
    }
}

function lampOff () {
    if(!isLampBroken ()) {
    lamp.src = './img/desligada.jpg';
    }
}

function lampBroken () {
    lamp.src = './img/quebrada.jpg';
}

turnOn.addEventListener('click', lampOn);
tunrOff.addEventListener('click', lampOff);

lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);

lamp.addEventListener('dblclick', lampBroken);

