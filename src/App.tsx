import { BrowserRouter } from 'react-router-dom'
import { Route, Routes } from 'react-router'
import Form from './pages/Form'
import User from './pages/User/User'
import Users from './pages/Users/Users'
import Error from './pages/Error'
import Home from './pages/Home/Home'
import './App.css'

const App = () => {
	return (
		<div data-testid='app' className='app'>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/form' element={<Form />} />
					<Route path='/users' element={<Users />} />
					<Route path='/user/:id' element={<User />} />
					<Route path='*' element={<Error />} />
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
