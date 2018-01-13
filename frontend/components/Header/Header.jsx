import React from 'react'
import ReactDom from 'react-dom'
import {Col, Row } from 'react-bootstrap'
import LogoComponent from './../Images/Logo.jsx'

class Header extends React.Component {
	render() {
		return (
			<header className="container">
				<Row className="header">
					<center>
					<Col xs={4} md={4} bsStyle="">
						<HeaderLogo logoUrl=""/>
					</Col>
					</center>
				</Row>
			</header>
		);
	}
} 

export default HeaderContainer;