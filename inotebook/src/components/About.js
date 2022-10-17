import React, { useContext, useEffect } from 'react'
import noteContext from '../Context/notes/noteContext'

export default function About() {
  const a = useContext(noteContext)
  useEffect(() => {
    a.update()
  }, [])
  return (
    <div>
      <h1>about page {a.state.name} and he is in {a.state.class}</h1>
    </div>
  )
}
