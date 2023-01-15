import { screen } from '@testing-library/react'
import { IRes } from '../../types/types'
import Users from './Users'
import axios from 'axios'
import renderComponent from '../../utils/helpers/helpRender'

jest.mock('axios')

describe('Тест страницы Users', () => {
	let res: IRes

	beforeAll(() => {
		res = {
			data: [
				{
					id: 1,
					name: 'Leanne Graham',
					username: 'Bret',
					email: 'Sincere@april.biz',
				},
				{
					id: 2,
					name: 'Ervin Howell',
					username: 'Antonette',
					email: 'Shanna@melissa.tv',
				},
				{
					id: 3,
					name: 'Clementine Bauch',
					username: 'Samantha',
					email: 'Nathan@yesenia.net',
				},
			],
		}
	})

	test('Рендер страницы Users', async () => {
		;(axios.get as jest.Mock).mockReturnValue(res)
		renderComponent(<Users />, 'users')

		const loaderFirst = screen.getByTestId('loader')
		expect(loaderFirst).toBeInTheDocument()

		const usersBlockFirst = await screen.findByTestId('users-block')
		expect(usersBlockFirst).toBeInTheDocument()

		const loaderSecond = screen.queryByTestId('loader')
		expect(loaderSecond).not.toBeInTheDocument()

		const users = await screen.findAllByTestId('user')
		expect(users.length).toBe(3)
	})
})
