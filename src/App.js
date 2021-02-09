import React from 'react';
import {NotesTable} from './components/NotesTable'
import './App.css';

function App() {
  return (
    <div className="App">
    <h3>My Notes</h3>
    <div style={{ maxWidth: '70%', margin: 'auto' }}>
     
      <NotesTable />
    </div>
  </div>

  );
}

export default App;
