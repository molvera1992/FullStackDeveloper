export async function getDatosProgram() {
   try {
      const response = await fetch('../../Data/DatosVisual.json');
      const datos = await response.json();
      console.log(datos);
      return datos;

   } catch (error) {
      console.error('Error al cargar archivo JSON');
      return [];
   }
}

export async function getDatosOee() {
   try {
      console.log("Dentro de GetDatos");
      const response = await fetch('../../Data/ProductionTime.json');
      const datos = await response.json();
      console.log(datos);
      return datos;

   } catch (error) {
      console.error('Error al cargar archivo JSON');
      return [];
   }
}