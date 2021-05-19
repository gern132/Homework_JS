var container = document.getElementById('container'),
    button = document.getElementsByTagName('button')[0];

var firstPar = document.createElement('p'),
    secondPar = document.createElement('p');

firstPar.innerHTML = 'Hello, here are <a href="https://www.facebook.com">Link 1</a> and <a href="https://twitter.com">Link 2</a>';
secondPar.innerHTML = 'Hello, here are <a href="#" onclick = "first()">Link 3</a> and <a href="#" onclick = "sec()">Link 4</a>';
localStorage.clear();
function first() {
    if(localStorage.getItem('Link3')) {
        alert(JSON.parse(localStorage.getItem('Link3')).path)
    } else {

        localStorage.setItem('Link3', JSON.stringify({path:'http://google.by'}));
        alert('сохранено!');
    };
    
}

function sec() {
    if(localStorage.getItem('Link4')) {
        alert(JSON.parse(localStorage.getItem('Link4')).path)
    } else {

        localStorage.setItem('Link4', JSON.stringify({path:'https://vk.com/'}));
        alert('сохранено!');
    };
}

container.appendChild(firstPar)
container.appendChild(secondPar);

console.log(firstPar.previousSibling)