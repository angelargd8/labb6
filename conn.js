//import mysql from 'mysql2/promise'
const mysql = require('mysql2/promise')

const pool = mysql.createPool({
    host: 'localhost',
    user: 'blog_user',
    database: 'blog_db',
    password: 'root_password',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})

/*
//consulta para validar la conexion
pool.query('SELECT id from blogs LIMIT 1')
    .then(() => {
        console.log('Conexión exitosa a la base de datos') 
    })
    .catch(err =>{ 
        console.error('Error en la conexión a la base de datos', err)
    });
*/


//export default pool

module.exports = pool