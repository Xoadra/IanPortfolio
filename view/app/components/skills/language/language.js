



import React from 'react'

import './language.css'



export default ( props ) => {
	const subject = ( text, idx ) => <li key={ idx }> { text } </li>
	const technology = props.tech.map( subject )
	return (
		<div className="lang">
			<div className="icon">
				<div id={ props.icon }></div>
			</div>
			<h6> { props.lang } </h6>
			<ul> { technology } </ul>
		</div>
	)
}


