const express = require('express')
const cors = require('cors')
const db = require('./db.js')

const swaggerUi = require('swagger-ui-express')
const yaml = require('js-yaml')
//para luego mandar la path al index
const path = require('path')
const app = express()

//middleware para json Aca es donde se usa los cors
app.use(cors());

app.use(express.json())

//cargar el archivo YAML que describe endpoints
const swaggerDocument = yaml.load('./swagger.yaml')
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  //res.send('Hello World from Express!')
  console.log('Hello World from Express!')
})


app.get('/index.html', (req, res) => {
  //mandarle aqui el index
  res.sendFile(path.join(__dirname, './index.html'))
  console.log('Hello World from Express!')
})


app.get('/funciones', (req, res) => {
  res.send('Hello World from Express!')
})

app.get('/blogs', (req, res) => {
  res.send('Hello World from Express!')
})

app.get('/type', (req, res) => {
  res.send('Hello World from Express!')
})


//--get all posts
app.get('/posts/info', async (req, res) => {
  const posts = await db.getAllPosts()
  if(posts.length === 0) {
    res.status(200).json({message: 'Empty state: No posts found'})
  }else{
    res.status(200).json(posts)
  } 
  console.log('posts', posts)
})


//--get all posts from  functions
app.get('/posts/f', async (req, res) => {
  const posts = await db.getAllPostsFunctions()
  if(posts.length === 0) {
    res.status(200).json({message: 'Empty state:No posts found'})
  }else{
    res.status(200).json(posts)
  } 
  console.log('posts', posts)
})

//--create post
app.post('/posts', cors({ origin: 'http://127.0.0.1:3000' }), async (req, res) => {
  try{
    console.log(req)
    const { title, content, descripcion, imagen } = req.body
    const newPost = await db.createPost(title, content, descripcion, imagen)
    res.json({ message: 'Post created' })//
    res.status(200).json(newPost)

    console.log('Post created')
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})


//--create post 2
app.post('/posts/p', cors({ origin: 'http://127.0.0.1:3000' }), async (req, res) => {
  try{
    console.log(req)
    const { funcion, informacion } = req.body
    const newPost = await db.createPost2(funcion, informacion )
    res.json({ message: 'Post created' })//
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
const port = 3000
app.listen(port, () => {
  //console.log(`Example app listening at http://localhost:${port}`)
  console.log(`Server listening at http://127.0.0.1:${port}`)
})
//validacion de implementacion de http 
app.use((req, res) => {
  res.status(501).send('error 501: metodo no implementad')
})