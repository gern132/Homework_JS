var input = document.querySelector('.hidden'),
    block = document.querySelector('.item'),
    newRow = document.querySelector('.item2');

function newInput(e, item, active){
    if(e.addEventListener)
        e.addEventListener(item, active);
    else
        e.attachEvent(item, active);
}

var mainBlock = document.getElementById('center');

newInput(mainBlock, 'mouseup', function(e) {
    if(e.target.tagName.toLowerCase() == 'div')
    {   
        input.value = block.textContent;
        e.target.appendChild(input);
        input.classList.remove('hidden');
        input.focus();
    }
});

input.addEventListener('blur', function (e) {
    // this.parentElement.textContent = this.value;
    // this.classList.add('hidden');
    // document.body.appendChild(this);

    e.target.parentElement.textContent = input.value;
    input.classList.add('hidden');
    document.body.appendChild(input);
    console.log(e.target);
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



