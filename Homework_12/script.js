// 1 zadanie
function newName(e) {
    
    return e.map(function(j) {
        return {name: j};
        });
}
newName(['das', 'kkk', 'lll']);

// 2 zadanie
// 1)
function time(e) {

    var el = e.reduce(function(i, a) {
        return (i + ' : ' + a );
    });
    return 'Текущее время:' + el;
}
time([' 00', '13', '24']);

// 2)
function time(e) {

    return 'Текущее время:' + e.join(' : ');
}
time([' 00', '13', '24']);

// 3 zadanie

function text(e) {
    var arr = e.split('');
    var letters ="аеёиоуыэюя";
    var arrL = arr.reduce(function(j, i) {
        if(letters.indexOf(i) !== -1) {
            j++;
        }
        return j;
    }, 0);
    return arrL;
}
text('прИвет'); 

// zadanie 4

function text(e) {
    var a = /[!.?:;0]/gi;
    var b = e.split(a);
    for(value of b) {
        console.log(value.trim() + ':' + value.split(' ').join('').replace(/[^a-zа-яё]/gi, '').length);
    }
}
text('Привет, студент! Студент... Как дела, студент?');
