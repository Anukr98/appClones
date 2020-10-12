import React from 'react';
import './App.css';
import Header from './components/header'
import SideBar from './components/sidebar'
import Feed from './components/Feed'
import Widgets from './components/Widgets'
import Login from './components/Login'
import { useStateValue } from './StateProvider'

function App() {

  const [{ user } , dispatch] = useStateValue()
  
  return (
    <div className="App">
      
      {!user ? ( 
        <Login />
      ) : (

        <>
          <Header />
          <div className="app__body">
            <SideBar />
            <Feed />
            <Widgets />
          </div>
       </>

      )}

    </div>
  );
}

export default App;
