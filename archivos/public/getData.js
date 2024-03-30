function GetData() {
    const [data, setData] = React.useState([])
    const [loading, setLoading] = React.useState(true)

    async function llamarAPI(){
        let info = await fetch('http://localhost:3000/posts/f')
        let laInfo = await info.json()
        //console.log(laInfo);
        setData(laInfo)
        setLoading(false) 
    }

     //reaccionar a un cambio
     React.useEffect(() => {llamarAPI()}, []);

    return(
    <div class="data">
        <h1>Las funciones cognitivas:</h1><br></br>
        {loading ? (
            <div class="spinner"></div> 
        ) : (
            <ul>
                {data.map( elemento => {
                    return(
                        <div class="data2">
                            <h3>{elemento.funcion}</h3>
                            <p>{elemento.informacion}</p>
                            <br></br>
                        </div>
                    );
                })}
            </ul>
        )}
    </div>
    )
} 
ReactDOM.render(<GetData />, document.getElementById('master'));