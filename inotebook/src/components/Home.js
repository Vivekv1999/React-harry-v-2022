import React, { useContext } from 'react'
import noteContext from '../Context/notes/noteContext'
import Addnote from './Addnote'
import Notes from './Notes'

export default function Home(props) {
  const {showAlert}=props

  return (
    <>
      <Notes showAlert={showAlert} />

    </>

  )
}
