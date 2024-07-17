export const Usuario = (props) => {
    //console.log(props)

    return <div>
        <h1>Continente: {props.continente}</h1>
        <p>Pais: {props.pais}</p>
        <p>Ciudad: {props.ciudad}</p>
        <hr />
    </div>
}

//export default Usuario; De esta forma tambien se puede exportar un archivo