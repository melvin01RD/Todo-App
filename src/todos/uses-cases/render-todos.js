import { Todo } from '../models/todo.models';
import { createTodoHTML } from './';


let element;


/**
 * @param {String} elementId 
 * @param {Todo} todos  
 */


export const renderTodos = (elementId, todos = []) => {
  const element = document.querySelector(elementId);
  
  if(!element)
  element.querySelector(elementId)

  if(!element) throw new Error (`Elemento no encontrado'${elementId}`);

 element.innerHTML='';

  todos.forEach((Todo) => {
  element.append(createTodoHTML(Todo));
  });

}




