import { getDatosOee } from '../3-Services/datos.table.js';

export async function intLoadTable() {
   console.log("Ya estas dentro de la funcion datos.table.js");
   const users = await getDatosOee();
   const tableTBody = document.querySelector(".component-table__tbody")
   console.log("Ya estas dentro de la funcion datos.table.js");

   tableTBody.innerHTML = ''

   tableTBody.innerHTML = users.lista.map(item => `
      <tr class="table__fila">
         <td class="table-data td-hora">${item.hora}</td>
         <td class="table-data td-target">${item.target}</td>
         <td class="table-data td-actual">${item.actual}</td>
         <td class="table-data td-tiempo">${item.tiempoMuerto}</td>
         <td class="table-data td-performance">${item.performance}</td>
         <td class="table-data td-programa">${item.programa}</td>
         <td class="table-data td-wo">${item.ordenTrabajo}</td>
         <td >${item.status}</td>
      </tr>
   `).join('')

}