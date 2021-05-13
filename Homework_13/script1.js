var input = document.querySelector('.hidden'),
    block = document.querySelector('.item'),
    newRow = document.querySelector('.item2');



var mainBlock = document.getElementById('center');

document.addEventListener('click', function newInput(e) {
    if(e.target.tagName.toLowerCase() == 'div')
    {   
        input.value = block.textContent;
        e.target.appendChild(input);
        input.classList.remove('hidden');
        input.focus();
    } 
});


input.addEventListener('blur', function (e) {
    e.target.parentElement.textContent = input.value;
    input.classList.add('hidden');
    document.body.appendChild(input);
    });

    // newRow

    newRow.addEventListener('click', function(e) {
        var newLine = document.createElement('div');
            newLine.innerHTML = '<div class="center__block"><div class="center__item item"></div><div class="center__item item"></div><div class="center__item item"></div></div>';
            mainBlock.prepend(newLine);
    });
    
    // keyFocus

    document.addEventListener('keypress', function(e) {
        if(e.key == 'Enter') {
            input.classList.add('hidden');
            }
    });