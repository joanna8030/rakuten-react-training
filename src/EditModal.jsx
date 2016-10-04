import React from 'react';
import { Modal, Button, form, FormGroup, Radio } from 'react-bootstrap';


export default class EditModal extends React.Component {
  render() {
    return (
      <Modal {...this.props} bsSize='large' aria-labelledby='contained-modal-title-lg'>
        <Modal.Header closeButton>
          <Modal.Title id='contained-modal-title-lg'>Update</Modal.Title>
        </Modal.Header>
        <form>
          <Modal.Body>
            ID: <input type='text' value={this.props.member[0]} /><br /><br />
            Name: <input type='text' value={this.props.member[1]} /><br /><br />
            Age: <input type='text' value={this.props.member[2]} /><br /><br />
            Address: <input type='text' value={this.props.member[3]} /><br /><br />
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

EditModal.propTypes = {
  onHide: React.PropTypes.func,
  member: React.PropTypes.string
};
