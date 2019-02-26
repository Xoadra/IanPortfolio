



import React from 'react'

import Language from './language/language'
import './skills.css'



export default ( ) => {
	const python = [ 'Django', 'Flask' ]
	const javascript = [ 'React', 'Angular', 'Webpack', 'Babel' ]
	const csharp = [ 'ASP.NET Core', 'Unity Engine' ]
	return (
		<section id="skills">
			<div className="volume">
				<h3> Skills </h3>
				<hr/>
				<h4> The Big Three </h4>
				<div className="three">
					<Language lang="Python" tech={ python } icon="python"/>
					<Language lang="JavaScript" tech={ javascript } icon="javascript"/>
					<Language lang="C#" tech={ csharp } icon="csharp"/>
				</div>
				<h5> Additional Expertise </h5>
				<ul>
					<li> HTML </li>
					<li> CSS </li>
					<li> Git </li>
					<li> SQL </li>
					<li> Java </li>
				</ul>
			</div>
		</section>
	)
}



