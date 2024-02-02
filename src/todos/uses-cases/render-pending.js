import todoStore, { filters } from "../../store/todo.store";

let element


/**
 *@param {String} elementid
 */

export const renderPending =(elementid) =>{
    if(!element)
    element=document.querySelector(elementid);

    if(!element)
    throw new Error(`element ${elementid} no encontrado`);

    element.innerHTML=todoStore.getTodos(filters.Pending).length
  }