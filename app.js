const task=document.getElementById("task");
const listContainer=document.getElementById("list-container");

function savedata(){

    localStorage.setItem('data',listContainer.innerHTML);

}
function addtodo(){
    if(task.value==''){
        alert('Plzz enter task...');
    }else{
        let li=document.createElement('li');
        li.innerHTML=task.value;
        listContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML='samee';
        li.appendChild(span);

    }
    task.value='';
    savedata();
}
listContainer.addEventListener("click",function(e){
    if(e.target.tagname=='li'){
        e.target.classList.toggle('checked');
        savedata();
    }
    else if(e.target.tagname=="span"){
        e.target.parentElament.remove();
        savedata();
    }
},false);

function showtask(){
    listContainer.innerHTML=localStorage.getItem('data');
}
showtask();