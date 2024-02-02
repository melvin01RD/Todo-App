import { Todo } from '../todos/models/todo.models';


export const filters={
    All: 'all',
    Completed:'Completed',
    Pending:'Pending'
};

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
    loadStore();
    console.log("InitStore ")
};


const loadStore = ()=>{

    if(!localStorage.getItem('state')){ return;

        const {todo=[], filter=filters.All} =JSON.parse(localStorage.getItem('state'));
        state.Todos=todo
        state.filter=filter
    }

}


const saveStateToLocalStorage= () =>{

    localStorage.setItem('state', JSON.stringify(state))


}

const getTodos = (filter = filters.All) => {
	switch (filter) {
		case filter.All:
			return [...state.Todos]
		case filter.Completed:
			return state.Todos.filter((todo) => todo.done);
		case filter.Pending:
			return state.Todos.filter((todo) => !todo.done);
		default:
			throw new Error(`Option ${filter} is not valid`);
	}
};



/**
 * @param {String} description
 */

const addTodo =(description)=>{
   if (!description) throw Error ('description is required')

   state.Todos.push(new Todo(description));

   saveStateToLocalStorage();

}

/**
 *@param {String} todoId  todo indentifier
 */

const  toggloTodo = (todoId)=>{

  state.Todos=state.Todos.map(Todo=>{
    if(Todo.id===todoId){
        Todo.done=!Todo.done;
    }
        return Todo;

  });

  saveStateToLocalStorage();

}
  


const deleteTodo = (TodoId) => {
    state.Todos = state.Todos.filter(todo => TodoId !== todo.id); 
    saveStateToLocalStorage();
}




const  deleteComplete = (TodoId)=>{

    state.Todos=state.Todos.filter(todo=>!todo.done);
    saveStateToLocalStorage();
}



/**
 *@param {filters} newFilter
 */

const  setFilter = (newFilter=filters.All)=>{
    state.filter = newFilter;
    saveStateToLocalStorage();
    


    }
 

    const getCurrentFilter = () => {
        return state.filter;
     }
     
 
export default {

   
   addTodo,
   deleteComplete,
   deleteTodo,
   getCurrentFilter,
   getTodos,
   initStore,
   loadStore,
   setFilter,
   toggloTodo,

};

    



  


