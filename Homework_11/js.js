// 1 zadanie 


function filterNumbersArr(numbers) {
    return numbers.filter(num => num > 0);
    }
filterNumbersArr([-1, 0, 2, 34, -2]);

// 2 zadanie


function filterNumbersArr(numbers) {
    return numbers.find(function(e) {
        return e > 0;
    });
}
filterNumbersArr([6, -5, -4, -2, 1]);

//  3 zadanie 

function isPalindrome(e) {
    var spaceWord = e.join().toLowerCase();
    var space = e.reverse().join().toLowerCase();

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

function divideArr(e, b) {
        var arrays = [];
        for(i = 0; e.length > 0; i++) {
            arrays.push(e.splice(0, b));
        }
        console.log(arrays);
}
divideArr([1, 2, 3, 4, 7], 2);

