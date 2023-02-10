function makeGreen(){
    document.body.style.backgroundColor = 'green';
} 

// Option-3
const makeBlueBtn = document.getElementById('make-blue');
        makeBlueBtn.onclick = makeBlue;
function makeBlue(){
       document.body.style.backgroundColor = 'blue';
}


// Option-3 anther
const purpleBtn = document.getElementById('purple');
purpleBtn.onclick = function makePurple(){
    document.body.style.backgroundColor = 'purple';
}