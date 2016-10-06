import React from 'react';
import { Modal, Button, form, FormGroup, Radio } from 'react-bootstrap';


export default class EditModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: this.props.member.name,
                   age: this.props.member.age,
                   address: this.props.member.address };
    this.handleEdit = this.handleEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
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
    return (
      <Modal {...this.props} bsSize='large' aria-labelledby='contained-modal-title-lg'>
        <Modal.Header closeButton>
          <Modal.Title id='contained-modal-title-lg'>Update</Modal.Title>
        </Modal.Header>
        <form>
          <Modal.Body>
            ID: {this.props.member.id} <br /><br />
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
            <Button onClick={this.handleEdit}>Save</Button>
          </Modal.Footer>
        </form>
      </Modal>
    );
  }
}

EditModal.propTypes = {
  handleEdit: React.PropTypes.func,
  member: React.PropTypes.shape({
    id: React.PropTypes.string,
    name: React.PropTypes.string,
    age: React.PropTypes.string,
    address: React.PropTypes.string
  }),
  onHide: React.PropTypes.func
};
