class TasksController{
  init(){
    $(document).ready(function(){
      $('#add_task').on('submit',(event)=>{
        event.preventDefault();
        let task = new Task($("#task_description").val(),$("#task_priority").val(),List.find($("#select_list").val()))
        render();
      })
    })
  }
}
