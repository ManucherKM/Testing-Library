import { screen } from '@testing-library/react'
import { Routes, Route } from 'react-router-dom'
import renderComponent from '../../utils/helpers/helpRender'
import User from './User'

describe('Тест страницы User', () => {
	test('Рендер страницы User', async () => {
		renderComponent(
			<Routes>
				<Route path='user/:id' element={<User />} />
			</Routes>,
			'user/123'
		)
		const alone_user = await screen.getByTestId('alone_user').textContent
		expect(alone_user).toBe('User 123')
	})
})
