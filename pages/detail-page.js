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

    //Display elements on the page
    const commentSection = document.getElementById("comments");
    commentSection.appendChild(comment);

    //reset form values
    inputField.value = null;
    textArea.value = null;

    
  }

