import React from 'react'
import {useState} from 'react'
import {Provider, useStore} from 'reto'

function FooStore() {
  const [counter, setCounter] = useState(1)
  return {
    counter,
    setCounter
  }
}

export function Simple() {
  return (
    <Provider of={FooStore}>
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
