import { todo } from "../models/todo.models";


const filter={
    All: 'all',
    Completed:'Completed',
    Pending:'Pending'
}
const state = {

todo:[

    new todo('javascript'),
    new todo('java'    ),
    new todo('NodeJs'  ),
    new todo('React'   ),
    new todo('FireBase'),
],

 filter:filter.All,
 
}

 
const initStore = () => {
    console.log(state);
    console.log("InitStore 🤞")
}
 
export default {
   initStore,
   
}

    



  


