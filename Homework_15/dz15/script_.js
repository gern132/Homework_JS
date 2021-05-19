var button = document.getElementById('button'),
    main = document.getElementById('main'),
    mainBlock = document.querySelector('.chess'),
    middle = document.querySelector('.middle__block');

    main.addEventListener('keyup', function (e) {
        var x = document.querySelector('.x'),
            y = document.querySelector('.y');
            var i = [];
        i.push(x.value,y.value);

        i.forEach(function (e) {
            if(e == '') {
                button.setAttribute("disabled", "disabled");
            } else if (e <= 10 || e == /[a-z]/) {
                button.removeAttribute("disabled");
            } else {
                alert('Неверное значение, введите число в диапазоне от 1-10');
                x.value = '';
                y.value = '';
                button.setAttribute("disabled", "disabled");
            }
        });
    });

    button.addEventListener('click', function res1() {
        var x = document.querySelector('.x').value,
                    y = document.querySelector('.y').value;
                    mainBlock.innerHTML = '';
                function chess(x,y) {
                    for(var i = 0; i < y; i++) {
                        for(var j = 0; j < x; j++) {
                            if(i % 2 !== 0) {
                                (j % 2 === 0) ? white() : black()
                            } else {
                                (j % 2 === 0) ? black() : white()
                            }
                        }
                    }
                    var width = x * 72;
                    mainBlock.style.width = width + 'px';
                }
                chess(+x, +y)
    });
            function white() {
                a = document.createElement('div');
                a.className = 'black';
                mainBlock.append(a);
            }
            function black() {
                b = document.createElement('div');
                b.className = 'white';
                mainBlock.append(b);
            }
        
    middle.addEventListener('click', function() {
        var x = document.querySelector('.x').value,
            y = document.querySelector('.y').value;
            mainBlock.innerHTML = '';
            function chess1(x,y) {
                for(var i = 0; i < y; i++) {
                    for(var j = 0; j < x; j++) {
                        if(i % 2 !== 0) {
                            (j % 2 === 0) ? black() : white()
                        } else {
                            (j % 2 === 0) ? white() : black()
                        }
                    }
                }
                var width = x * 72;
                mainBlock.style.width = width + 'px';
            }
            chess1(+x, +y)
    });