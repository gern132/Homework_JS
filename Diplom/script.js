let button = document.getElementsByTagName('button'),
    canvas = document.getElementById('main');
let alfa = 'abcdefghijklmnopqrstuvwxyz';   //abcdefghijklmnopqrstuvwxyz
let arr = [],
    allLetters = document.getElementsByClassName('text'),
    block,
    b,
    p = document.getElementsByTagName('p'),
    letters = document.getElementsByTagName('p'),
    pos,
    n;
let counter = 0;

button[0].addEventListener('click', () => {
    let mechanic = setInterval(function res() {
        arr.push(alfa.charAt(Math.floor(Math.random() * alfa.length)));

        b = document.createElement('p');
        b.className = 'text main__text';
        b.innerHTML = arr[arr.length - 1];
        main.append(b);

        if(letters.length >= 100) clearInterval(mechanic);

    let animation = anime({
        targets: letters[counter++],
        translateX: -2000,
        duration: 5000,
        easing: 'linear'
      });

    //   counter++
        }, 1000);

        let i = 0; //счёткич до lose
        let removeInterval = setInterval(() => {  //подсчёт конечных координат
            Array.from(allLetters).forEach(function(e) {
                let position = e.getBoundingClientRect();
                if(position.left < 30) {
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
            for(let i = 0; i < p.length; i++) {
                if(p[i].textContent == e.key) p[i].classList.remove('text');
            }
        });