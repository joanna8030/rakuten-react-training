import React from 'react';
import { Button, tr, td } from 'react-bootstrap';
import Const from './const';


export default class Member extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   lgShow: false
    //   // member: { ID: this.props.ID, Name: this.props.Name, Age: this.props.Age, Address: this.props.Address, Sex: this.props.Sex, Is_update: this.props.Is_update }
    // };

    this.handleDropRow = this.handleDropRow.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.lgClose = this.lgClose.bind(this);
  }

  handleDropRow() {
    this.props.onDropRow(this.props.id);
  }

  handleEdit(editMember, id) {
    this.props.onEditRow(editMember, id);
  }

  lgClose() {
    this.setState({ lgShow: false });
  }

  render() {
    let color = '';
    color += (this.props.isUpdate === true) ? '#f1f442' : '';
    const member = {
      id: this.props.id,
      name: this.props.name,
      age: this.props.age,
      address: this.props.address,
      sex: this.props.sex,
      isUpdate: this.props.isUpdate
    };
    return (
      <tr style={{ backgroundColor: color }}>
        <td>{this.props.id}</td>
        <td>{this.props.name}</td>
        <td>{this.props.age}</td>
        <td>{this.props.address}</td>
        <td>{this.props.sex}</td>
        <td>
          <Button onClick={() => this.props.onEditBtnClick(Const.Update, member)}>Edit</Button>
          <Button onClick={(e) => { this.handleDropRow(e); }}>Drop</Button>
        </td>
      </tr>
    );
  }
}

Member.propTypes = {
  id: React.PropTypes.string,
  name: React.PropTypes.string,
  age: React.PropTypes.string,
  address: React.PropTypes.string,
  sex: React.PropTypes.string,
  isUpdate: React.PropTypes.bool,
  onDropRow: React.PropTypes.func,
  onEditRow: React.PropTypes.func,
  onEditBtnClick: React.PropTypes.func
};
