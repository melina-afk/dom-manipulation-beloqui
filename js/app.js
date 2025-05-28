//espera a la carga del DOM antes de ejecutar el script
document.addEventListener("DOMContentLoaded", () => {
    const btnAgregar = document.getElementById("btn_agregar");
    const container = document.getElementById("containerCard");
    
    //API del localStorage, para guardar en navegador los datos (en un array)
    let cards = JSON.parse(localStorage.getItem("cards")) || [];
    
    //stringify convierte un objeto o array en una cadena de texto en formato JSON.
    const guardarStorage = () => localStorage.setItem("cards", JSON.stringify(cards));

});