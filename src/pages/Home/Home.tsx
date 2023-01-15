import { Link } from 'react-router-dom'

const Home = () => {
	return (
		<div data-testid='home_page' className='home_page'>
			<div className='links_wrapper'>
				<Link className='link' to='/users' data-testid='users-link'>
					users
				</Link>
				<Link className='link' to='/404'>
					404
				</Link>
			</div>
		</div>
	)
}

export default Home
