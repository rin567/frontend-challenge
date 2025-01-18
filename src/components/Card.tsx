import { FC, useState } from 'react'
import '../styles/Card.css'
import { ICardProps, ICat } from '../types'

export const Card: FC<ICardProps> = ({ cat, setChangeLocalStorage }) => {
	const [heart, setHeart] = useState<string>(cat.heart)
	const onClickHandler = () => {
		const favorites = localStorage.getItem('favorites')
		if (heart === 'heart') {
			cat.heart = 'heartFull'
			if (favorites) {
				localStorage.setItem(
					'favorites',
					JSON.stringify([...JSON.parse(favorites), cat])
				)
			} else {
				localStorage.setItem('favorites', JSON.stringify([cat]))
			}
			setHeart('heartFull')
		} else {
			setHeart('heart')
			if (favorites) {
				const filteredList = JSON.parse(favorites).filter(
					(item: ICat) => item.id !== cat.id
				)
				localStorage.setItem('favorites', JSON.stringify(filteredList))
			}
			if (setChangeLocalStorage) {
				setChangeLocalStorage(true)
			}
		}
	}

	return (
		<li className='card'>
			<img
				loading='lazy'
				className='imgCat'
				src={cat.url}
				alt='cat'
				height={225}
				width={225}
			/>
			<button className={heart} onClick={() => onClickHandler()}></button>
		</li>
	)
}
