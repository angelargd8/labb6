
//se usa este en vez del otro proque hay uno que json que define elcoso y es: import express from 'express';
//const express = require('express'); //aca installamos express
//const app = express();
const port = 3001;
//const db = require('./db.js');

//uso esto xq lo otro eslint no me dejo :(
import express from 'express';
const app = express();
import * as db from './db.js';


app.get('/', (req, res) => {
  res.send('Hello World from Express!');
  console.log('Hello World from Express!');
});




app.use(express.json())
//--get all posts
app.get('/posts', async (req, res) => {
  const posts = await db.getAllPosts()
  res.json(posts)
  res.status(200).json(posts);
  console.log('posts', posts);
})

//--create post
app.post('/posts', async (req, res) => {
  try{
    const { title, content, titulo, descripcion, imagen } = req.body
    const newPost = await db.createPost(title, content, titulo, descripcion, imagen)
    res.json({ message: 'Post created' })
    res.status(200).json(newPost);

    console.log('Post created')
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
  
})

//-get post by id
app.get('/posts/:postId', async (req, res) => {
  const { id } = req.params;
  const post = await db.getPostId(id)
  res.status(200).json(post);
  //console.log('posts', posts);
})

//--update post
app.put('/posts/:postId', async (req, res) => {
  const { id } = req.params;
  const { title, content, titulo, descripcion, imagen } = req;
  const updatedPost = await db.updatePost(id, title, content, titulo, descripcion, imagen)
  if (!updatedPost) {
    res.status(400).json({ message: 'Post not found' })
  } else {
    res.status(200).json(updatedPost);
    res.json({ message: 'Post updated' })
  }

})
//--delete post
app.delete('/post/:postId', async (req, res) => {
  const { id } = req.params;
  const deletedPost = await db.deletePost(id)
  res.status(204).json(deletedPost);
  res.json({ message: 'Post deleted' })
  console.log('Post deleted')

})


app.listen(port, () => {
  //console.log(`Example app listening at http://localhost:${port}`);
  console.log(`Server listening at http://127.0.0.1:${port}`);

});
