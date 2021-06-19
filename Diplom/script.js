let button = document.getElementsByTagName('button'),
    canvas = document.getElementById('main');
let alfa = 'abcdefghijklmnopqrstuvwxyz';   //abcdefghijklmnopqrstuvwxyz
let arrRandom = [],
    allLetters = document.getElementsByClassName('text'),
    textCanvas = document.querySelector('.text__block'),
    bgPuzzle = document.getElementsByClassName('mini__anime'),
    block,
    b,
    p = document.getElementsByTagName('p'),
    letters = document.getElementsByTagName('p'),
    pos,
    n;
let counter = 0;

button[0].addEventListener('click', () => {
    let mechanic = setInterval(function res() {
        arrRandom.push(alfa.charAt(Math.floor(Math.random() * alfa.length)));

        b = document.createElement('p');
        b.className = 'text main__text';
        b.innerHTML = arrRandom[arrRandom.length - 1];
        textCanvas.append(b);

        if(letters.length >= 100) clearInterval(mechanic);

    let animation = anime({
        targets: letters[counter++],
        translateX: -2000,
        duration: 5000,
        easing: 'linear'
      });

    //   counter++
        }, 800);

        let i = 0; //счёткич до lose
        let removeInterval = setInterval(() => {  //подсчёт конечных координат
            Array.from(allLetters).forEach(function(e) {
                let position = e.getBoundingClientRect();
                if(position.left < 30) {
                    i++;
                    if(i >= 2) {
                        clearInterval(mechanic);
                        textCanvas.innerHTML = '';

                        anime({
                            targets: '.mini__anime',
                            scale: [
                                {value: .1, easing: 'easeOutSine', duration: 500},
                                {value: 1, easing: 'easeInOutQuad', duration: 1200}
                              ],
                              delay: anime.stagger(200, {grid: [21, 26], from: 'center'}) //[15, 9]
                          });
                    }
                    console.log(i);
                    e.remove();
                }
            });
        }, 10);
});

let counterRemove = 0;
    document.addEventListener('keypress' , function del(e) {

                if(p[counterRemove].textContent == e.key) {
                    p[counterRemove].classList.remove('text');
                    counterRemove++
                }
        });

       