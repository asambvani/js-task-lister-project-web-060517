// List Model

let List = newList();

function newList(){
  let listCounter = 0;
  let all = []

  return class List{
    constructor(title){
      this.tasks = [];
      this.title = title
      this.id = listCounter++;
      store.lists.push(this)
    }
    static find(id){
      let returnList = store.lists.filter(function(list){
        return list.id==id
      })
      return returnList
    }
  }
}
