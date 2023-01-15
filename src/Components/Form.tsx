import { useState } from 'react'
import Button from './Button'
import Input from './Input'

const Form = () => {
	const [email, setEmail] = useState<string>('')
	const [password, setPassword] = useState<string>('')

	const submitForm = () => {
		console.log('Форма отправлена')
	}

	return (
		<form className='form'>
			<Input placeholder='email' value={email} setValue={setEmail} />
			<Input placeholder='passwrod' value={password} setValue={setPassword} />
			<Button text='Отправить' onClick={submitForm} />
		</form>
	)
}

export default Form
