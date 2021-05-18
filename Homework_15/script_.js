var button = document.getElementById('button'),
    main = document.getElementById('main'),
    mainBlock = document.querySelector('.chess');

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

    button.addEventListener('click', function (e) {
        var x = document.querySelector('.x').value,
            y = document.querySelector('.y').value;
            mainBlock.innerHTML = '';
        function rrr(x,y) {
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
        rrr(+x, +y)
            });

            function white() {
                var a = document.createElement('div');
                a.className = 'black';
                mainBlock.append(a);
            }
            function black() {
                var b = document.createElement('div');
                b.className = 'white';
                mainBlock.append(b);
            }
    

    

