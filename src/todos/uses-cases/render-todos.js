import { todo } from '../uses-cases';
import { createTodoHTML } from './create-todo-html';


/**
 * @param {String} elementId 
 * @param {todo} todos  
 */


export const renderTodos = (elementId, todos = []) => {
  const element = document.querySelector(elementId);
    
  let arregloTodos = Object.values(todos);

  arregloTodos.forEach((Todo) => {
    element.append(createTodoHTML(todoItem));
  });
}




