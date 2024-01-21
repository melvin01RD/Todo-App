

import html from './app.html?raw';



/**
 *@param {String} elementid
 */

 export const App=(elementid)=>

    //Cuando la funcion se llama 


    (()=>{

      const app = document.createElement('div')
      app.innerHTML=html;
      document.querySelector(elementid).append(app)

    })()