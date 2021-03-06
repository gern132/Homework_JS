var array = JSON.parse(sessionStorage.getItem('timer')),
    array1 = JSON.parse(sessionStorage.getItem('preload')),
    array2 = JSON.parse(sessionStorage.getItem('block')),
    checkPole = document.querySelector('.game__time'),
    button = document.getElementsByClassName('button'),
    gTime = document.getElementsByClassName('game__time'),
    showBlock = document.querySelector('.main__sec'),
    save = document.querySelector('.save'),
    ms,
    sec,
    min,
    timer;

button[0].addEventListener('click', function() { //секундомер
    if(button[0].getAttribute('data-beggin') == 'Start' || button[0].getAttribute('data-beggin') == 'Run') {
        timer = setInterval(function() {
            ms += 1
            gTime[2].textContent = ms > 9 ? ms : '0' + ms;
            if(ms == 99) {
                sec += 1;
                ms = 0;
                gTime[1].textContent = sec > 9 ? sec : '0' + sec;
            }
            else if (sec == 60) {
                min += 1;
                sec = 0;
                gTime[0].textContent = min > 9 ? min : '0' + min;
            } else if (min == 59) {
                clearInterval(timer);
                button[0].classList.add('hide');
                button[2].classList.add('hide');
            };
            saveInfo();
            sessionStorage.setItem('preload', JSON.stringify(button[0].dataset.beggin));
        }, 10);

        button[0].dataset.beggin = 'Stop';
        button[0].innerHTML = button[0].dataset.beggin;
    } else {
        button[0].dataset.beggin = 'Run';
        button[0].innerHTML = button[0].dataset.beggin;
        clearInterval(timer);
    }
    
    showBlock.classList.remove('hide');
});

if(array == undefined) { // проверка LS
    console.log('true')
    ms = 0;
    sec = 0;
    min = 0;
} else {
    ms = array[0];
    sec = array[1];
    min = array[2];
}

window.onload = function() {            //обновление страницы
    gTime[2].textContent = ms > 9 ? ms : '0' + ms;  
    gTime[1].textContent = sec > 9 ? sec : '0' + sec;
    gTime[0].textContent = min > 9 ? min : '0' + min; 

    if(array1 != undefined) {
        showBlock.classList.remove('hide'); 
    }

    if(array1 != undefined) {
        save.innerHTML = array2; 
    }
}

function saveInfo() { //сохраняем в storage
    var arr = [];
    arr.push(ms,sec,min);
    sessionStorage.setItem('timer', JSON.stringify(arr));
}
button[1].addEventListener('click', function() { //reset
    clearInterval(timer);
    sessionStorage.clear();
    save.textContent = '';
    n = 0;
    button[0].dataset.beggin = 'Start';
    button[0].innerHTML = button[0].dataset.beggin;
    showBlock.classList.add('hide');
    button[0].classList.remove('hide');
    button[2].classList.remove('hide');
    ms = sec = min = 0;
    Array.from(gTime).forEach(function(e) {
        e.innerHTML = '00';
    });
});

var n = 0;
var k = [];
button[2].addEventListener('click', function() { //save
    var newElement = document.createElement('p');
    newElement.className = 'number';
    newElement.innerHTML = ((n += 1) + ') '  + (gTime[0].textContent = min > 9 ? min : '0' + min) + ' : ' + (gTime[1].textContent = sec > 9 ? sec : '0' + sec) + ' : ' + (gTime[2].textContent = ms > 9 ? ms : '0' + ms));
    save.append(newElement);
    k.push(newElement);
    var parsed = save.innerHTML;
    sessionStorage.setItem('block', JSON.stringify(parsed));
});