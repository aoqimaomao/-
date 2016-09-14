import React from 'react';
//import AlertDismissable from './edit.jsx';

class Modular extends React.Component {
   render() {
      return (
          <div className="draggable"  style={{display:"inline-block",padding:"1rem",position:"relative"}}>
             <div id="modularImg" className="part" style={{width: '142px', height: '110px', background: '#aaa'}}>
                <img src={this.props.url} style={{ width: '100%', height: '100%'}}/>
                 <span className="edit">
                     <button className="icon" style={{marginLeft:"0"}}><i className="fa fa-pencil-square-o"></i></button>
                     <button className="icon" ><i className="fa fa-trash-o"></i></button>
                 </span>

             </div>
             <div className="heading">
                <h3 style={{fontSize:"1.4rem",fontWeight:"600",textAlign:"center",lineHeight:"3.2rem"}}>{this.props.title}</h3>

                <div id="dad"></div>
             </div>
          </div>

      );
   }
}

export default Modular;