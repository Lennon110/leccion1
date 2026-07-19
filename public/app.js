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
        alert("Error al obtener las publicaciones.");
    }
});
document.getElementById("buscar").addEventListener("click", async () => {
    const id = Number(document.getElementById("postId").value);
    try {
        const dato = await api.obtenerPost(id);
        mostrar([dato]);
    }
    catch {
        alert("Publicación no encontrada.");
    }
});
document.getElementById("filtrar").addEventListener("click", async () => {
    const id = Number(document.getElementById("userId").value);
    try {
        const datos = await api.filtrarUsuario(id);
        mostrar(datos);
    }
    catch {
        alert("Error al filtrar las publicaciones por usuario.");
    }
});
document.getElementById("crear").addEventListener("click", async () => {
    const titulo = document.getElementById("titulo").value;
    const contenido = document.getElementById("contenido").value;
    try {
        const dato = await api.crearPost(titulo, contenido);
        alert("Creado con ID " + dato.id);
    }
    catch {
        alert("Error al crear la publicación.");
    }
});
document.getElementById("actualizar").addEventListener("click", async () => {
    const id = Number(document.getElementById("patchId").value);
    const titulo = document.getElementById("nuevoTitulo").value;
    try {
        const dato = await api.actualizarTitulo(id, titulo);
        alert("Nuevo título: " + dato.title);
    }
    catch {
        alert("Error al actualizar el título.");
    }
});
document.getElementById("eliminar").addEventListener("click", async () => {
    const id = Number(document.getElementById("deleteId").value);
    try {
        const eliminado = await api.eliminar(id);
        if (eliminado) {
            alert("Eliminado correctamente");
        }
        else {
            alert("No se pudo eliminar la publicación.");
        }
    }
    catch {
        alert("Error en la conexión al intentar eliminar.");
    }
});
