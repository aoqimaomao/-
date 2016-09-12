import React from 'react';
//var BS = require('react-bootstrap');

class App extends React.Component {
   render() {
      return (
         <div  id={this.props.id} className="part" style={{width:'20%',height:'25%'}}></div>
      );
   }
};
//
//const App = (
//    <BS.ButtonGroup>
//        <BS.Button>Left</BS.Button>
//        <BS.Button>Middle</BS.Button>
//        <BS.Button>Right</BS.Button>
//    </BS.ButtonGroup>
//);

export default App;