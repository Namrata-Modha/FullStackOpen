import { useState } from 'react'
import Note from './components/Note'

const App = (props) => {
  const [notes, setNotes] = useState(props.notes) // State for the list of notes
  const [newNote, setNewNote] = useState('') // State for the new note input
  const [showAll, setShowAll] = useState(true) // State to toggle between showing all notes or only important ones

  const addNote = (event) => {
    event.preventDefault()
    // Create a new note object
    const noteObject = {
      content: newNote, // use the current value of newNote
      important: Math.random() < 0.5, // randomly assign importance
      id: notes.length + 1, // assign a new id
    }

    setNotes(notes.concat(noteObject)) // Add the new note to the notes array
    setNewNote('') // Clear the input field
  }
  // Handle input change
  const handleNoteChange = (event) => {
    setNewNote(event.target.value) // Update newNote state with input value
  }

  const notesToShow = showAll ? notes : notes.filter(note => note.important) // Determine which notes to show based on showAll state

  return (
    <div>
      <h1>Notes</h1>

      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all'}
        </button>
      </div>

      <ul>
        {notesToShow.map(note =>
          <Note key={note.id} note={note} /> // Render each note using the Note component
        )}
      </ul>
      {/* {notesToShow.length === 0 && <p>No notes to display</p>} */}
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">save</button>
      </form>
    </div>
  )
}

export default App
