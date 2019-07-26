import React from 'react'
import {useState} from 'react'
import {Provider, useStore} from 'reto'



// function FooStore(initial = 1) {
//   const [counter, setCounter] = useState(initial)
function FooStore(initial) {
  const [counter, setCounter] = useState(initial)
  return {
    counter,
    setCounter
  }
}

export function WithInitial() {
  return (
    <Provider of={FooStore} args=[]>
      <App/>
    </Provider>
  )
}

function App() {
  const fooStore = useStore(FooStore)
  function changeStore() {
    fooStore.setCounter(fooStore.counter + 1)
  }
  return (
    <div>
      <p>{fooStore.counter}</p>
      <button onClick={changeStore}>Change</button>
    </div>
  )
}
