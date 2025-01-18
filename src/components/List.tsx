import { FC } from 'react'
import '../styles/List.css'
import { IListProps } from '../types'
import { Card } from './Card'

export const List: FC<IListProps> = ({ list, setChangeLocalStorage }) => {
	return (
		<ul className='list'>
			{list.map((cat, index) => {
				return (
					<Card
						key={`${cat.id}${index}`}
						cat={cat}
						setChangeLocalStorage={setChangeLocalStorage}
					/>
				)
			})}
		</ul>
	)
}
