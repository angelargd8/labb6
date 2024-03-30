function GetInfo() {
    const [data, setData] = React.useState([])
    const [loading, setLoading] = React.useState(true)


    async function llamarAPI(){
        let info = await fetch('http://localhost:3000/posts/info')
        let laInfo = await info.json()
        //console.log(laInfo);
        setData(laInfo)
        setLoading(false) 
    }

     //reaccionar a un cambio
     React.useEffect(() => {llamarAPI()}, []);

    return(
    <div class="info">
        <br></br>
        {loading ? (
            <div class="spinner"></div> 
        ) : (
            <ul>
                {data.map( elemento => {
                    if (elemento.imagen == ""){                        
                            return(
                                <div  class="info2">
                                    <h3>{elemento.title}</h3>
                                    <p>{elemento.content}</p>
                                    
                                </div>
                            );                       

                    }else{
                        if (elemento.id ==5){
                            return(

                                <div class="info2">
                                    <h3>Dicotomías /  preferencias de personalidad</h3>
                                    <p>Jung estableció 8 dicotomías, siendo estas:</p>
                                    <img src="https://i.ibb.co/G2Zt3FS/dicotomias.png" alt="imagen"  height="400"></img>                                    
                                    <br></br>

                                    <h3>{elemento.title}</h3>
                                    <p>{elemento.content}</p>
                                    <img src={elemento.imagen} alt="imagen"  height="400"></img>
                                    <p>{elemento.descripcion}</p>
                                    
                                </div>
                            );
                            
                        }else{
                            return(
                                <div class="info2">
                                    <h3>{elemento.title}</h3>
                                    <p>{elemento.content}</p>
                                    <img src={elemento.imagen} alt="imagen"  height="500"></img>
                                    
                                </div>
                            );

                        }
                
                    }
                                     
                    
                })}
            </ul>
        )}

            
    </div>
    )
} 
ReactDOM.render(<GetInfo />, document.getElementById('master'));