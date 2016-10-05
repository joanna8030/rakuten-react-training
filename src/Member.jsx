import React from 'react';
import { Button, tr, td } from 'react-bootstrap';
import EditModal from './EditModal';

export default class Member extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lgShow: false
      // member: { ID: this.props.ID, Name: this.props.Name, Age: this.props.Age, Address: this.props.Address, Sex: this.props.Sex, Is_update: this.props.Is_update }
    };
    this.handleDrop = this.handleDrop.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }
  handleDrop() {
    this.props.handleDrop(this.props.ID);
  }
  handleEdit(editMember, ID) {
    this.props.handleEdit(editMember, ID);
  }
  render() {
    const lgClose = () => this.setState({ lgShow: false });
    let color = '';
    if (this.props.Is_update === 'true') {
      color += '#f1f442';
    }
    const member = { ID: this.props.ID, Name: this.props.Name, Age: this.props.Age, Address: this.props.Address, Sex: this.props.Sex, Is_update: this.props.Is_update };
    return (
      <tr style={{ backgroundColor: color }}>
        <td>{this.props.ID}</td>
        <td>{this.props.Name}</td>
        <td>{this.props.Age}</td>
        <td>{this.props.Address}</td>
        <td>{this.props.Sex}</td>
        <td>
          <Button onClick={() => { this.setState({ lgShow: true }); }}>Edit</Button>
          <Button onClick={(e) => { this.handleDrop(e); }}>Drop</Button>
          <EditModal show={this.state.lgShow} onHide={lgClose} member={member} handleEdit={this.handleEdit} />
        </td>
      </tr>
    );
  }
}

Member.propTypes = {
  ID: React.PropTypes.string,
  Name: React.PropTypes.string,
  Age: React.PropTypes.string,
  Address: React.PropTypes.string,
  Sex: React.PropTypes.string,
  Is_update: React.PropTypes.string,
  handleDrop: React.PropTypes.func,
  handleEdit: React.PropTypes.func
};
