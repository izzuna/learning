// De callbacks a promesas

const getUsuariosIDs = new Promise((response, reject) =>{
    setTimeout(() =>{
        response([101,102,103,104,105])
    }, 1500)
})

const getUsuario = userID => {
    return new Promise((resolve, reject) => {
        setTimeout(id =>{
            const usuario = {
                nombre: 'grover',
                email: 'grover@gmail.com'
            }
            resolve(`${id} - ${usuario.email} - ${usuario.nombre}`)
        }, 1500, userID)
    })
}

const getPermisos = id =>{

    return new Promise((resolve,reject) => {
        setTimeout(id =>{
            const permiso = ['admin', 'creador']
            resolve(permiso)
        }, 1500, id)
    })
}

// getUsuariosIDs
// .then(IDs => {
//     console.log(IDs)
//     return getUsuario(IDs[2])
// })
// .then(usuario =>{
//     console.log(usuario)
//     return getPermisos(usuario.id)
// })
// .then(permisos =>{
// console.log(permisos)
// })
// .catch(() => {
//     console.log('Error')
// })

// Funcion con Async/Away

async function getUsuarioAW(){
    const IDs = await getUsuariosIDs
    console.log(IDs)
    const usuario = await getUsuario(IDs[3])
    console.log(usuario)
    const permisos = await getPermisos(usuario.id) 
    console.log(permisos)
    return usuario
}

const usuario = getUsuarioAW()
console.log(usuario)