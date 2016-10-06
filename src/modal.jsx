import React from 'react';
import { Modal, Button, form, FormGroup, Radio } from 'react-bootstrap';


export default class ModalDialog extends React.Component {
  constructor(props) {
    super(props);
    console.log('constructor');
    this.state = { name: this.props.member.name,
                   age: this.props.member.age,
                   address: this.props.member.address };
    this.handleAddNewRow = this.handleAddNewRow.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleAddNewRow() {
    const addMember = {
      id: this.idInput.value,
      name: this.nameInput.value,
      age: this.ageInput.value,
      address: this.addressInput.value,
      sex: 'female',
      isUpdate: 'false'
    };
    this.props.handleAddNewRow(addMember);
    this.props.onHide();
  }
  handleEdit() {
    const editMember = {
      name: this.nameInput.value,
      age: this.ageInput.value,
      address: this.addressInput.value,
      sex: 'female',
      isUpdate: 'true'
    };
    this.props.handleEdit(editMember, this.props.member.id);
    this.props.onHide();
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    var insertOrUpdate = (this.props.title === 'New Row') ? this.handleAddNewRow : this.handleEdit;
    var idFormInput = (this.props.title === 'New Row') ? (<input type='text' ref={input => this.idInput = input} />) : this.props.member.id;
    return (
      <Modal {...this.props} bsSize='large' aria-labelledby='contained-modal-title-lg'>
        <Modal.Header closeButton>
          <Modal.Title id='contained-modal-title-lg'>{this.props.title}</Modal.Title>
        </Modal.Header>
        <form>
          <Modal.Body>
            ID: {idFormInput}<br /><br />
            Name: <input type='text' name='name' value={this.state.name} ref={input => this.nameInput = input} onChange={this.handleChange} /><br /><br />
            Age: <input type='text' name='age' value={this.state.age} ref={input => this.ageInput = input} onChange={this.handleChange} /><br /><br />
            Address: <input type='text' name='address' value={this.state.address} ref={input => this.addressInput = input} onChange={this.handleChange} /><br /><br />
            <FormGroup>
              <Radio inline>
                male
              </Radio>
              {' '}
              <Radio inline>
                female
              </Radio>
            </FormGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={insertOrUpdate}>Save</Button>
          </Modal.Footer>
        </form>
      </Modal>
    );
  }
}

ModalDialog.propTypes = {
  title: React.PropTypes.string,
  member: React.PropTypes.shape({
    id: React.PropTypes.string,
    name: React.PropTypes.string,
    age: React.PropTypes.string,
    address: React.PropTypes.string
  }),
  handleAddNewRow: React.PropTypes.func,
  onHide: React.PropTypes.func,
  handleEdit: React.PropTypes.func
};
