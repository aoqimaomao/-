import React from 'react';

class Modular extends React.Component {
   render() {
      return (
          <div className="draggable"  style={{display:"inline-block",padding:"1rem"}}>
             <div id="modularImg" className="part" style={{ width: '142px', height: '110px', background: '#aaa'}}>
                <img src={this.props.url} style={{ width: '142px', height: '110px'}}/>
             </div>
             <div>
                <h3 style={{fontSize:"1.4rem",fontWeight:"600",textAlign:"center",lineHeight:"3.2rem"}}>{this.props.title}</h3>
                 <span className="edit">
                     <i className="icon fa fa-pencil-square-o" style={{marginLeft:"0"}}></i>
                     <i className="icon fa fa-trash-o"></i>
                 </span>

             </div>
          </div>

      );
   }
}

export default Modular;