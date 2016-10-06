import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'react-bootstrap';
import MemberTable from './member_table';
import InsertModal from './insert-modal';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      members: [{ id: 'A01', name: 'Giacomo Guilizzoni', age: '37', address: 'Peldi', sex: 'male', isUpdate: 'false' },
                { id: 'A02', name: 'Marco Botton', age: '15', address: 'Address', sex: 'male', isUpdate: 'false' }],
      lgShow: false
    };
    this.handleAddNewRow = this.handleAddNewRow.bind(this);
    this.handleDrop = this.handleDrop.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.lgClose = this.lgClose.bind(this);
  }

  handleAddNewRow(addMember) {
    var members = this.state.members;
    members.push(addMember);
    this.setState({ members });
  }

  handleDrop(id) {
    var members = this.state.members.filter(member => member.id !== id);
    this.setState({ members });
  }

  handleEdit(editMember, id) {
    var members = this.state.members.map((member) => {
      var _member = member;
      if (_member.id === id) {
        _member.name = editMember.name;
        _member.age = editMember.age;
        _member.address = editMember.address;
        _member.sex = editMember.sex;
        _member.isUpdate = editMember.isUpdate;
      }
      return _member;
    });
    this.setState({ members });
  }

  lgClose() {
    this.setState({ lgShow: false });
  }

  render() {
    return (
      <div>
        <Button bsStyle='primary' onClick={() => this.setState({ lgShow: true })}>New</Button>
        <MemberTable members={this.state.members} handleDrop={this.handleDrop} handleEdit={this.handleEdit} />
        <InsertModal show={this.state.lgShow} onHide={this.lgClose} handleAddNewRow={this.handleAddNewRow} />
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('app'));
