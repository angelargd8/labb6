//import * as conn from './conn.js'
const conn = require('./conn.js')

/*
GET /posts que retorna un listado de todos los posts. Debe retornar un array y un status 200 si fue exitoso.
GET /posts/:postId que retorna el detalle de un post con el id postId. Debe retornar un objeto y un status 200 si fue exitoso.
POST /posts que permite crear un nuevo post. Debe retornar un objeto con el post creado y un status 200 si fue exitoso.
PUT /posts/:postId  que permite modificar un post. Debe retornar un objecto con el post editado y un status 200 si exitoso.
DELETE /posts/:postId que borra un post. No debe retornar contenido y debe retornar status 204.
*/


async function getAllPosts() {
 const [rows] = await conn.query('SELECT * FROM blogs')
 return rows
}


async function createPost(title, content,  descripcion, imagen) {
    const [result] = await conn.query('INSERT INTO blogs (title, content, descripcion, imagen) VALUES (?, ?, ?, ?)', [title, content,  descripcion, imagen])
    return result
}

async function getPostId(id){
    const [result] = await conn.query('SELECT * FROM blogs WHERE id = ?', [id])
    return result
}

async function updatePost(id, title, content,  descripcion, imagen){
    const [result] = await conn.query('UPDATE blogs SET title = ?, content = ?,  descripcion = ?, imagen = ? WHERE id = ?', [title, content,  descripcion, imagen, id])
    return result
}

//Eliminar Post
async function deletePost(id){
    const [result] = await conn.query('DELETE FROM blogs WHERE id = ?', [id])
    return result
}


 

module.exports= {
    getAllPosts,
    createPost, 
    getPostId,
    updatePost,
    deletePost
 }

 //validarConexion()