import { useState, useEffect } from 'react';
import 'bulma/css/bulma.min.css';

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
    <div className="section">
      <div className="container">
        <div className="columns">
          <div className="column">
            <div className="field">
              <label className="label">Notes</label>
              <div className="control">
                <textarea className="textarea is-large" value={note} onChange={handleNoteChange} placeholder="Enter your notes here"></textarea>
              </div>
            </div>
            <div className="buttons">
              <button className="button is-primary is-large" onClick={handleSaveNote}>Save</button>
              <button className="button is-danger is-large" onClick={handleResetNote}>Reset</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
