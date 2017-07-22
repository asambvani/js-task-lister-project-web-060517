// Task Model
let store = {lists: [], tasks: []}

let Task = newTask();

function newTask(){
  let taskCounter = 0;

  return class Task{

    constructor(description, priority,list){
      this.id = taskCounter++;
      this.description = description
      this.priority = priority
      this.list = list
      store.tasks.push(this)
    }
  }
}
