import React from 'react'
import {useState} from 'react'
import {Provider, useStore} from 'reto'

function FooStore(label) {
  return {
    label
  }
}

export function MultiLevel() {
  return (
    <Provider of={FooStore} args={['A']}>
      <Display/>
      <Provider of={FooStore} args={['B']}>
        <Display/>
      </Provider>
    </Provider>
  )
}

function Display() {
  const fooStore = useStore(FooStore)
  return (
    <p>{fooStore.label}</p>
  )
}
