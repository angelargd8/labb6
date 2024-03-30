function PostData2() {
    
    const [posts, setPost] = React.useState([])
    const [informacion, setInformacion] = React.useState('')
    const [funcion, setFuncion] = React.useState('')



    async function handleSubmit(event){
        event.preventDefault()
        const response = await fetch('http://localhost:3000/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({funcion, informacion})
        })
        const newPost = await response.json()
        setPost(newPost)
        console.log(newPost)
    }


    return(
    <div>
        <form onSubmit={handleSubmit}>
            <label>
                funcion:
                <input type="text" value={funcion} onChange={e => setFuncion(e.target.value)} />
            </label>
            <label>
                informacion:
                <textarea value={informacion} onChange={e => setInformacion(e.target.value)} />
            </label>
            
            <button type="submit">Enviar</button>
            
            
        </form>
      
        



        

    </div>
    )
} 

ReactDOM.render(<PostData2 />, document.getElementById('master'));