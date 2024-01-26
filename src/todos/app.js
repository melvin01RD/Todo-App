

import todoStore from '../store/todo.store';
import html from './app.html?raw';
import { renderTodos } from './uses-cases';



const ElementIDs= {
  todolist: '.todo-list',

}



/**
 *@param {String} elementid
 */

 export const App=(elementid)=>{
     
   
 const DisplayTodo = ()=>{
   
  const todos = todoStore.getTodo(todoStore.getCurrentFilter())
  console.log(todos);

   renderTodos(ElementIDs.todolist,Todo);

 }


 //Cuando la funcion App() se llama 


    (()=>{

      const app = document.createElement('div')
      app.innerHTML=html;
      document.querySelector(elementid).append(app)
      DisplayTodo();

    })()


  }