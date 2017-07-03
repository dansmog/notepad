import React, { Component } from 'react';
import NoteCard from './NoteCard';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      notes: []
    }
  }

  showSidebar = (e) => {
    e.preventDefault();
    console.log(this);
    this.sidebar.classList.toggle("show");
  }

  hideSideBar = (e) => {
    e.preventDefault();
    this.sidebar.classList.remove("show");
  }

  addNote = (e) => {
    e.preventDefault();

    const note = {
      title: this.refs.title.value,
      note: this.refs.note.value
    }

    const newNotes = Array.from(this.state.notes);
    newNotes.push(note);
    this.setState({ notes: newNotes })



    //clear form after adding
    this.refs.title.value = '';
    this.refs.note.value = '';
  }
  render(){

    return(
      <section className="wrapper">
          <header className="main-header">
             <div className="main-header__block">
                <h1>Notepad</h1>
                <nav>
                  <a href="#hk"  onClick={ this.showSidebar }><i className="icons icon-plus"></i>New note</a>
                  <a href="#g"><i className="icons icon-login"></i>Login</a>
                </nav>
             </div>
              
          </header> 
          <NoteCard notes={this.state.notes} showSideBar={this.showSidebar}/>
          <aside className="sidebar" ref={ref => this.sidebar = ref}>
            <div className="form--contain">
                <form onSubmit={ this.addNote }>
                  <div className="form--header">
                    <h3>Add New Note</h3>
                    <i className="icons icon-close" onClick={ this.hideSideBar }></i>
                  </div>
                  <div className="form-group">
                    <label htmlFor="note-title"></label>
                    <input type="text" name="note-title" placeholder="title" ref="title"/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="note-text"></label>
                    <textarea name="note-text" placeholder="note" ref="note"></textarea>
                  </div>

                  <button>Add New Note</button>
                </form>
            </div>
              
          </aside>

          

      </section>
    )
  }
}

export default App;
