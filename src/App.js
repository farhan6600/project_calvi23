
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import UploadComponent from './components/UploadComponent';
import FilesListComponent from './components/FilesListComponent';
import FileDetailsComponent from './components/FileDetailsComponent';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" exact component={UploadComponent} />
          <Route path="/files" component={FilesListComponent} />
          <Route path="/file/:id" component={FileDetailsComponent} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;





























// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
// src/App.js
// import React from 'react';
// // import { Switch, Route } from 'react-router-dom';

// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// // import { Switch, Route } from 'react-router-dom';
// import UploadComponent from './components/UploadComponent';
// import FilesListComponent from './components/FilesListComponent';
// import FileDetailsComponent from './components/FileDetailsComponent';

// function App() {
//   return (
//     <BrowserRouter>
//       <div>
//         <Switch>
//           <Route path="/" exact component={UploadComponent} />
//           <Route path="/files" component={FilesListComponent} />
//           <Route path="/file/:id" component={FileDetailsComponent} />
//         </Switch>
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;


