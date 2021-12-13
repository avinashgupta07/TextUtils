// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Tables from './components/Tables';
import { useState } from 'react';
import About from './components/About';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


function App() {
  const [darkMode, setdarkMode] = useState('light')

  const removeClass=()=>{
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-light')

  }

  const toggleMode = (cls) => {
    removeClass()
    document.body.classList.add('bg-'+cls)
    if (darkMode === 'light') {
      setdarkMode('dark')
      document.body.style.backgroundColor = 'grey'
    }
    else {
      setdarkMode('light')
      document.body.style.backgroundColor = 'white'
    }
  }
  return (
    <Router>
    {/* <> */}
      <Navbar aboutText="About" mode={darkMode} toggleMode={toggleMode} />
      <div className="container my-3">
        <Switch>
          <Route exact path='/about'>
          <About/>
          </Route>
          <Route exact path="/">
          <Tables heading="Enter the text to analyse" mode={darkMode}/>
          </Route>
        </Switch>
      </div>
      </Router>
  )
}

export default App;
