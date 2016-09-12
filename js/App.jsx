import React from 'react';
//var BS = require('react-bootstrap');

class App extends React.Component {
   render() {
      return (
         <div  id={this.props.id} style={{width:'20%',height:'25%',background:'#fff',float:"left"}}></div>
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