import renderComponent from './helpRender'

describe('Тестирование helpRender', () => {
	//Чтобы обновить Snapshot нужно запустить тесты с флагом --updateSnapshot
	test.each([1, 2, 3, 4, 5, 'asd', 7, 8, 9, 10, 11, 12, 13, 14, 15])(
		'Правильное значение',
		a => {
			let jsx = <div>test {a}1</div>
			let res = renderComponent(jsx, `/${a}`)
			expect(res.baseElement.textContent).toMatchSnapshot()
		}
	)
})
