// Option-1: . 
// <button onclick="document.body.style.backgroundColor='yellow'">make yellow</button>



// Option-2 add onclick function on the html element
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

// Option-4
const pinkBtn = document.getElementById('pink');
pinkBtn.addEventListener('click', makePink);

function makePink(){
    document.body.style.backgroundColor = 'pink';
}

// Option-4 another

const redBtn = document.getElementById('red');
redBtn.addEventListener('click', function makeRed(){
    document.body.style.backgroundColor = 'red';
});

// Importent we will use this sometime
document.getElementById('goldenRod',).addEventListener('click', function(){
    document.body.style.backgroundColor = 'goldenRod';
})
