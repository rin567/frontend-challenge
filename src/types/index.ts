import { Dispatch, SetStateAction } from 'react'

export interface ICatAPI {
	baseURl: string
	limit: number
	fetchCatList(count: number): Promise<ICat[]>
}

export interface ICat {
	id: string
	url: string
	width: number
	height: number
	heart: string
}
export interface ICardProps {
	cat: ICat
	setChangeLocalStorage?: Dispatch<SetStateAction<boolean>>
}

export interface IListProps {
	list: ICat[]
	setChangeLocalStorage?: Dispatch<SetStateAction<boolean>>
}
