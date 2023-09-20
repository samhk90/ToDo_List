const task=document.getElementById("task");
const listContainer=document.getElementById("list-container");


function addtodo(){
    if(task.value==''){
        alert('Plzz enter task...');
    }else{
        let li=document.createElement('li');
        li.innerHTML=task.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = '<i class="fas fa-times"></i>';
        span.classList.add('delete-button'); // Add the delete-button class
        li.appendChild(span);
        

    }
    task.value='';
    // savedata();
}
listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        savedata();
    } else if (e.target.tagName === 'SPAN') {
        // Check if the clicked SPAN has a specific class or data attribute
        if (e.target.classList.contains('delete-button')) {
            let lis = e.target.closest('li');
            if (lis) {
                lis.remove();
                savedata();
            }
        }
    }
}, false);


 function savedata(){
    localStorage.setItem("data",listContainer.innerHTML);
 }

function showtask(){
    listContainer.innerHTML=localStorage.getItem('data');
}
// showtask();