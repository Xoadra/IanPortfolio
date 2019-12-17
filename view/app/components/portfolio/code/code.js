



import React, { Component } from 'react'

import './code.css'



class Code extends Component {
	
	constructor(props) {
		super(props)
		this.state = { url: null, href: '', text: '' }
	}
	
	
	componentDidMount() {
		const api = 'https://api.github.com/repos/Xoadra/' + this.props.name
		const headers = { 'Accept': 'application/vnd.github.v3+json' }
		const request = new Request(api, { method: 'GET', headers })
		fetch(request).then(data => data.json()).then(json => {
			const { description, homepage, language } = json
			const github = 'https://github.com/Xoadra/' + this.props.name
			this.setState({ href: github, text: description, url: homepage || null })
		})
	}
	
	render() {
		const lock = { disabled: this.state.url ? false : true }
		return (
			<div className="code">
				<h6>{this.props.name}</h6>
				<p>{this.state.text}</p>
				<div className="portal">
					<a href={this.state.url}><button {...lock}>View</button></a>
					<a href={this.state.href}><button>Code</button></a>
					{ /* <a href={null}><button>Docs</button></a> */ }
				</div>
			</div>
		)
	}
	
}


export default Code



