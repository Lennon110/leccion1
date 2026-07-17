const URL = "https://jsonplaceholder.typicode.com/posts";

export async function obtenerPosts() {

    const respuesta = await fetch(URL);

    if (!respuesta.ok)
        throw new Error("Error al consultar");

    return respuesta.json();
}

export async function obtenerPost(id:number){

    const respuesta=await fetch(`${URL}/${id}`);

    if(!respuesta.ok)
        throw new Error("No encontrado");

    return respuesta.json();

}

export async function filtrarUsuario(userId:number){

    const respuesta=await fetch(`${URL}?userId=${userId}`);

    return respuesta.json();

}

export async function crearPost(title:string,body:string){

    const respuesta=await fetch(URL,{

        method:"POST",

        headers:{
            "Content-Type":"application/json"
        },

        body:JSON.stringify({

            title,

            body,

            userId:1

        })

    });

    return respuesta.json();

}

export async function actualizarTitulo(id:number,title:string){

    const respuesta=await fetch(`${URL}/${id}`,{

        method:"PATCH",

        headers:{
            "Content-Type":"application/json"
        },

        body:JSON.stringify({

            title

        })

    });

    return respuesta.json();

}

export async function eliminar(id:number){

    const respuesta=await fetch(`${URL}/${id}`,{

        method:"DELETE"

    });

    return respuesta.ok;

}