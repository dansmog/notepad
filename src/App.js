import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
  }

  showSidebar = (e) => {
    e.preventDefault();
    console.log(this);
    this.sidebar.classList.add("show");
  }

  hideSideBar = (e) => {
    e.preventDefault();
    this.sidebar.classList.remove("show");
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
          <section className="notes">

            <div className="notes__block">

              <div className="noteCard">
                <div className="noteCard--head">
                  <h4>Test Note!</h4>

                  <div className="noteCard--buttons">
                      <i className="icons icon-pencil"></i>
                      <i className="icons icon-close"></i>
                  </div>
                  
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio labouriosam disnissimos 
                  voluptable nam quia tempore, delectus, consectetur adipiscing elit. Odio l. 
                  Lorem ipsum dolor sit amet, consectetur adipiscing</p>
              </div>

              <div className="noteCard">
                <div className="noteCard--head">
                  <h4>Test Note!</h4>

                  <div className="noteCard--buttons">
                      <i className="icons icon-pencil"></i>
                      <i className="icons icon-close"></i>
                  </div>
                  
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio labouriosam disnissimos 
                  voluptable nam quia tempore, delectus, consectetur adipiscing elit. Odio l. 
                  Lorem ipsum dolor sit amet, consectetur adipiscing</p>
              </div>

              <div className="noteCard">
                <div className="noteCard--head">
                  <h4>Test Note!</h4>

                  <div className="noteCard--buttons">
                      <i className="icons icon-pencil"></i>
                      <i className="icons icon-close"></i>
                  </div>
                  
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio labouriosam disnissimos 
                  voluptable nam quia tempore, delectus, consectetur adipiscing elit. Odio l. 
                  Lorem ipsum dolor sit amet, consectetur adipiscing</p>
              </div>

            </div>
            
          </section>
          <aside className="sidebar" ref={ref => this.sidebar = ref}>
            <div className="form--contain">
                <form>
                  <div className="form--header">
                    <h3>Add New Note</h3>
                    <i className="icons icon-close" onClick={ this.hideSideBar }></i>
                  </div>
                  <div className="form-group">
                    <label htmlFor="note-title"></label>
                    <input type="text" name="note-title" placeholder="title"/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="note-text"></label>
                    <textarea name="note-text" placeholder="note"></textarea>
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
