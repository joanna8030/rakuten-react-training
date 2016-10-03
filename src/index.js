import React from 'react';
import ReactDOM from 'react-dom';
import Modal from './Modal';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    var democontent = <div id='content'>some demo text as content for modal 1 passed as variable containing HTML</div>;
    return (
      <div>
        <button onClick="">New</button>
        <Modal />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
