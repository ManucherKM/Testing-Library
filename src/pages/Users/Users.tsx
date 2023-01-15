import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { IUser } from '../../types/types'
import axios from 'axios'
import Loading from '../../Components/Loading'

const Users = () => {
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const [users, setUsers] = useState<IUser[] | null>([])

	useEffect(() => {
		;(async () => {
			setIsLoading(true)
			const { data } = await axios.get<IUser[]>(
				'https://jsonplaceholder.typicode.com/users'
			)
			setUsers(data)
			setIsLoading(false)
		})()
	}, [])

	return (
		<div data-testid='users-page' className='users'>
			{isLoading && <Loading />}
			{!isLoading && (
				<div data-testid='users-block'>
					{users?.map(user => (
						<div data-testid='user' key={user.id}>
							<Link to={`/user/${user.id}`}>{user.name}</Link>
							<p>{user.username}</p>
							<p>{user.email}</p>
						</div>
					))}
				</div>
			)}
		</div>
	)
}

export default Users
