import React from 'react'
import ReactDom from 'react-dom'
import {Col, Row } from 'react-bootstrap'

class HeaderLogo extends React.Component {
	render() {
		return (
			<div>
				<img src={this.props.logoUrl} width="100" height="100"/>
			</div>
		);
	}
} 

export default LogoComponent;