import React from 'react';

export default class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 'none'
    };
  }

  componentWillMount() {
    this.props.openbtn || this.showModal();
  }

  showModal() {
    this.setState({ display: 'block' });
  }

  hideModal() {
    this.setState({ display: 'none' });
  }

  closeOnBackground(e) {
    if (e.target.id === 'modal') {
      this.hideModal();
    }
  }

  render() {
    var button;
    if (this.props.openbtn) { button = <button id='modal-open-btn' onClick={e => this.showModal(e)}>{this.props.opentext}</button>; }
    return (
      <span>
        {button}
        <div id='modal' style={this.state} />
      </span>
    );
  }
}

Modal.propTypes = {
  openbtn: React.PropTypes.string,
  opentext: React.PropTypes.string
};
