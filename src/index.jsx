import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'react-bootstrap';
import MemberTable from './member-table';
import ModalDialog from './modal';
import Const from './const';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      members: [{ id: 'A01', name: 'Giacomo Guilizzoni', age: '37', address: 'Peldi', sex: 'male', isUpdate: false },
                { id: 'A02', name: 'Marco Botton', age: '15', address: 'Address', sex: 'male', isUpdate: false }],
      lgShow: false,
      triggeredBy: Const.New,
      member: {}
    };
    this.handleAddRow = this.handleAddRow.bind(this);
    this.handleDropRow = this.handleDropRow.bind(this);
    this.handleEditRow = this.handleEditRow.bind(this);
    this.lgClose = this.lgClose.bind(this);
    this.handleModalOpen = this.handleModalOpen.bind(this);
  }

  handleAddRow(addMember) {
    var members = this.state.members;
    members.push(addMember);
    this.setState({ members });
  }

  handleDropRow(id) {
    var members = this.state.members.filter(member => member.id !== id);
    this.setState({ members });
  }

  handleEditRow(editMember, id) {
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

  handleModalOpen(triggeredBy, member) {
    this.setState({ lgShow: true, triggeredBy, member });
  }

  render() {
    return (
      <div>
        <Button bsStyle='primary' onClick={() => this.handleModalOpen('New Row', {})}>New</Button>
        <MemberTable
          members={this.state.members}
          onDropRow={this.handleDropRow}
          onEditRow={this.handleEditRow}
          onEditBtnClick={this.handleModalOpen}
        />
        <ModalDialog
          show={this.state.lgShow}
          onHide={this.lgClose}
          onAddRow={this.handleAddRow}
          title={this.state.triggeredBy}
          member={this.state.member}
          onEditRow={this.handleEditRow}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
