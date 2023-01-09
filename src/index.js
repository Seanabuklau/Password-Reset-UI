import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

// React Components
import Label from './components/Label'
import Main from './components/Main'

const App = () => {

    return (
        <div className='container'>
            <Label/>
            <Main/>
        </div>
    )
  }

ReactDOM.render(<App /> , document.querySelector('#root'));