import React from 'react';
import { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import CreateUserView from './views/user/CreateUserView';
import ListRecordsView from './views/supabase/ListRecordsView';
import Home from './pages/home';


function App() {
  return (
    <>
      <div>
      <ListRecordsView />
      </div>
    </>
  )
}

export default App