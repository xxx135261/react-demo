import React, {Component} from 'react';
import ModalItem from './modalItem';
import { Card, Modal } from 'antd';
import "./cardItem.less"

const { Meta } = Card;
class CardItem extends Component {
	constructor(props){
		super(props)
		this.state = {modalInfo:{visible:false}}
	}

	showModal = () => {
    this.setState({modalInfo:{
			visible:true
		}});
	};
	
	handleOk = () => {
    this.setState({modalInfo:{
			visible:false
		}});
  };

  handleCancel = e => {
    console.log(e);
    this.setState({modalInfo:{
			visible:false
		}});
	};
	
	render() {
		const cardItem = this.props.cardItem;
		return (
				<div>
					<Card
						onClick={this.showModal}
						hoverable
						style={{ width: 300 }}
						cover={<img alt="example" src={cardItem.storeimg}/>}
						>
						<Meta title={cardItem.storename} description={cardItem.storeintro} />
					</Card>
					<ModalItem modalInfo={this.state.modalInfo} handleOk={this.handleOk} handleCancel={this.handleCancel}></ModalItem>
			</div>
		)
	}
}

export default CardItem