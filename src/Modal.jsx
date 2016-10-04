import React from 'react';
import { Modal, Button, form, FormGroup, Radio } from 'react-bootstrap';


export default class MyLargeModal extends React.Component {
  // handleAddNewRow() {
  //
  // }
  render() {
    return (
      <Modal {...this.props} bsSize='large' aria-labelledby='contained-modal-title-lg'>
        <Modal.Header closeButton>
          <Modal.Title id='contained-modal-title-lg'>New Row</Modal.Title>
        </Modal.Header>
        <form>
          <Modal.Body>
            ID: <input type='text' /><br /><br />
            Name: <input type='text' /><br /><br />
            Age: <input type='text' /><br /><br />
            Address: <input type='text' /><br /><br />
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
            <Button type='submit' onClick={this.props.onHide}>Save</Button>
          </Modal.Footer>
        </form>
      </Modal>
    );
  }
}

MyLargeModal.propTypes = {
  onHide: React.PropTypes.func
};
