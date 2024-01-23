import { Todo } from "../models/todo.models";


const filter={
    All: 'all',
    Completed:'Completed',
    Pending:'Pending'
}
const state = {

Todo:[

    new Todo('HTML'),
    new Todo('CSS'),
    new Todo('javascript'),
    new Todo('java'    ),
    new Todo('NodeJs'  ),
    new Todo('React'   ),
    new Todo('FireBase'),
],

 filter: filter.All,
 
}

 
const initStore = () => {
    console.log(state);
    console.log("InitStore 🤞")
}


const loadStore = ()=>{

    throw new error ('no implementado')
}


const  getTodo= (filter=filter.All)=>{

    switch (filter) {
        case filter.All:
    
        return [...state.Todo];
    
        case filter.Completed:
        return state.todo.filter(todo=>todo.done)

        case filter.Pending:
        return state.todo.filter(todo=>!todo.done)

        default: throw new error(`opcion ${filter} no es permitido`)
     
     
  }

}

const addTodo =(description)=>{
   if (!description) throw error('description is required')

   state.Todo.push(new Todo(description));

}

/**
 *@param {String} todoId  todo indentifier
 */

const  toggloTodo = (TodoId)=>{

  state.Todo=state.Todo.map(Todo=>{
    if(Todo.id===todoId){
        Todo.done=!Todo.done;
    }
        return Todo

  });

}
  

const  deleteTodo = (TodoId)=>{

    state.Todo=state.Todo.filter(todo=>todoId!==todo.done)

}

const  deleteComplete = (TodoId)=>{

    state.Todo=state.Todo.filter(todo=>todo.done)
}

const  setFilter = (newFilter=filter.All)=>{

     if(Object.keys(filter).includes(newFilter))
      state.filter=newFilter;

      else{
        throw new error('No existe el filtro');
      }
    }
 

const  getCurrentFilter= ()=>{

   return state.getCurrentFilter
}
 
 
export default {

   addTodo,
   deleteComplete,
   deleteTodo,
   getCurrentFilter,
   getTodo,
   initStore,
   loadStore,
   setFilter,
   toggloTodo,

}

    



  


