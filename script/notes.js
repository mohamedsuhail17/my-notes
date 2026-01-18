const notesContainer = document.querySelector(".notes-container");
const createButton = document.querySelector(".btn");
let notes=document.querySelectorAll(".input-box");

//FUNCTIONS
function showNotes(){
    notesContainer.innerHTML=localStorage.getItem("notes");
}

//SHOWING EXISTING NOTES AFTER PAGE IS LOADED SUCCESSFULLY
showNotes();


function updateStorage(){
    localStorage.setItem("notes",notesContainer.innerHTML);
}



//EVENTS
createButton.addEventListener("click",() => {
    let inputBox = document.createElement("p");     //<p></p> tag is created and stored in variable named inputBox
    let img = document.createElement("img");        //<img> tag  is created and stored in variable named inputBox

    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable","true");
    img.src="/app-icons/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
});

notesContainer.addEventListener("click",function(e){
    if (e.target.tagName == "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName == "p"){
        notes=document.querySelectorAll(".input-box");
        notes.forEach(note => {
            note.onKeyUp = function(){
                updateStorage();
            }
        });
    }
});

document.addEventListener("keydown", event =>{
    if (event.key == "Enter"){
        document.execCommand("insertLineBreak");
        // event.preventDefault();
    }
});