import React, {useContext, useEffect} from 'react'
import NoteContext from '../context/notes/noteContext'

export default function About() {
  const a = useContext(NoteContext)
  console.log(a);

  useEffect(() => {
    a.update();
  },[])
  return (
    <div>
      <h1>this is About {a.state.name} and he is {a.state.class}</h1>
    </div>
  )
}
