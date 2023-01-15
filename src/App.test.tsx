import { render, screen } from '@testing-library/react'
import App from './App'

describe('Тест всего приложения App', () => {
	test('Рендер компонента App', () => {
		render(<App />)

		const appComponent = screen.getByTestId('app')
		expect(appComponent).toBeInTheDocument()
	})
})
