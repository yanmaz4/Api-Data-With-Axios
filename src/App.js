import React from 'react'
import axios from 'axios'
import { useState } from 'react'

export default function App() {
  const [qoute, setQoute] = useState('')
  const getQoute = () => {
    axios.get ('http://api.quotable.io/random')
    .then(res => {
console.log(res.data.content)
setQoute(res.data.content)
    }).catch(err =>{
      console.log(err)

    })
  }
  return (
    <div>
<div className='App'>

<button onClick={getQoute}>Get Qoute</button>
{qoute && <p>{qoute} </p> }
</div>
    </div>
  )
}