import {memo} from 'react'
import React from 'react'

export function FooStore() {
  const [x, setX] = useState(initial)
  return {
    x,
    setX
  }
}

export const Simple = memo(function Simple() {

  return (
    <div>123</div>
  )
})
