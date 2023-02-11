// step-1: add event listener t the post button

document.getElementById('btn-post').addEventListener('click', function(){
    // step-2: get the commetn inside the text area
    const commentBox = document.getElementById('new-comment');
    const NewCommet = commentBox.value;

    // step-3: set the comment inside the comment container
    // 1. Get the comment container
    // 2. Create a new element
    // 3. set the text of the comment as innerText of the p tag
    // 4. add the p tag using appentChild
    const commentCountainer = document.getElementById('comment-container');
    const p = document.createElement('p');
    p.innerText = NewCommet;
    commentCountainer.appendChild(p)

    // step-4: clear the text area
    commentBox.value = '';
    
})