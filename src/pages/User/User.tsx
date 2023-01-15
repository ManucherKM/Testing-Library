import { useParams } from 'react-router-dom'

const User = () => {
	const { id } = useParams()
	return <div data-testid='alone_user'>User {id}</div>
}

export default User
