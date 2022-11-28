


const task = document.querySelector("#task");


function newElement(){
 
   if(task.value.trim()!=0){

      $(`.success`).toast("show");

      let localItems = JSON.parse( localStorage.getItem('localItem') )

      if(localItems === null){
         taskList = []
      }else{
         taskList = localItems;
      }
      taskList.push(task.value)
      localStorage.setItem('localItem', JSON.stringify(taskList));

   }else {
      $(`.error`).toast("show");
   }

   showItem();
}

function showItem(){

   let localItems = JSON.parse( localStorage.getItem('localItem') )

   if(localItems === null){
      taskList = [];
   }else{
      taskList = localItems;
   }

   let html = '';
   let ul = document.querySelector("#list");

   taskList.forEach((data, index) => {
   
      html += `
      <li class="todoList">${data}
         <button onClick="deleteItem(${index})">x</button>
      </li>
      `
   })
   ul.innerHTML = html;
}
showItem();

function deleteItem(index){
   let localItems = JSON.parse( localStorage.getItem('localItem') )
   taskList.splice(index, 1)
   localStorage.setItem('localItem', JSON.stringify(taskList));
   showItem();
}

// clear local storage
const addTaskBtn = document.querySelector("#liveToastBtn");

addTaskBtn.addEventListener("dblclick", e => {
    console.log("You double clicked!");
    localStorage.clear();
});





// // without local storage
// const task = document.querySelector("#task");
// const ul = document.querySelector("#list");

// function newElement(){
 
//    let li = document.createElement("li")
//    li.innerText = task.value;
//    ul.appendChild(li);
   


//    let deleteButton = document.createElement("button");
//    deleteButton.innerHTML = 'X';
//    li.appendChild(deleteButton);

//    deleteButton.addEventListener('click', function(e){
   
//        let target = e.target;
   
//        target.parentElement.remove();
      
//    });
// }
