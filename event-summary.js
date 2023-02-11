// event-summery 
function handleOnClick (){
    const handlerStatus = document.getElementById('handler-status');
    handlerStatus.innerText = 'Handled by function attached on onclick attribute';
}

// option-2
document.getElementById('event-lesenter').addEventListener('click', function(){
    const handlerStatus = document.getElementById('handler-status');
    handlerStatus.innerText = 'Text Update by add Event listener';
})

// option-2 recape
document.getElementById('btn-update').addEventListener('click', function(){
    const inputField = document.getElementById('input-field');
    const inputText = inputField.value;

    const p = document.getElementById('input-text-display');
    p.innerText = inputText;
    inputField.value = '';  

})