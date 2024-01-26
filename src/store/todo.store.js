import { Todo } from '../todos/models/todo.models';


const filters={
    All: 'all',
    Completed:'Completed',
    Pending:'Pending'
}
const state = {

Todos:[

    new Todo('HTML'),
    new Todo('CSS'),
    new Todo('javascript'),
    new Todo('java'    ),
    new Todo('NodeJs'  ),
    new Todo('React'   ),
    new Todo('FireBase'),
],

 filter: filters.All,
 
}

 
const initStore = () => {
    console.log(state);
    console.log("InitStore 🤞")
}


const loadStore = ()=>{

    throw new Error ('no implementado')
}


const  getTodo= (filter=filter.All) => {

    switch (filter) {
        case filter.All:
    
        return [...state.Todos];
    
        case filter.Completed:
        return state.Todos.filter(todo=>todo.done)

        case filter.Pending:
        return state.Todos.filter(todo=>!todo.done)

        default: throw new Error (`opcion ${filter} no es permitido`)
     
     
  }

}


/**
 * @param {String} description
 */

const addTodo =(description)=>{
   if (!description) throw Error ('description is required')

   state.Todos.push(new Todo(description));

}

/**
 *@param {String} todoId  todo indentifier
 */

const  toggloTodo = (todoId)=>{

  state.Todos=state.Todos.map(Todo=>{
    if(todo.id===todoId){
        todo.done=!todo.done;
    }
        return todo

  });

}
  

const  deleteTodo = (TodoId)=>{

    state.Todos=state.Todos.filter(todo=>TodoId !==todo.done)

}

const  deleteComplete = (TodoId)=>{

    state.Todos=state.Todos.filter(todo=>todo.done)
}

/**
 *@param {filters} newFilter
 */

const  setFilter = (newFilter=filters.All)=>{

     if(Object.keys(filters).includes(newFilter))
      state.filter=newFilter;

      else{
        throw new Error ('No existe el filtro');
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

    



  


