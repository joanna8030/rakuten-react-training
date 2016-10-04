import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'react-bootstrap';
import MemberTable from './Member_table';
import MyLargeModal from './Modal';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      members: [{ ID: 'A01', Name: 'Giacomo Guilizzoni', Age: '37', Address: 'Peldi', Sex: 'male', Is_update: 'false' },
                { ID: 'A02', Name: 'Marco Botton', Age: '15', Address: 'Address', Sex: 'male', Is_update: 'false' }],
      lgShow: false
    };
    this.handleDrop = this.handleDrop.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }
  handleDrop(ID) {
    var members = this.state.members;
    members = this.state.members.filter(function(member) {
      return member.ID !== ID;
    });
    this.setState({ members });
  }
  handleEdit(ID) {
    var i;
    var members = this.state.members;
    for (i = 0; i < members.length; i + 1) {
      if (members[i].ID === ID) {
        members[i].Is_update = 'true';
      }
    }
    this.setState({ members });
    return members;
  }
  render() {
    const lgClose = () => this.setState({ lgShow: false });
    return (
      <div>
        <Button bsStyle='primary' onClick={() => this.setState({ lgShow: true })}>New</Button>
        <MemberTable members={this.state.members} handleDrop={this.handleDrop} handleEdit={this.handleEdit} />
        <MyLargeModal show={this.state.lgShow} onHide={lgClose} />
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('app'));
