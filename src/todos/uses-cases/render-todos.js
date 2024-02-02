import { Todo } from '../models/todo.models';
import { createTodoHTML } from './';


let element;


/**
 * @param {String} elementId 
 * @param {Todo} todos  
 */


export const renderTodos = (elementId, todos = []) => {
  const element = document.querySelector(elementId);
  
  if (!element) {
    // Si el elemento no se encuentra, intenta corregirlo
    throw new Error(`Elemento no encontrado '${elementId}'`);
  }

  // Resto del código
  element.innerHTML = '';

  todos.forEach((Todo) => {
    element.append(createTodoHTML(Todo));
  });
};




