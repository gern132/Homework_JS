// 1 zadanie 

var el;
function filterNumbersArr(numbers) {
    el = numbers.filter(num => num > 0)
    .sort((a, b) => a - b);
    }
    console.log(el);
filterNumbersArr([-1, 0, 2, 34, -2]);

// 2 zadanie

var result;
function filterNumbersArr(numbers) {
    result = numbers.find(e => e > 0);
}
console.log(result);

filterNumbersArr([6, -5, -4, -2, 1]);

//  3 zadanie 

function isPalindrome(e) {
    var spaceWord = e.split('').join().toLowerCase();
    var space = e.split('').reverse().join().toLowerCase();

    (spaceWord == space) ? console.log('true') :  console.log('false');
}
isPalindrome('шалаШ'); 

// 4 zadanie
function areAnagrams(a, b) {
    var e = a.split('').sort().join().toLowerCase();
    var j = b.split('').sort().join().toLowerCase();

    (e == j) ? console.log('true') : console.log('false');
}

areAnagrams('кот', 'отК');

//  5 zadanie

function divideArr(e) {
    var size;
    function sNum() {
        size = e.length/4 + 1;
        }
        sNum();
        var arrays = [];
        for(i = 0; e.length > 0; i++) {
            arrays.push(e.splice(0, size));
        }
        console.log(arrays);
}
divideArr([1, 2, 3, 4, 7]);

