class ListsController{
  init (){
    $(document).ready(function(){
      $('#add_list').on('submit',(event)=>{
        event.preventDefault()
        let list = new List($("#list_title").val())
        render();
      })
      deleteLists();
      deleteTasks();
    })
  }
}

function render(){
  clearFields()
  store.lists.forEach((list)=>{
    $('#select_list').append(new Option(list.title, list.id))
    $('#lists').append(`<div class="list"><ul><li><h2 id="list${list.id}"><button class="destroy-list" >x</button> ${list.title}</h2></li></ul></div>`)
    let listTasks = store.tasks.filter(function(task){
      return task.list[0] === list
    })
    listTasks.forEach(function(task){
     $('#list'+list.id).append(`<li id="task${task.id}"><h4><button class="destroy-task">x</button> Description: ${task.description}</h4> <br> <h5>Priority: ${task.priority}</h5></li>`)
    })
  })
}

function deleteLists(){
  $('#wrapper').on('click','button.destroy-list',function(){
    let listId = parseInt($(this).parents('h2')[0].id.slice(4))
    console.log(listId)
    let listIndex = store.lists.findIndex((list)=>{
      return list.id === listId
    })
    store.lists.splice(listIndex,1)
    render();
  })
}

function deleteTasks(){
  $('#wrapper').on('click','button.destroy-task',function(){
    let taskId = parseInt($(this).parents('li')[0].id.slice(4))
    let taskIndex = store.tasks.findIndex((task)=>{
      return task.id === taskId
    })
    store.tasks.splice(taskIndex,1)
    render();
  })
}

function clearFields(){
  $("#list_title").val("");
  $('#select_list').empty()
  $('#lists').empty()
  $("#task_description").val("")
  $("#task_priority").val("")
}
