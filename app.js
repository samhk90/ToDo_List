const task=document.getElementById("task");
const listContainer=document.getElementById("list-container");
const todolist=document.getElementById('todolist');
showtask();
function addtodo(){
    if(task.value==''){
        alert('Plzz enter task...');
    }else{
        let todo=document.createElement('div');
        todo.classList.add('todo');
        const li=document.createElement('li');
        li.innerHTML=task.value;
        li.classList.add('li');
        let cross = document.createElement("button");
        cross.classList.add('delete-button');
        let done=document.createElement('button');
        done.classList.add('complete-button');
        cross.innerHTML = '<i class="fas fa-times"></i>';
        done.innerHTML='<i class="fas fa-check"></i>';
        todo.appendChild(li);
        todo.appendChild(done);
        todo.appendChild(cross);
        todolist.appendChild(todo);
    }
    task.value='';
    savedata();
}
todolist.addEventListener("click", function(e) {
    const item=e.target
    const todo =item.parentElement
    if (item.classList[0] === 'complete-button') {
        todo.classList.toggle('checked');
        savedata();
    } else if (item.classList[0] === 'delete-button') {
        todo.remove();
        savedata();
    }
}, false);


 function savedata(){
    localStorage.setItem("data",todolist.innerHTML);
 }

function showtask(){
    todolist.innerHTML=localStorage.getItem('data');
}

