function GetData() {


    async function llamarAPI(){
        let info = await fetch('')
    }

    //reaccionar a un cambio
    //React.useEffect(() => {llamarAPI()}, []);

    return(
    <div>
        <h1>Blog</h1>
        <p>Este es un sitio web simple construido con React y Babel.</p>
    </div>
    )
} 