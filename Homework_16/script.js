var mainUsers = document.querySelector('.main__users'),
    mainText = document.querySelector('.main__block-text'),
    mainImg = document.querySelector('.main__mini-block');
document.getElementById('button').addEventListener('click', function() {

    var arr;
    var leng;

    if(localStorage.getItem('result')) {
        arr = JSON.parse(localStorage.getItem('result'));
        leng = JSON.parse(localStorage.getItem('result')).length;

        document.querySelector('.main').classList.remove('hidden');
        document.getElementById('button').setAttribute("disabled", "disabled"); 
        show(leng);
            avat();
            swit();
    } else {
        var request = new XMLHttpRequest();
        request.open('GET', 'https://reqres.in/api/users?page=2');
    
        request.send();
        request.onload = function() {
            var status = +String(request.status)[0];
            if(status ===  2) {
                document.querySelector('.main').classList.remove('hidden');
                document.getElementById('button').setAttribute("disabled", "disabled"); 
                localStorage.setItem('result', JSON.stringify(JSON.parse(request.response).data));
                arr = JSON.parse(request.response).data;
                leng = JSON.parse(request.response).data.length;

            show(leng);
            avat();
            swit();
            } else {
                document.body.innerHTML = 'FAILD: ' + request.status;
            }
        }   
    };

    function show(e) {
        for(var i = 0; i < e; i++) {
            var a = document.createElement('div');
            a.className = 'user';
            a.innerHTML = 'User_' + (1 + i);
            mainUsers.append(a);
        }
    }

    function avat() {
        var img = document.createElement('img');
        img.src = arr[0].avatar;
        mainImg.appendChild(img);

        var firstName = document.createElement('p');
            firstName.innerHTML = 'First_name: ' + arr[0].first_name;
            mainText.appendChild(firstName);

            var lastName = document.createElement('p');
            lastName.innerHTML = 'Last_name: ' + arr[0].last_name;
            mainText.appendChild(lastName);
    }

function swit() {
    var block = document.querySelectorAll('.user');
    Array.from(block).forEach(function(i) {
        i.addEventListener('click', function(e) {
            mainText.innerHTML = '';

            for (var l = 0; l < block.length; l++) {
                block[l].classList.remove('switch__color');
            }
            e.target.classList.add('switch__color');

            var img = document.createElement('img');
            img.src = arr[Array.from(block).indexOf(i)].avatar;
            mainImg.appendChild(img);
            img.previousSibling.remove(img);

            var firstName = document.createElement('p');
            firstName.innerHTML = 'First_name: ' + arr[Array.from(block).indexOf(i)].first_name;
            mainText.appendChild(firstName);

            var lastName = document.createElement('p');
            lastName.innerHTML = 'Last_name: ' + arr[Array.from(block).indexOf(i)].last_name;
            mainText.appendChild(lastName);
        });
    });
}
});