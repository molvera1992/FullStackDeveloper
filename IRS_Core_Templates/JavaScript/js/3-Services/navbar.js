export function initNavbar() {

	const toggleBtn = document.querySelector('.navbar-toggle')
	const navBarList = document.querySelector('.c-navbar')

	toggleBtn.addEventListener('click', () => {
		console.log('Me diste click TOGGLE')
		//const expand = toggleBtn.getAttribute("aria-expanded") === "true";
		const expand = toggleBtn.getAttribute("aria-expanded") === "true";
		expandeToggle(!expand)
	})

	document.addEventListener('click', () => {
		const isNavbarOpen = navBarList.classList.contains('is-open');

		if (!isNavbarOpen) return;

		const isClickInsideNavbar = navBarList.contains(event.target);
		const isClickOnToggle = toggleBtn.contains(event.target);

		if (!isClickInsideNavbar && !isClickOnToggle) {
			console.log('Clic fuera del navbar detectado - CERRANDO');
			expandeToggle(false);
		}
	})

	function expandeToggle(expand) {
		toggleBtn.setAttribute("aria-expanded", String(expand));
		// Si la condición es TRUE  --> Ejecuta classList.add('mi-clase')
		// Si la condición es FALSE --> Ejecuta classList.remove('mi-clase')
		navBarList.classList.toggle('is-open', expand)
	}
}


