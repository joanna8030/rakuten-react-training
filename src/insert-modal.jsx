import React from 'react';
import { Modal, Button, form, FormGroup, Radio } from 'react-bootstrap';


export default class InsertModal extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddNewRow = this.handleAddNewRow.bind(this);
  }

  handleAddNewRow() {
    const addMember = { id: this.idInput.value, name: this.nameInput.value, age: this.ageInput.value, address: this.addressInput.value, sex: 'female', isUpdate: 'false' };
    this.props.handleAddNewRow(addMember);
    this.props.onHide();
  }

  render() {
    return (
      <Modal {...this.props} bsSize='large' aria-labelledby='contained-modal-title-lg'>
        <Modal.Header closeButton>
          <Modal.Title id='contained-modal-title-lg'>New Row</Modal.Title>
        </Modal.Header>
        <form>
          <Modal.Body>
            ID: <input type='text' ref={input => this.idInput = input} /><br /><br />
            Name: <input type='text' ref={input => this.nameInput = input} /><br /><br />
            Age: <input type='text' ref={input => this.ageInput = input} /><br /><br />
            Address: <input type='text' ref={input => this.addressInput = input} /><br /><br />
            <FormGroup>
              <Radio inline value='male'>
                male
              </Radio>
              {' '}
              <Radio inline value='female'>
                female
              </Radio>
            </FormGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleAddNewRow}>Save</Button>
          </Modal.Footer>
        </form>
      </Modal>
    );
  }
}

InsertModal.propTypes = {
  handleAddNewRow: React.PropTypes.func,
  onHide: React.PropTypes.func
};
