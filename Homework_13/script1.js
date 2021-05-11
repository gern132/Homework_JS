var input = document.querySelector('.hidden'),
    block = document.querySelector('.item'),
    newRow = document.querySelector('.item2');

function newInput(e, item, active){
    if(e.addEventListener)
        e.addEventListener(item, active);
    else
        e.attachEvent(item, active);
}

var c = document.getElementById('center');

newInput(c, 'mouseup', function(e) {
    if(e.target.tagName.toLowerCase() == 'div')
    {   
        input.value = block.textContent;
        e.target.appendChild(input);
        input.classList.remove('hidden');
        input.focus();
        
    }
});

input.addEventListener('blur', function () {
     this.parentElement.textContent = this.value;
     this.classList.add('hidden');
     document.body.appendChild(this);
    });

    // newRow

    newRow.addEventListener('click', function(e) {
        var newLine = document.createElement('div');
            newLine.innerHTML = '<div class="center__item item">';
            c.prepend(newLine);
    });
