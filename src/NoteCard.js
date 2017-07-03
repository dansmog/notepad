import React, { Component } from 'react';

class NoteCard extends Component {
    render(){
        if(this.props.notes.length === 0){
            return(
                <div style={{"textAlign": "center"}}>
                    <h1 style={{"marginTop": "200px", "textAlign": "center"}}>No Note Added Yet</h1>
                    <button style={{"width": "150px"}} onClick={this.props.showSideBar}><i className="icons icon-plus"></i>New Note</button>
                </div>
            )
        }else{
           return(
                <section className="notes">
                    <div className="notes__block">
                    {
                        this.props.notes.map( (note, i) => {
                            return(
                                
                                    <div className="noteCard" key={i}>
                                        <div className="noteCard--head">
                                            <h4>{note.title}</h4>

                                            <div className="noteCard--buttons">
                                                <i className="icons icon-pencil"></i>
                                                <i className="icons icon-close"></i>
                                            </div>
                                            
                                        </div>
                                        <p>{note.note}</p>
                                    </div>
                                
                            )
                        }).reverse()
                    }
                    
                   </div>
                </section>
            )
        }
        
    }
}


export default NoteCard;