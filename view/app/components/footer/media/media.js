



import React from 'react'

import './media.css'



export default (props) => {
	const href = 'https://' + props.href
	const icon = props.name.replace(' ', '')
	return (
		<a href={href}>
			<li id={icon.toLowerCase()}/>
		</a>
	)
}


