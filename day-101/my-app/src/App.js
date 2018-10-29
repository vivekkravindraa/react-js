import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Table from './Table';
// import TableHeader from './Table';
// import TableBody from './Table';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

// class App extends Component {
//   render() {
//       return (
//           <div className="App">
//               <h1>Hello, React!</h1>
//           </div>
//       );
//   }
// }

// class App extends Component {
//   render() {
//     return (
//         <div className="container">
//             <Table />
//         </div>
//     );
//   }
// }

// Using SIMPLE COMPONENTS

// class App extends Component {
//     render() {
//         return (
//             <table>
//                 <TableHeader />
//                 <TableBody />
//             </table>
//         );
//     }
// }

// Using PROPS

class App extends Component {
    render() {
        const characters = [
            {
                'name': 'Charlie',
                'job': 'Janitor'
            },
            {
                'name': 'Mac',
                'job': 'Bouncer'
            },
            {
                'name': 'Dee',
                'job': 'Aspring actress'
            },
            {
                'name': 'Dennis',
                'job': 'Bartender'
            }
        ];

        return (
            <div className="container">
                <Table characterData={characters} />
            </div>
        );
    }
}

export default App;
