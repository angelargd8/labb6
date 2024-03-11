
/*import express from 'express'
import * as db from './db.js'
import swaggerUi from 'swagger-ui-express'
import yaml from 'js-yaml'*/

const express = require('express')
const db = require('./db.js')
const swaggerUi = require('swagger-ui-express')
const yaml = require('js-yaml')

const app = express()

//cargar el archivo YAML que describe endpoints
const swaggerDocument = yaml.load('./swagger.yaml')
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))



app.get('/', (req, res) => {
  res.send('Hello World from Express!')
  console.log('Hello World from Express!')
})

//middleware para json Aca es donde se usa los cors
app.use(express.json())


//--get all posts
app.get('/posts', async (req, res) => {
  const posts = await db.getAllPosts()
  res.json(posts)
  res.status(200).json(posts)
  console.log('posts', posts)
})

//--create post
app.post('/posts', async (req, res) => {
  try{
    const { title, content, titulo, descripcion, imagen } = req.body
    const newPost = await db.createPost(title, content, titulo, descripcion, imagen)
    res.json({ message: 'Post created' })
    res.status(200).json(newPost)

    console.log('Post created')
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
  
})

//-get post by id
app.get('/posts/:postId', async (req, res) => {
  const { id } = req.params
  const post = await db.getPostId(id)
  res.status(200).json(post)
  //console.log('posts', posts)
})

//--update post
app.put('/posts/:postId', async (req, res) => {
  const { id } = req.params
  const { title, content, titulo, descripcion, imagen } = req
  const updatedPost = await db.updatePost(id, title, content, titulo, descripcion, imagen)
  if (!updatedPost) {
    res.status(400).json({ message: 'Post not found' })
  } else {
    res.status(200).json(updatedPost)
    res.json({ message: 'Post updated' })
  }

})
//--delete post
app.delete('/post/:postId', async (req, res) => {
  const { id } = req.params
  const deletedPost = await db.deletePost(id)
  res.status(204).json(deletedPost)
  res.json({ message: 'Post deleted' })
  console.log('Post deleted')

})


//inicio del server
const port = 3001
app.listen(port, () => {
  //console.log(`Example app listening at http://localhost:${port}`)
  console.log(`Server listening at http://127.0.0.1:${port}`)

})

//validacion de implementacion de http 
app.use((req, res, next) => {
  res.status(501).send('error 501: metodo no implementad')
})