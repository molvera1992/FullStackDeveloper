import { getDatosProgram } from '../3-Services/datos.table.js';

export async function intLoadTable() {
   const users = await getDatosProgram();
   const tableTBody = document.querySelector(".component-table__tbody")
   console.log("Ya estas dentro de la funcion datos.table.js");

   tableTBody.innerHTML = ''

   tableTBody.innerHTML = users.lista.map(item => `
      <tr>
         <td>
            <div class="button-table">
               <button class="btnEditar" data-record-id="${item.recordId}">
                  <svg class="svg-btnEditar" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                     stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-edit">
                     <path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" />
                     <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" /><path d="M16 5l3 3" />
                  </svg>
                  Editar
               </button>
               <button class="btnEliminar" data-record-id="${item.recordId}">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                     stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-trash">
                     <path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 7l16 0" /><path d="M10 11l0 6" /><path d="M14 11l0 6" />
                     <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" /><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                  </svg>
                  Eliminar
               </button>
            </div>
         </td>
         <td>${item.recordId}</td>
         <td>${item.mcId}</td>
         <td>${item.program}</td>
         <td>${item.partNumber}</td>
         <td>${item.nip || ''}</td>
         <td>${item.line}</td>
         <td>${item.noblock}</td>
         <td>${item.suffix || ''}</td>
         <td>${item.cycleTime}</td>
         <td>${item.pzsHr}</td>
      </tr>
   `).join('')

}