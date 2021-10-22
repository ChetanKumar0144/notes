console.log('Working Well');
showNotes();
// if user adds a note ,add it to localStorage.
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener("click", function(e){
    let addTxt= document.getElementById('addTxt');
    let notes = localStorage.getItem("notes");
    if(notes == null){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value ="";
    console.log(notesObj);
    showNotes(); 
})

//function to show elements in localStorage
function showNotes(){
    let notes = localStorage.getItem("notes");
    if(notes == null){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function(element, index){
        html += `
            <div class="notesCard card my-2 mx-2" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">Note ${index + 1}</h5>
                    <p class="card-text">${element}</p>
                <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-danger"> Delete</button>
                </div>
            </div>`;
    });
    let notesElem = document.getElementById('notes');
    if(notesObj.length != 0){
        notesElem.innerHTML = html;
    }
    else{
        notesElem.innerHTML =  `Nothing to show! Use "Add a Note" section above to add notes. `;
    }
}

// function to delete a note
function deleteNote(index){
    // console.log('I am deleting.', index);

    let notes = localStorage.getItem("notes");
    if(notes == null){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}

let search = document.getElementById('searchTxt');
search.addEventListener("input", function(){
    let inputVal = search.value.toLowerCase();
    // console.log('Input event fired.', inputVal);

    let notesCards = document.getElementsByClassName('notesCard');
    Array.from(notesCards).forEach(function(element){
        let cardTxt= element.getElementsByTagName("p")[0].innerText;
        
        if(cardTxt.includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
        // console.log(cardTxt);
    });
})

/*
1. add title
2. mark imp
3. saperate notes by users.
4. sync and host on 
*/