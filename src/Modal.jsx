import React from 'react';
import { Modal, Button, form, FormGroup, Radio } from 'react-bootstrap';


export default class MyLargeModal extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddNewRow = this.handleAddNewRow.bind(this);
  }
  handleAddNewRow() {
    const addMember = { ID: this.IDInput.value, Name: this.NameInput.value, Age: this.AgeInput.value, Address: this.AddressInput.value, Sex: 'female', Is_update: 'false' };
    this.props.handleAddNewRow(addMember);
  }

  render() {
    return (
      <Modal {...this.props} bsSize='large' aria-labelledby='contained-modal-title-lg'>
        <Modal.Header closeButton>
          <Modal.Title id='contained-modal-title-lg'>New Row</Modal.Title>
        </Modal.Header>
        <form>
          <Modal.Body>
            ID: <input type='text' ref={input => this.IDInput = input} /><br /><br />
            Name: <input type='text' ref={input => this.NameInput = input} /><br /><br />
            Age: <input type='text' ref={input => this.AgeInput = input} /><br /><br />
            Address: <input type='text' ref={input => this.AddressInput = input} /><br /><br />
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

MyLargeModal.propTypes = {
  handleAddNewRow: React.PropTypes.func
};
