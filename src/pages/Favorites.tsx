import { useEffect, useState } from 'react'
import { List } from '../components'
import '../styles/Favorites.css'
import { ICat } from '../types'

export const Favorites = () => {
	const getFavorites = () => {
		const favorites = localStorage.getItem('favorites')
		if (favorites) {
			return JSON.parse(favorites)
		} else {
			return []
		}
	}
	const [catList, setCatList] = useState<ICat[]>(getFavorites())
	const [changeLocalStorage, setChangeLocalStorage] = useState<boolean>(false)

	useEffect(() => {
		if (changeLocalStorage) {
			setCatList(getFavorites())
			setChangeLocalStorage(false)
		}
	}, [changeLocalStorage])

	return (
		<main className='favorites'>
			{catList.length === 0 ? (
				<p className='favorites__empty'>нет любимых котиков:(</p>
			) : (
				<List list={catList} setChangeLocalStorage={setChangeLocalStorage} />
			)}
		</main>
	)
}
