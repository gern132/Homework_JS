let button = document.getElementsByTagName('button'),
    canvas = document.getElementById('main');
let alfa = 'abcdefghijklmnopqrstuvwxyz';   //abcdefghijklmnopqrstuvwxyz
let arr = [],
    allLetters = document.getElementsByClassName('text'),
    block,
    b,
    p = document.getElementsByTagName('p'),
    pos,
    n;

button[0].addEventListener('click', () => {
    let mechanic = setInterval(function res() {
        arr.push(alfa.charAt(Math.floor(Math.random() * alfa.length)));

        b = document.createElement('p');
        b.className = 'text';
        b.innerHTML = arr[arr.length - 1];
        main.append(b);

        if(document.getElementsByTagName('p').length >= 100) clearInterval(mechanic);
        // p = document.getElementsByTagName('p');

    let animation = anime({
        targets: '.text',
        translateX: -1000,
        duration: 5000,
        easing: 'linear'
      });
        }, 500);

        let i = 0; //счёткич не нажатых клавиш
        let removeInterval = setInterval(() => {  //подсчёт конечных координат
            Array.from(p).forEach(function(e) {
                let position = e.getBoundingClientRect();
                if(position.left < 130) {
                    i++;
                    if(i >= 2) {
                        clearInterval(mechanic);
                        canvas.innerHTML = '';
                    }
                    console.log(i);
                    e.remove();
                }
            });
        }, 10);
});

    document.addEventListener('keypress' , function del(e) {
            for(let i = 0; i < allLetters.length; i++) {
                if(allLetters[i].textContent == e.key) allLetters[i].remove();
            }
        });