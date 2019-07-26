import React from 'react'
import {useState} from 'react'
import {Provider, useStore} from 'reto'

function BarStore() {
  return {
    label: 'bar'
  }
}

function FooStore() {
  const barStore = useStore(BarStore)
  return {
    barStore,
    label: 'foo'
  }
}


export function Dependence() {
  return (
    <Provider of={BarStore}>
      <Provider of={FooStore}>
        <App/>
      </Provider>
    </Provider>
  )
}

function App() {
  const fooStore = useStore(FooStore)
  return (
    <div>
      <p>{fooStore.label}</p>
      <p>{fooStore.barStore.label}</p>
    </div>
  )
}
