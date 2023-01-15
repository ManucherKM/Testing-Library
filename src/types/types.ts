import { TypeButton } from "./enum"

export interface IRes {
	data: IUser[]
}

export interface IUser {
	id: number
	name: string
	username: string
	email: string
}

export interface IButton {
	text: string
	onClick: () => void
	type?: TypeButton
}

export interface IInput {
	value: string
	setValue: (val: string) => void
	placeholder: string
}