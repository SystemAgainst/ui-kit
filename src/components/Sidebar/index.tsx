import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar: React.FC = () => {
	return (
		<nav>
			<ul>
				<li>
					<Link to='/accordion'>Accordion</Link>
				</li>
				<li>
					<Link to='/table'>Table</Link>
				</li>
				<li>
					<Link to='/typography'>Typography</Link>
				</li>
				<li>
					<Link to='/breadcrumbs'>Breadcrumbs</Link>
				</li>
				<li>
					<Link to='/carousel'>Carousel</Link>
				</li>
			</ul>
		</nav>
	)
}

export default Sidebar
