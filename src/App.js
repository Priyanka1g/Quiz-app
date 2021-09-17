import React from 'react'
import { Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar/Navbar'
import Quizzes from './components/Quizzes'

function App() {
  return (
   <div>
    <Switch>
    <Route path='/' exact>
     <Navbar/>
     </Route>
    <Route path='/quiz' exact>
    <Quizzes/>
    </Route>
    </Switch>
    </div>
  )
}

export default App
