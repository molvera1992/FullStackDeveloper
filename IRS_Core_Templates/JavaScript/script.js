// const toggleBtn = document.querySelector(".navbar-toggle");
// const navBar = document.querySelector(".navbar");
// const logOutBtn = document.querySelector(".logOut-button");

// toggleBtn.addEventListener("click", () => {
//   console.log(`Me diste click`);
//   const expand = toggleBtn.getAttribute("aria-expanded") === "true";
//   // console.log(typeof expand);
//   // console.log(`EL VALOR DE expand es -> ${expand}`);
//   // console.log(`EL VALOR DE expand es NUEVO -> ${!expand}`);
//   expandeToggle(!expand);
// });

// function expandeToggle(expand) {
//   toggleBtn.setAttribute("aria-expanded", String(expand));
//   if (expand) {
// 		navBar.classList.add('open')
// 		logOutBtn.classList.add('openBtn')
//     console.log(`Mostrar lista de Items`);
//   } else {
// 		navBar.classList.remove('open')
// 		logOutBtn.classList.remove('openBtn')
//     console.log(`Ocultar lista de Items`);
//   }
// }

let pagina = 1;
let totalPaginas = 1;
let buscar = document.querySelector("#input-buscar");
const btnClean = document.querySelector(".btn-clean");
const container = document.querySelector(".component-table tbody");
const numDeRegistros = document.getElementById("numDeRegistros");
const paginaActual = document.getElementById("paginaActual");
const allPaginas = document.getElementById("totalPaginas");

const loadingOverlay = document.getElementById("loading-overlay");

const showLoader = () => {
  loadingOverlay.classList.add("show_loader");
};
const hideLoader = () => {
  loadingOverlay.classList.remove("show_loader");
};

window.addEventListener("DOMContentLoaded", () => {
  showLoader();
  fetch(`/Admin/Process/Trace_ErrorsData?page=${pagina}`)
    .then((response) => {
      return response.json();
    })
    .then((responseItems) => {
      totalPaginas = Math.ceil(responseItems.items / responseItems.pageSize);
      pagina = responseItems.paginaActual;

      paginaActual.textContent = pagina;
      numDeRegistros.textContent = responseItems.items;
      allPaginas.textContent = totalPaginas;

      const items = responseItems.lista;

      items.forEach((item) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
                 <td>${item.maquina}</td>
                 <td>${item.fileName}</td>
                 <td>${item.timeDate}</td>
                 <td>${item.message}</td>
             `;
        container.appendChild(tr);
      });
    })
    .finally(() => {
      hideLoader();
    });
});

window.addEventListener("load", () => {
  console.log("estas luego AQUI");
});

buscar.addEventListener("input", (evento) => {
  const textoEscrito = evento.target.value;
  console.log(textoEscrito);
  busquedaFiltro(textoEscrito);
});

btnClean.addEventListener("click", () => {
  busquedaFiltro((buscar.value = ""));
});

document.getElementById("btnSiguiente").addEventListener("click", () => {
  if (pagina < totalPaginas) cambiarPagina(++pagina, buscar.value);
});

document.getElementById("btnAnterior").addEventListener("click", () => {
  if (pagina > 1) cambiarPagina(--pagina, buscar.value);
});

function busquedaFiltro(texto) {
  showLoader();
  pagina = 1;
  fetch(`/Admin/Process/Trace_ErrorsData?page=${pagina}&buscar=${texto}`)
    .then((res) => res.json())
    .then((responseItems) => {
      container.innerHTML = "";
      totalPaginas = Math.ceil(responseItems.items / responseItems.pageSize);

      allPaginas.textContent = totalPaginas;
      paginaActual.textContent = pagina;
      numDeRegistros.textContent = responseItems.items;

      const items = responseItems.lista;

      items.forEach((item) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
                    <td>${item.maquina}</td>
                    <td>${item.fileName}</td>
                    <td>${item.timeDate}</td>
                    <td>${item.message}</td>
                `;
        container.appendChild(tr);
      });
    })
    .finally(() => {
      hideLoader();
    });
}

function cambiarPagina(pagina, buscar) {
  showLoader();
  fetch(`/Admin/Process/Trace_ErrorsData?page=${pagina}&buscar=${buscar}`)
    .then((res) => res.json())
    .then((responseItems) => {
      container.innerHTML = "";
      pagina = responseItems.paginaActual;
      numDeRegistros.textContent = responseItems.items;
      paginaActual.textContent = pagina;
      totalPaginas = Math.ceil(responseItems.items / responseItems.pageSize);
      allPaginas.textContent = totalPaginas;

      const items = responseItems.lista;

      items.forEach((item) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
                    <td>${item.maquina}</td>
                    <td>${item.fileName}</td>
                    <td>${item.timeDate}</td>
                    <td>${item.message}</td>
                `;
        container.appendChild(tr);
      });
    })
    .finally(() => {
      hideLoader();
    });
}
