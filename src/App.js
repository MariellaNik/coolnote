import "./App.css";
import { useState, useEffect } from 'react';

function App() {
  return (
    <div className="App">
      <div className="box">
        <div className="field">
          <div className="control">
            <textarea className="textarea is-large" placeholder="Notes..." />
          </div>
        </div>
        <button className="button is-large is-primary is-active">Save</button>
        <button className="button is-large">Clear</button>
      </div>
    </div>
  );
}


function App() {
  const [note, setNote] = useState('');

  useEffect(() => {
    const savedNote = localStorage.getItem('note');
    if (savedNote) {
      setNote(savedNote);
    }
  }, []);

  const handleNoteChange = (event) => {
    setNote(event.target.value);
  };

  const handleSaveNote = () => {
    localStorage.setItem('note', note);
  };

  const handleResetNote = () => {
    setNote('');
    localStorage.removeItem('note');
  };

  return (
    <div className="App">
      <textarea value={note} onChange={handleNoteChange} />
      <button onClick={handleSaveNote}>Save</button>
      <button onClick={handleResetNote}>Reset</button>
    </div>
  );
}

export default App;

export default App;
