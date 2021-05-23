var mainUsers = document.querySelector('.main__users'),
    mainText = document.querySelector('.main__block-text'),
    mainImg = document.querySelector('.main__mini-block');

document.getElementById('button').addEventListener('click', function() {
    var request = new XMLHttpRequest();
    request.open('GET', 'https://reqres.in/api/users?page=2');

    request.send();
    
    request.onload = function() {
        var status = +String(this.status)[0];
        
        if(status ===  2) {
            document.querySelector('.main').classList.remove('hidden');
            document.getElementById('button').setAttribute("disabled", "disabled"); 
        } else {
            document.body.innerHTML = 'FAILD: ' + this.status;
        }
        console.log(JSON.parse(this.response).data);
        var arr = JSON.parse(this.response).data;
        var leng = JSON.parse(this.response).data.length;

        function show(e) {
            for(var i = 0; i < e; i++) {
                var a = document.createElement('div');
                a.className = 'user';
                a.innerHTML = '<p>User_' + (1 + i) + '</p>';
                mainUsers.append(a);
            }
        }
        show(leng);
        var block = document.querySelectorAll('.user');

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
        avat(); 

        Array.from(block).forEach(function(i) {
            i.addEventListener('click', function() {
                mainText.innerHTML = '';
    
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