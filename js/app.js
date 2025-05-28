//espera a la carga del DOM antes de ejecutar el script
document.addEventListener("DOMContentLoaded", () => {
    const btnAgregar = document.getElementById("btn_agregar");
    const container = document.getElementById("containerCard");
    
    //API del localStorage, para guardar en navegador los datos (en un array)
    let cards = JSON.parse(localStorage.getItem("cards")) || [];
    
    //stringify convierte un objeto o array en una cadena de texto en formato JSON.
    const guardarStorage = () => localStorage.setItem("cards", JSON.stringify(cards));

    //crea los input que iran en cada tarjeta (clase temporal para usar en formularios o edición inline)
    const crearInput = (placeholder, valor = "") => {
        const input = document.createElement("input");
        input.placeholder = placeholder;
        input.value = valor;
        input.classList.add("input-temporal");
        return input;
    };
    //activa edicion inline, reemplaza el elemento por un input
    const activarEdicion = (el, i, campo) => {
        const input = crearInput("", el.textContent);
        el.replaceWith(input);
        input.focus();
        //guarda el valor nuevo
        input.addEventListener("blur", () => {
            cards[i][campo] = input.value;
            guardarStorage();
            renderizar();
        });
        //tambien guarda si se apreta el "enter"
        input.addEventListener("keypress", e => e.key === "Enter" && input.blur());
    };
    //Crea una tarjeta con los datos
    const crearCard = (data, i) => {
        const card = document.createElement("div");
        card.className = "card";

    //contenido html de la tarjeta
    card.innerHTML = `
        <img src="${data.img}" class="card-img">
        <h3 class="editable">${data.titulo}</h3>
        <p class="editable">${data.descripcion}</p>
        <div class="acciones">
        <i class="fa-regular fa-pen-to-square"></i>
        <i class="fa-solid fa-trash-can"></i>
    </div>`;

const [titulo, descripcion] = card.querySelectorAll(".editable");
    const [btnEditar, btnEliminar] = card.querySelectorAll(".acciones i");
        
    //edita tanto con botón (el lapiz) como con doble clic
    btnEditar.onclick = () => {
    const form = document.createElement("div");
    form.className = "form-editar";

    const inputImg = crearInput("URL de imagen", data.img);
    const inputTitulo = crearInput("Título", data.titulo);
    const inputDesc = crearInput("Descripción", data.descripcion);

    const btnGuardar = document.createElement("button");
    btnGuardar.textContent = "Guardar";
    btnGuardar.className = "btn-guardar";

    const btnCancelar = document.createElement("button");
    btnCancelar.textContent = "Cancelar";
    btnCancelar.className = "btn-cancelar";

    form.append(inputImg, inputTitulo, inputDesc, btnGuardar, btnCancelar);
    card.innerHTML = ""; // limpia el contenido de la tarjeta
    card.appendChild(form);

    btnGuardar.onclick = () => {
        cards[i] = {
            img: inputImg.value.trim(), //trim saca los espacios en blanco
            titulo: inputTitulo.value.trim(),
            descripcion: inputDesc.value.trim()
        };
        guardarStorage();
        renderizar();
    };

    btnCancelar.onclick = () => renderizar();
};

    titulo.ondblclick = () => activarEdicion(titulo, i, "titulo");
    descripcion.ondblclick = () => activarEdicion(descripcion, i, "descripcion");
    
    //elimina la tarjeta actual
    btnEliminar.onclick = () => {
            cards.splice(i, 1);
            guardarStorage();
            renderizar();
        };

        container.appendChild(card);
    };
    
    //crea una tarjeta editable (form) para ingresar nuevos datos

    const crearCardEditable = () => {
        const card = document.createElement("div");
        card.className = "form-temp";

        const inputUrl = crearInput("URL de imagen");
        const inputTitulo = crearInput("Título");
        const inputDesc = crearInput("Descripción");

        //botón para guardar nueva tarjeta
        const btnGuardar = document.createElement("button");
        btnGuardar.textContent = "Guardar";
        btnGuardar.className = "btn-guardar";

        //botón para cancelar creación
        const btnCancelar = document.createElement("button");
        btnCancelar.textContent = "Cancelar";
        btnCancelar.className = "btn-cancelar";

        [inputUrl, inputTitulo, inputDesc, btnGuardar, btnCancelar].forEach(el => card.appendChild(el));
        container.appendChild(card);

    //crea la tarjeta si todos los campos estan completos
        btnGuardar.onclick = () => {
            const img = inputUrl.value.trim();
            const titulo = inputTitulo.value.trim();
            const descripcion = inputDesc.value.trim();
            if (img && titulo && descripcion) {
                cards.push({ img, titulo, descripcion });
                guardarStorage();
                renderizar();
                card.remove(); // elimina el form
            } else {
                alert("Completá todos los campos.");
            }
        };
        //cancela y remueve el form 
        btnCancelar.onclick = () => card.remove();
    }
    //limpia el contenedor y vuelve a mostrar todas las tarjetas
        const renderizar = () => {
            container.querySelectorAll(".card").forEach(c => c.remove()); //elimina tarjetas viejas
            cards.forEach((card, i) => crearCard(card, i)); //Vuelve a crearlas
        };

        btnAgregar.onclick = crearCardEditable;
        
        //carga las tarjetas al iniciar
        renderizar();
});
