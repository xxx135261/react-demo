import React, {Component} from 'react';
import { Modal } from 'antd';

class ModalItem extends Component {
  state = { };


  render() {
		const modalInfo = this.props.modalInfo;
    return (
      <div>
        <Modal
          title="Basic Modal"
          visible={modalInfo.visible}
          onOk={this.props.handleOk}
          onCancel={this.props.handleCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </div>
    );
  }
}

export default ModalItem