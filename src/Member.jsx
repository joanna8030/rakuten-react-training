import React from 'react';
import { Button, tr, td } from 'react-bootstrap';
import EditModal from './EditModal';

export default class Member extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lgShow: false,
      member: [this.props.ID, this.props.Name, this.props.Age, this.props.Address, this.props.Sex, this.props.Is_update]
    };
    this.handleDrop = this.handleDrop.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }
  handleDrop() {
    this.props.handleDrop(this.props.ID);
  }
  handleEdit() {
    this.props.handleEdit(this.props.ID);
  }
  render() {
    const lgClose = () => this.setState({ lgShow: false });
    let color = '';
    if (this.props.Is_update === 'true') {
      color += '#f1f442';
    }
    return (
      <tr style={{ backgroundColor: color }}>
        <td>{this.props.ID}</td>
        <td>{this.props.Name}</td>
        <td>{this.props.Age}</td>
        <td>{this.props.Address}</td>
        <td>{this.props.Sex}</td>
        <td>
          <Button onClick={() => { this.handleEdit; this.setState({ lgShow: true }); }}>Edit</Button>
          <Button onClick={(e) => { this.handleDrop(e); }}>Drop</Button>
          <EditModal show={this.state.lgShow} onHide={lgClose} member={this.state.member} />
        </td>
      </tr>
    );
  }
}

Member.propTypes = {
  ID: React.PropTypes.number,
  Name: React.PropTypes.string,
  Age: React.PropTypes.number,
  Address: React.PropTypes.string,
  Sex: React.PropTypes.string,
  Is_update: React.PropTypes.string,
  handleDrop: React.PropTypes.func,
  handleEdit: React.PropTypes.func
};
