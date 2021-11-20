import React from 'react';
import ReactDOM from 'react-dom';
import Firebase, { FirebaseContext } from './components/Firebase';
import App from './components/app/App';

ReactDOM.render(
  // <React.StrictMode>
    <FirebaseContext.Provider value={new Firebase()} >
      <App />
    </FirebaseContext.Provider>,
  // </React.StrictMode>,
  document.getElementById('root')
);
