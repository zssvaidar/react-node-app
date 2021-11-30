import './App.css';
 
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         > fef
//           Learn React
//         </a>

        
//       </header>
//     </div>
//   );
// }

// export default App;

import * as React from 'react';
import Layout from './components/Layout';
import { Route } from 'react-router';
import { Login } from './components/Login';

import { connect } from 'react-redux';
import { withRouter } from 'react-router';

class App extends React.Component {
  render() {
    return (
      <div>
        <Layout>
          <Route path='/login' component={Login} />
        </Layout>
      </div>

    );
  }
}




function mapStateToProps(state: { alert: {} }) {
  const { alert } = state;
  return {
    alert
  };
}



const connectedApp = withRouter(connect(mapStateToProps)(App));

export { connectedApp as App };
