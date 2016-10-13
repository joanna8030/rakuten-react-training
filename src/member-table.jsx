import React from 'react';
import { Table, thead, tr, th, tbody } from 'react-bootstrap';
import Member from './member-row';


export default class MemberTable extends React.Component {
  constructor(props) {
    super(props);
    this.handleDropRow = this.handleDropRow.bind(this);
    this.handleEditRow = this.handleEditRow.bind(this);
    this.handleModalOpen = this.handleModalOpen.bind(this);
  }

  handleDropRow(id) {
    this.props.onDropRow(id);
  }

  handleEditRow(editMember, id) {
    this.props.onEditRow(editMember, id);
  }

  handleModalOpen(triggeredBy, member) {
    this.props.onEditBtnClick(triggeredBy, member);
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
        onDropRow={this.handleDropRow}
        onEditRow={this.handleEditRow}
        onEditBtnClick={this.handleModalOpen}
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
  onDropRow: React.PropTypes.func,
  onEditRow: React.PropTypes.func,
  onEditBtnClick: React.PropTypes.func
};
