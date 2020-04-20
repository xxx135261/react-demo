import React, {Component} from 'react'
import CardItem from  './cardItem'
import {Popover, Button, Card} from 'antd'
const { Meta } = Card;
const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);
class StoreItem extends Component{
	constructor(props){
		super(props)
		this.state = {visible:false}
	}

	handleVisibleChange = (visible) => {
		this.setState({visible});
	}

	render() {
		const cardItem = this.props.storeItem
		return (
			<Popover content={content} placement="top" trigger="click">
				<CardItem  cardItem={this.props.storeItem}></CardItem>
				{/* <Card
					hoverable
					style={{ width: 300 }}
					cover={<img alt="example" src={cardItem.storeimg}/>}
					>
					<Meta title={cardItem.storename} description={cardItem.storeintro} />
				</Card> */}
			</Popover>
		)
	}
}

export default StoreItem