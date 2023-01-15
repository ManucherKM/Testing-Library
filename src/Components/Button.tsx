import { FC, MouseEvent } from 'react'
import { TypeButton } from '../types/enum'
import { IButton } from '../types/types'

const Button: FC<IButton> = ({
	onClick,
	text,
	type = TypeButton.btn_default,
}) => {
	function clickHandler(e: MouseEvent<HTMLButtonElement> | undefined) {
		e?.preventDefault()
		onClick()
	}

	return (
		<button type={type} className='btn_default' onClick={clickHandler}>
			{text}
		</button>
	)
}

export default Button
