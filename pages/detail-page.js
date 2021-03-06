function submitComment() {
    //Gather data 
    const inputField = document.getElementById('name');
    const name = inputField.value;
    const textArea = document.getElementById('msg');  
    const msg = textArea.value;

    //Create elements
    const comment = document.createElement('section');
    const h3 = document.createElement('h3');
    const p = document.createElement('p');

    //Adjust elements
    h3.innerHTML = `${name} said:`;
    p.innerHTML = msg;
    comment.classList.add('comment');
    comment.appendChild(h3);
    comment.appendChild(p);

    //Reset form values
    function reset () {
        inputField.value = null;
        textArea.value = null;        
    }

    //Display elements on the page
    function displayOnPage () {
        const commentSection = document.getElementById("comments");
        commentSection.appendChild(comment);
    }
    
    function doesNotPassAllValidations (name, msg) {
        // Check empty inputs
        if (!name || !msg) {
            alert('You forgot to fill in your name or message!');
            return true;  
        } else if (msg.length > 280) {
            alert('Your comment is too long!');
            return true;
        }
        return false;
    }

    if(doesNotPassAllValidations(name, msg)){
        return null
    } else {
        reset();
        displayOnPage();
    }
}
