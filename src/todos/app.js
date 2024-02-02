
import todoStore from '../store/todo.store';
import html from './app.html?raw';
import { renderPending, renderTodos } from './use-cases';



const ElementIDs= {


  clearCompleted:'.Clear-Completed',
  Todolist: '.todo-list',
  newTodoImput:'#new-todo-input',
  TodoFilters: '.filtro',
  pendingCountLabel:'#pendingCount',

}



/**
 *@param {String} elementid
 */

 export const App=(elementid)=>{
     
   
 const DisplayTodo = ()=>{
   
  const todos = todoStore.getTodos(todoStore.getCurrentFilter());
   renderTodos(ElementIDs.Todolist,todos);
   updatePendingCount();

 }

  const updatePendingCount= ()=>{
    renderPending();

  }


 //Cuando la funcion App() se llama 


    (()=>{

      const app = document.createElement('div')
      app.innerHTML=html;
      document.querySelector(elementid).append(app)
      DisplayTodo(elementid.pendingCountLabel);

    })()


     //Referencias HTML

     const  newDescriptionImput=document.querySelector(ElementIDs.newTodoImput);
     const  todolistUL=document.querySelector(ElementIDs.Todolist);
     const ClearCompleteButton=document.querySelector(ElementIDs.clearCompleted);
     const FilterLi= Document.querySelectorAll(elementid.TodoFilters)

     //listeners

      newDescriptionImput.addEventListener('keyup', (Event)=>{
      
        if(Event.keycode !==13) return
        if(Event.target.value.trim().length===0) return;

        todoStore.addTodo(Event.target.value);
        DisplayTodo();
        Event.target.value='';

      });

        todolistUL.addEventListener('click', (Event) =>{
          const element=Event.target.closest('data-id'); 
          todoStore.toggloTodo(element.getAttribute('data-id'));
          DisplayTodo();
        })



        todolistUL.addEventListener('click', (Event) =>{
           const IsDestroyElement = Event.target.className==='destroy'; 
           const element=Event.target.closest('data-id');
           if(!element || !IsDestroyElement) return;
          
           todoStore.deleteTodo(element.getAttribute('data-id'));
           DisplayTodo();
        })


        ClearCompleteButton.addEventListener('click',()=>{
          todoStore.deleteComplete(),
          DisplayTodo()
        });
        
        FilterLi.forEach(element => {
          element.addEventListener('click',(element)=>{
          document.forEach(el=>el.classList.remove('selected'))
          element.target.classList.add('selected')

          switch(element.target.text){
            case 'Todos':
            todoStore.setFilter(filters.All)
          } 

          switch(element.target.text){
            case 'Pending':
            todoStore.setFilter(filters.Pending)
          }

          switch(element.target.text){
            case 'Completados':
            todoStore.setFilter(filters.Completed)
          };

          DisplayTodo();



          });


        });

   }