function PostData() {
    
    const [posts, setPost] = React.useState([])
    const [content, setContent] = React.useState('')
    const [title, setTitle] = React.useState('')
    const [descripcion, setDescripcion] = React.useState('')
    const [imagen, setImagen] = React.useState('')


    async function handleSubmit(event){
        event.preventDefault()
        const response = await fetch('http://localhost:3000/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({title, content, descripcion, imagen})
        })
        const newPost = await response.json()
        setPost(newPost)
        console.log(newPost)
    }


    return(
    <div>
        <form onSubmit={handleSubmit}>
            <label>
                Título:
                <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
            </label>
            <label>
                Contenido:
                <textarea value={content} onChange={e => setContent(e.target.value)} />
            </label>
            <label>
                Descripción:
                <textarea value={descripcion} onChange={e => setDescripcion(e.target.value)} />
            </label>
            <label>
                Imagen:
                <input type="text" value={imagen} onChange={e => setImagen(e.target.value)} />
            </label>
            <button type="submit">Enviar</button>
            
            
        </form>
      
        



        

    </div>
    )
} 

ReactDOM.render(<PostData />, document.getElementById('master'));