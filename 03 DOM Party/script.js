const boton = document.getElementById('partyButton');

boton.addEventListener('click', letsParty);

function letsParty() {
    console.log('Party clicked');
    document.body.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.getElementById('Title').style.color = '#' + Math.floor(Math.random()*16777215).toString(16);
}