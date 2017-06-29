import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render(){
    return(
      <section>
          <header className="main-header">
              <h1>Noted</h1>
              <nav>
                <a href="">Add New Note</a>
                <a href="">Login</a>
              </nav>
          </header> 
          <section className="notes">

          </section>
          <aside className="sidebar">
              <form>
                <div className="form-group">
                  <label htmlFor="note-title">Title:</label>
                  <input type="text" name="note-title" />
                </div>
                <div className="form-group">
                  <label htmlFor="note-text">Text:</label>
                  <textarea name="note" id="" cols="30" row="10"></textarea>
                </div>

                
              </form>
          </aside>
      </section>
    )
  }
}

export default App;
