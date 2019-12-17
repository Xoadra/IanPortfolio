



import React from 'react'

import Code from './code/code'
import './portfolio.css'



export default () => (
	<section id="portfolio">
		<div className="volume">
			<h3>Portfolio</h3>
			<hr/>
			<div className="exhibit">
				<Code name="PfitzerPhotography"/>
				<Code name="MarketMeals"/>
				<Code name="Xambda"/>
				<Code name="SpaCore"/>
				<Code name="IanPortfolio"/>
			</div>
		</div>
	</section>
)



