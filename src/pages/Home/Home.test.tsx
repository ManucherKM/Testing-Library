import { screen } from '@testing-library/react'
import renderComponent from '../../utils/helpers/helpRender'
import Home from './Home'

describe('Тест страницы Home', () => {
	test('Рендер страницы Home', () => {
		renderComponent(<Home />)
		const homePage = screen.getByTestId('home_page')
		expect(homePage).toBeInTheDocument()
		const usersLink = screen.getByTestId('users-link')
		expect(usersLink).toBeInTheDocument()
		const err_Link = screen.getByText(/404/i)
		expect(err_Link).toBeInTheDocument()
	})
})
