import { useState } from 'react';
import './App.css';
import axios from 'axios'

function App() {
  const [note, setNote] = useState('')
  const [title, setTitle] = useState('')

  const addNote = () => {
    axios.post('http://localhost:4747/api/note', {note, title})
      .then(res => console.log(res.data))
  }

  return (
    <div className="App"> 
        <input placeholder='title' onChange={e => setTitle(e.target.value)}/>
        <input placeholder='note' onChange={e => setNote(e.target.value)}/>
        <button onClick={() => addNote()}>Add note</button>
    </div>
  );
}

export default App;
