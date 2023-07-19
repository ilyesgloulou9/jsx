import React from 'react'
import './App.css';
import ProfilePage from './profiles/photoprofile';
import FullName from './profiles/fullName';

import Adress from './profiles/Adress';



function App() {
  return (
    <div className="container">
     <ProfilePage/>
     <FullName/>
     <Adress/>
    </div>
  );
}

export default App;
