import React from 'react';
import './App.css';
import Sidebar from './Sidebar'
import Chat from './Chat'
import { 
  BrowserRouter as Router,
  Switch ,
  Route
} from 'react-router-dom'

import Login from './components/Login'
import { useStateValue } from './StateProvider';

function App() {

  const [ {user} , dispatch] = useStateValue()

  return (
    <div className="app">

      {!user ? <Login />
      : (
          <div className="app__body">
          
            <Router>
              <Switch>
                
                <Route path = '/chats/:chatId'>
                  <Sidebar />   
                  <Chat />
                </Route>
                <Route path = '/'>
                  <Sidebar /> 
                  <Chat />
                </Route>
              </Switch>
            </Router>

          </div>
      )
      }

    </div>
  );
}

export default App;
