import React from 'react';
import ReactDOM from 'react-dom';
import Modal from './Modal';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      members: [{ ID: 'A01', Name: 'Giacomo Guilizzoni', Age: '37', Address: 'Peldi', Sex: 'male', Is_edit: 'false' }]
    };
  }
  render() {
    var democontent = <div id='content'>modal</div>;
    return (
      <div>
        <Modal openbtn='true' opentext='open demo modal' content={democontent} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
