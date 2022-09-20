import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import { diffWords, diffLines } from 'diff';

function App() {
  const txtHtml = `
  
  <div className="App">
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>
      Edit <code>src/App.tsx</code> and save to reload.
    </p>
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a>
  </header>
</div>`;

  const txtHtml2 = txtHtml.replace('Learn React', 'htmlDiffer test').trim();

  const diffResult = diffWords(txtHtml, txtHtml2);

  console.log(diffResult);
  console.log(txtHtml);

  return (
    <div className="App">
      <div style={{ display: 'flex', height: 'fit-content' }}>
        <p style={{ whiteSpace: 'pre-wrap', width: '30%', textAlign: 'left', border: '1px solid gray' }}>{txtHtml}</p>
        <p
          style={{
            whiteSpace: 'pre-wrap',
            width: '30%',
            textAlign: 'left',
            border: '1px solid gray',
            borderLeft: '0px',
            borderRight: '0px',
          }}
        >
          {txtHtml2}
        </p>
        <p style={{ whiteSpace: 'pre-wrap', width: '30%', textAlign: 'left', border: '1px solid gray' }}>
          {diffResult.map(({ value, added, removed }) => {
            if (added) {
              return <span style={{ backgroundColor: '#98FF98', padding: '0 2px' }}>{value}</span>;
            } else if (removed) {
              return <span style={{ backgroundColor: '#FF9898', padding: '0 2px' }}>{value}</span>;
            }
            return <span>{value} </span>;
          })}
        </p>
      </div>
    </div>
  );
}

export default App;
