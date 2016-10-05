import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'react-bootstrap';
import MemberTable from './member_table';
import MyLargeModal from './Modal';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      members: [{ ID: 'A01', Name: 'Giacomo Guilizzoni', Age: '37', Address: 'Peldi', Sex: 'male', Is_update: 'false' },
                { ID: 'A02', Name: 'Marco Botton', Age: '15', Address: 'Address', Sex: 'male', Is_update: 'false' }],
      lgShow: false
    };
    this.handleAddNewRow = this.handleAddNewRow.bind(this);
    this.handleDrop = this.handleDrop.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }
  handleAddNewRow(addMember) {
    var members = this.state.members;
    members.push(addMember);
    this.setState({ members });
  }
  handleDrop(ID) {
    var members = this.state.members;
    members = this.state.members.filter(function(member, index) {
      if (member.ID === ID) {
        members.slice(index, 1);
      }
      return member.ID !== ID;
    });
    this.setState({ members });
  }
  handleEdit(editMember, ID) {
    var members = this.state.members;

    members = this.state.members.map(function(member, index) {
      if (member.ID === ID) {
        members[index].ID = editMember.ID;
        members[index].Name = editMember.Name;
        members[index].Age = editMember.Age;
        members[index].Address = editMember.Address;
        members[index].Sex = editMember.Sex;
        members[index].Is_update = editMember.Is_update;
      }
      return member;
    });
    this.setState({ members });
  }
  render() {
    const lgClose = () => this.setState({ lgShow: false });
    return (
      <div>
        <Button bsStyle='primary' onClick={() => this.setState({ lgShow: true })}>New</Button>
        <MemberTable members={this.state.members} handleDrop={this.handleDrop} handleEdit={this.handleEdit} />
        <MyLargeModal show={this.state.lgShow} onHide={lgClose} handleAddNewRow={this.handleAddNewRow} />
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('app'));
