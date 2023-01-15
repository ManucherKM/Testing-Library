import { FC } from 'react'
import { IInput } from '../types/types'

const Input: FC<IInput> = ({ value, setValue, placeholder }) => {
	return (
		<input
			className='input_default'
			value={value}
			type='text'
			placeholder={placeholder}
			onChange={e => setValue(e.target.value)}
		/>
	)
}

export default Input
