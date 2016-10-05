import React from 'react';
import { Modal, Button, form, FormGroup, Radio } from 'react-bootstrap';


export default class EditModal extends React.Component {
  constructor(props) {
    super(props);
    this.handleEdit = this.handleEdit.bind(this);
  }
  handleEdit() {
    const editMember = { ID: this.IDInput.value, Name: this.NameInput.value, Age: this.AgeInput.value, Address: this.AddressInput.value, Sex: 'female', Is_update: 'true' };
    this.props.handleEdit(editMember, this.props.member.ID);
  }
  render() {
    return (
      <Modal {...this.props} bsSize='large' aria-labelledby='contained-modal-title-lg'>
        <Modal.Header closeButton>
          <Modal.Title id='contained-modal-title-lg'>Update</Modal.Title>
        </Modal.Header>
        <form>
          <Modal.Body>
            ID: <input type='text' value={this.props.member.ID} ref={input => this.IDInput = input} /><br /><br />
            Name: <input type='text' ref={input => this.NameInput = input} /><br /><br />
            Age: <input type='text' ref={input => this.AgeInput = input} /><br /><br />
            Address: <input type='text' ref={input => this.AddressInput = input} /><br /><br />
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
  member: React.PropTypes.object
};
