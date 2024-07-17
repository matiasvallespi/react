import { useState, useEffect } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import { Usuario } from './usuario';

function App() {
  const lista = [
    {
      nombre: "Matias",
      apellido: "Vallespi",
      edad: 27,
      ciudad: "Buenos Aires"
    },
    {
      nombre: "Ana",
      apellido: "González",
      edad: 35,
      ciudad: "Madrid"
    },
    {
      nombre: "John",
      apellido: "Smith",
      edad: 30,
      ciudad: "New York"
    }
  ];

  const [numero, setNumero] = useState(0)
  const [estado, setState] = useState(false)
  const increase = () => {
    setNumero(numero + 1)
    setState(!estado)
  }
  const decrease = () => {
    setNumero(numero - 1)
    setState(!estado)
  }
  const renderList = lista.map(objeto => (
    <tr>
      <td className='border border-slate-300'>{objeto.nombre}</td>
      <td className='border border-slate-300'>{objeto.apellido}</td>
      <td className='border border-slate-300'>{objeto.edad}</td>
      <td className='border border-slate-300'>{objeto.ciudad}</td>
    </tr>
  ));


  const [number, setNumber] = useState(0)
  const [show, setShow] = useState(true)

  const suma = () => {
    setNumber(number + 1)
    setShow(!show)
    setText("Estas sumando")
  }

  const resta = () => {
    setNumber(number - 1)
    setShow(!show)
    setText("Estas restando")
  }

  const [text, setText] = useState("")

  let nombres = ["MATIAS", "PABLO", "NICOLAS", "GONZALO", "PEDRO", "OLIVER", "ENZO", "LEANDRO", "EMILIANO", "LIONEL"]
  let edades = ["27", "33", "28", "27", "35", "23", "24", "29", "32", "36"]
  let clubes = ["C.A.HURACAN", "RACING CLUB", "C.A.HURACAN", "RIVER PLATE", "WATFORD", "PERU", "CHELSEA", "ROMA", "ASTON VILLA", "INTER MIAMI"]

  const nombre = <h1>NOMBRE: {nombres[number]}</h1>
  const edad = <p>EDAD: {edades[number]}</p>
  const nacionalidad = <h4>CLUB: {clubes[number]}</h4>

  const usuario = <div>NOMBRE: {nombres[number]} | EDAD: {edades[number]} | CLUB: {clubes[number]} </div>

  const NombreComponente = () => {
    return <div>{usuario} {usuario}</div> //Un componente debe escribirse como CamelCase (el componente tiene elementos html)
  }

  const [testo, setTesto] = useState("")

  const handleChange = (evento) => setTesto(evento.target.value)

  const [mostrar, setMostrar] = useState(true)

  const mostro = () => {
    setMostrar(!mostrar)
  }

  const [contador, setContador] = useState(0)
  // const constadors = () => {
  //   setContador(contador+1)
  // }
  useEffect(()=>{
    setContador(contador+2)
    return setContador(contador-1)
  }, [])
  

  return (<div>

    <button onClick={suma}>Sumar</button>
    <button onClick={resta}>Restar</button>
    <p>{show === true ? number : "any"}</p>
    <p>{text}</p>

    {nombre}
    {edad}
    {nacionalidad}

    {mostrar ? <Usuario /> : ""}
    <button onClick={mostro}>{mostrar ? "Ocultar" : "Mostrar"}</button>

    <NombreComponente />

    <input className='border-2 border-black rounded' onChange={handleChange} type="text" />
    <p>{testo}</p>

    <Usuario continente="America" pais="Brasil" ciudad="San Pablo" />

    <hr />

    <p>{contador}</p>
    <button className='p-2 border-2 border-blue-400 rounded text-bold' onClick={useEffect}>CLICKEA!!!</button>
























    <hr />

    <p>Escriba su nombre:</p>
    <input onChange={handleChange} className='border-2 border-black rounded' type="text" />
    <button onClick={increase} className='m-2 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white font-bold py-2 px-4 rounded shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-300 ease-in-out'>Aumentar</button>
    <button onClick={decrease} className='m-2 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white font-bold py-2 px-4 rounded shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-300 ease-in-out'>Decrementar</button>
    <p>{numero !== 0 ? numero : "0"}</p>
    <p>{estado === false ? "False" : "True"}</p>
    <table className='class="border-separate border border-slate-400'>
      <thead>
        <th className='border border-slate-300'>NOMBRE</th>
        <th className='border border-slate-300'>APELLIDO</th>
        <th className='border border-slate-300'>EDAD</th>
        <th className='border border-slate-300'>CIUDAD</th>
      </thead>
      <tbody>
        {renderList}
      </tbody>
    </table>

  </div>
  )
}

export default App
