import * as api from "./api.js";
const resultado = document.getElementById("resultado");
function mostrar(posts) {
    resultado.innerHTML = "";
    posts.forEach(post => {
        resultado.innerHTML += `

<div class="post">

<h3>${post.title}</h3>

<p>${post.body}</p>

<b>ID:</b> ${post.id}<br>

<b>Usuario:</b> ${post.userId}

</div>

`;
    });
}
document.getElementById("listar").addEventListener("click", async () => {
    try {
        const datos = await api.obtenerPosts();
        mostrar(datos);
    }
    catch {
        alert("Error");
    }
});
document.getElementById("buscar").addEventListener("click", async () => {
    const id = Number(document.getElementById("postId").value);
    try {
        const dato = await api.obtenerPost(id);
        mostrar([dato]);
    }
    catch {
        alert("No encontrado");
    }
});
document.getElementById("filtrar").addEventListener("click", async () => {
    const id = Number(document.getElementById("userId").value);
    const datos = await api.filtrarUsuario(id);
    mostrar(datos);
});
document.getElementById("crear").addEventListener("click", async () => {
    const titulo = document.getElementById("titulo").value;
    const contenido = document.getElementById("contenido").value;
    const dato = await api.crearPost(titulo, contenido);
    alert("Creado con ID " + dato.id);
});
document.getElementById("actualizar").addEventListener("click", async () => {
    const id = Number(document.getElementById("patchId").value);
    const titulo = document.getElementById("nuevoTitulo").value;
    const dato = await api.actualizarTitulo(id, titulo);
    alert("Nuevo título: " + dato.title);
});
document.getElementById("eliminar").addEventListener("click", async () => {
    const id = Number(document.getElementById("deleteId").value);
    const eliminado = await api.eliminar(id);
    if (eliminado)
        alert("Eliminado correctamente");
});
