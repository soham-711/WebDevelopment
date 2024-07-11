let input = document.querySelector("#inpt");
let enter = document.querySelector(".enter");
let vedio = document.querySelector(".vedio");
let note_text = document.querySelector(".note_text");
let submit = document.querySelector(".submit");
let para = document.querySelector(".para");
let remove = document.querySelector(".fa-solid");
let changeMood = document.querySelector(".changeMood");
let body = document.querySelector("body");
let noteInput = document.querySelector(".note-input");
let my_note = document.querySelector(".my_note");
let heading = document.querySelector(".hadding")


enter.disabled = true;
submit.disabled = true;

input.addEventListener("click",()=>{
    enter.disabled = false;
});

enter.addEventListener("click",()=>{
    vedio.innerHTML = input.value;
    input.value = "";
    enter.disabled = true;
});

note_text.addEventListener("click",()=>{
    submit.disabled = false;
});

submit.addEventListener("click",()=>{
   let new_para = document.createElement("p");
   new_para.innerHTML = note_text.value;
   para.appendChild(new_para);
   let time = updateTime();
   new_para.before(time);
   note_text.value = "";
   submit.disabled = true; 
});

note_text.addEventListener("keypress",(event)=>{
    if(event.key === 'Enter'){
        let new_para = document.createElement("p");
        new_para.innerHTML = note_text.value;
        para.append(new_para);
        let time = updateTime();
        new_para.before(time);
        note_text.value = "";  
    }
 });

 let updateTime = ()=>{  
  let now = new Date();
  let time = document.createElement("span");
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    time.innerHTML = `${hours}:${minutes}`;
    return time;
 }

 remove.addEventListener("click",()=>{
    let lastElement = para.lastElementChild;
    para.removeChild(lastElement);    
 });


 let currentMood = "dark";
 changeMood.addEventListener("click",()=>{
    if(currentMood === "light"){
        changeMood.style.backgroundColor = "#102C57";
        body.style.backgroundColor = "#F6E6CB";
        my_note.style.backgroundColor = "#FFF6E9";
        noteInput.style.backgroundColor = "#F8F9D7";
        heading.style.backgroundColor = "#FFB4C2";
        note_text.style.backgroundColor = "#FFFFFF";
        note_text.style.color = "black";
        input.style.backgroundColor = "#FFFFFF";
        input.style.color = "black";
        currentMood = "dark";
    }
    else{
        changeMood.style.backgroundColor = "#ffffff";
        body.style.backgroundColor = "#3D3B40";
        my_note.style.backgroundColor = "#9D9D9D";
        noteInput.style.backgroundColor = "#45474B";
        heading.style.backgroundColor = "#45474B";
        note_text.style.backgroundColor = "#9D9D9D";
        note_text.style.color = "#fff";
        input.style.backgroundColor = "#9D9D9D";
        input.style.color = "#fff";
        currentMood = "light";
    }
 });
