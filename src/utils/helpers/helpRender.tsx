import { render } from '@testing-library/react'
import { ReactElement, ReactNode } from 'react'
import { MemoryRouter } from 'react-router-dom'

const renderComponent = (
	component: ReactNode | ReactElement | null,
	entries: string | undefined = ''
): ReturnType<typeof render> => {
	return render(
		<MemoryRouter initialEntries={['/' + entries]}>{component}</MemoryRouter>
	)
}

export default renderComponent
