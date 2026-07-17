import * as api from "./api.js";

const resultado = document.getElementById("resultado")!;

function mostrar(posts:any[]){

resultado.innerHTML="";

posts.forEach(post=>{

resultado.innerHTML+=`

<div class="post">

<h3>${post.title}</h3>

<p>${post.body}</p>

<b>ID:</b> ${post.id}<br>

<b>Usuario:</b> ${post.userId}

</div>

`;

});

}

document.getElementById("listar")!.addEventListener("click",async()=>{

try{

const datos=await api.obtenerPosts();

mostrar(datos);

}catch{

alert("Error");

}

});

document.getElementById("buscar")!.addEventListener("click",async()=>{

const id=Number((document.getElementById("postId") as HTMLInputElement).value);

try{

const dato=await api.obtenerPost(id);

mostrar([dato]);

}catch{

alert("No encontrado");

}

});

document.getElementById("filtrar")!.addEventListener("click",async()=>{

const id=Number((document.getElementById("userId") as HTMLInputElement).value);

const datos=await api.filtrarUsuario(id);

mostrar(datos);

});

document.getElementById("crear")!.addEventListener("click",async()=>{

const titulo=(document.getElementById("titulo") as HTMLInputElement).value;

const contenido=(document.getElementById("contenido") as HTMLTextAreaElement).value;

const dato=await api.crearPost(titulo,contenido);

alert("Creado con ID "+dato.id);

});

document.getElementById("actualizar")!.addEventListener("click",async()=>{

const id=Number((document.getElementById("patchId") as HTMLInputElement).value);

const titulo=(document.getElementById("nuevoTitulo") as HTMLInputElement).value;

const dato=await api.actualizarTitulo(id,titulo);

alert("Nuevo título: "+dato.title);

});

document.getElementById("eliminar")!.addEventListener("click",async()=>{

const id=Number((document.getElementById("deleteId") as HTMLInputElement).value);

const eliminado=await api.eliminar(id);

if(eliminado)

alert("Eliminado correctamente");

});