



import React from 'react'

import Media from './media/media'
import './footer.css'



export default () => {
	const name = 'Ian Peterson'
	const year = new Date().getFullYear()
	return (
		<footer>
			<a href="mailto:xijp77@gmail.com"><button>Reach Me</button></a>
			<ul>
				<Media name="GitHub" href="github.com/Xoadra"/>
				<Media name="LinkedIn" href="www.linkedin.com/in/ianjpeterson"/>
				<Media name="Twitter" href="twitter.com/ian0codes"/>
				<Media name="Stack Overflow" href="stackoverflow.com/users/7942450/xoadra"/>
				<Media name="Devto" href="dev.to/xoadra"/>
				<Media name="AngelList" href="angel.co/ianjpeterson"/>
			</ul>
			{ /* <span>Responsibly made with React and Node.js.</span> */ }
			<span id="copyright">{name} &#169; {year}</span>
		</footer>
	)
}



