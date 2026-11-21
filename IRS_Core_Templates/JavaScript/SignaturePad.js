const canvas = document.getElementById('signature-pad')
const btnRestart = document.getElementById('restart-btn')
const btnSaved = document.getElementById('btn-saved')
const cardEquipmentContainer = document.getElementById('card-equipment-container')

const signaturePad = new SignaturePad(canvas, {
	backgroundColor: 'rgba(255, 255, 255, 0)', // Transparente
	penColor: 'rgb(0, 0, 0)'
});

// Función para ajustar el tamaño del canvas (importante para alta resolución)
function resizeCanvas() {
	const ratio = Math.max(window.devicePixelRatio || 1, 1);
	canvas.width = canvas.offsetWidth * ratio;
	canvas.height = canvas.offsetHeight * ratio;
	canvas.getContext("2d").scale(ratio, ratio);
	signaturePad.clear(); // Limpia al redimensionar para evitar distorsiones
}

window.onresize = resizeCanvas;
resizeCanvas();

btnRestart.addEventListener('click', () => {
	signaturePad.clear()
})

btnSaved.addEventListener('click', () => {
	if (signaturePad.isEmpty()) {
		alert("Por favor, proporcione una firma primero.");
		return;
	}

	const dataURL = signaturePad.toDataURL(); // Por defecto es image/png

	console.log("Imagen capturada lista para enviar:", dataURL);
})


const datosModel = ['Card1', 'Card2']

cardEquipmentContainer.innerHTML = datosModel.map(dato =>
`
	<div class="card-equipment">
		<span class="equipment-type">LAPTOP</span>
		<div class="card-details-container">
			<span>Marca:</span>
			<span class="details-data">${dato}</span>
		</div>
		<div class="card-details-container">
			<span>Modelo:</span>
			<span class="details-data">EliteBook 650 G9</span>
		</div>
		<div class="card-details-container">
			<span>No. Serie:</span>
			<span class="details-data">6CDMEKRS7</span>
		</div>
	</div>
`
).join('')
