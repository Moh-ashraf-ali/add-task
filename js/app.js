let taskData = document.getElementById("taskData");
let addButton = document.getElementById("addButton");
let noTask = document.getElementById("noTask");
let alltasks =document.querySelector(".alltasks");
let validMessage = document.getElementById("validMessage")
let closeValidMesssageButt = document.querySelector('.closeValidMesssageButt')
let showTaskModel = document.getElementById("showTaskModel")
let model = document.getElementById("model")
let quantity = document.getElementById('quantity');


let addTask = () => {
     let taskInput = taskData.value;
if(taskInput.trim() == ""||taskInput.length < 3|| taskInput.length > 20){
    validMessage.classList.toggle('none')
}else{
    noTask.classList.add('none');
    alltasks.innerHTML +=`<div class =" ccc btn btn-info btn-block"> <label class="labelNum"> ${taskInput}</label>
    <i class="fa-solid fa-trash-can"></i>
    </div>`; 
    validMessage.classList.add('none')
    taskData.value = "";
    model.classList.toggle('block')

}
}


let closeValidMesssageFunc = () =>{
    validMessage.classList.toggle('none')
}

let removeTaskFromAllTasks = (f)=> {
    if(f.target.classList.contains('fa-solid')){
        f.target.parentElement.remove();
    }
    if(alltasks.childElementCount=="0"){
    noTask.classList.remove('none');
}
}

let taskFinished = (e)=>{
    if(e.target.classList.contains('ccc')){
    e.target.classList.toggle('checked')
}
}

let TaskModelFunc = ()=>{
    model.classList.toggle('block')
}

showTaskModel.addEventListener ('click' , TaskModelFunc)
document.addEventListener('click', taskFinished)
document.addEventListener('click', removeTaskFromAllTasks)
closeValidMesssageButt.addEventListener('click', closeValidMesssageFunc)
addButton.addEventListener('click' , addTask);
