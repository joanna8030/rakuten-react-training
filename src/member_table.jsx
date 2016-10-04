import React from 'react';
import { Table, thead, tr, th, tbody } from 'react-bootstrap';
import Member from './Member';


export default class MemberTable extends React.Component {
  constructor(props) {
    super(props);
    this.handleDrop = this.handleDrop.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }
  handleDrop(ID) {
    this.props.handleDrop(ID);
  }
  handleEdit(ID) {
    this.props.handleEdit(ID);
  }
  render() {
    var members = this.props.members.map(function(member) {
      return (<Member key={member.ID} ID={member.ID} Name={member.Name} Age={member.Age} Address={member.Address} Sex={member.Sex} Is_update={member.Is_update} handleDrop={this.handleDrop} handleEdit={this.handleEdit} />);
    }, this);
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
  members: React.PropTypes.arrayOf(React.PropTypes.string, React.PropTypes.number),
  handleDrop: React.PropTypes.func,
  handleEdit: React.PropTypes.func
};
