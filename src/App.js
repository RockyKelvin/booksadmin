import React from 'react'
import './App.css';
import Booksadmin from './pages/booksadmin/booksadmin'

class App extends React.Component{
    render(){
        return <div className="App">
            <h1>图书管理</h1>
            <Booksadmin />
        </div>
    }
} 
export default App;