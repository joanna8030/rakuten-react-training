import React from 'react';
import { Table, thead, tr, th, tbody } from 'react-bootstrap';
import Member from './member-row';


export default class MemberTable extends React.Component {
  constructor(props) {
    super(props);
    this.handleDrop = this.handleDrop.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleModal = this.handleModal.bind(this);
  }

  handleDrop(id) {
    this.props.handleDrop(id);
  }

  handleEdit(editMember, id) {
    this.props.handleEdit(editMember, id);
  }

  handleModal(triggeredBy, member) {
    this.props.handleModal(triggeredBy, member);
  }

  render() {
    var members = this.props.members.map(member =>
      (
      <Member
        key={member.id}
        id={member.id}
        name={member.name}
        age={member.age}
        address={member.address}
        sex={member.sex}
        isUpdate={member.isUpdate}
        handleDrop={this.handleDrop}
        handleEdit={this.handleEdit}
        handleModal={this.handleModal}
      />)
    );
    return (
      <Table responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
            <th>Sex</th>
            <th>Operation</th>
          </tr>
        </thead>
        <tbody>
          {members}
        </tbody>
      </Table>
    );
  }
}

MemberTable.propTypes = {
  members: React.PropTypes.arrayOf(React.PropTypes.object),
  handleDrop: React.PropTypes.func,
  handleEdit: React.PropTypes.func,
  handleModal: React.PropTypes.func
};
