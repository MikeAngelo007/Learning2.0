/* const element = document.createElement('h1')

element.innerText='Hello Word Cruel:::'

const container= document.getElementById('root')

container.appendChild(element)

import React from 'react'
import ReactDOM from 'react-dom'

//const element = <h1>Hello React...or</h1>
//const name = 'Mike'
const usuario = {
  firstname: 'CHDLM',
  lastname: '2.0',
  avatar: 'https://www.show.news/__export/1567201752167/sites/debate/img/2019/08/30/gato_png_crop1567201738546.jpg_423682103.jpg'
}

function getName(user){
  if(user){
    return `${user.firstname} ${user.lastname}`
  }
  return 'Extraño ome'
}

function getGreeting(user){
 if(user){
 return <h1>Hola {getName(user)}</h1>
 }
return  <h2>Alerta {getName(user)}</h2>
}


//const element = <div>{getGreeting(usuario)}</div>

//const element = <img src={usuario.avatar} />

const element=(
  <div>
    {getGreeting(usuario)}
    <img src={usuario.avatar} />
  </div>
)
const container = document.getElementById('root')

//ReactDOM.render(_QUE_,_DONDE_)
ReactDOM.render(element,container) */


import React from 'react'
import ReactDom from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import App from './components/App'

const container = document.getElementById('root')
ReactDom.render(<App />,container)