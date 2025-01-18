import { useEffect, useState } from 'react'
import { List } from '../components'
import { catAPI } from '../service/catAPI'
import '../styles/Home.css'
import { ICat } from '../types'
export const Home = () => {
	const [catList, setCatList] = useState<ICat[]>([])
	const [loading, setLoading] = useState<boolean>(true)
	const [page, setPage] = useState<number>(1)

	useEffect(() => {
		catAPI.fetchCatList(3).then(response => {
			if (response) {
				setCatList(prev => [...prev, ...response])
				setLoading(false)
			}
		})
	}, [page])
	const handleScroll = () => {
		if (
			document.body.scrollHeight - 300 <
			window.scrollY + window.innerHeight
		) {
			setLoading(true)
		}
	}
	window.addEventListener('scroll', handleScroll)

	useEffect(() => {
		if (loading) {
			setPage(prevPage => prevPage + 1)
		}
	}, [loading])

	return (
		<main className='home'>
			<List list={catList} />
			{loading && <p>...загружаем ещё котиков...</p>}
		</main>
	)
}
