import { ICat, ICatAPI } from '../types'

class CatAPI implements ICatAPI {
	baseURl = 'https://api.thecatapi.com/v1/images/search'
	limit = 15

	async fetchCatList(count: number) {
		try {
			const response = await fetch(`${this.baseURl}?limit=${this.limit}`, {
				method: 'get',
				headers: {
					'x-api-key':
						'live_TpYjqnTtSEiG9bqvhyy9hGPE9OM3NcFiarcymtFeLP90FIT3KsmflYaOH0WwVfsm',
				},
			})
			if (!response.ok) {
				throw new Error('Network response was not ok')
			}
			const catList = await response.json()
			return catList.map((cat: ICat) => {
				cat.heart = 'heart'
				return cat
			})
		} catch (error) {
			if (count > 0) {
				console.log(count)
				this.fetchCatList(count - 1)
			} else {
				console.error('Error:', error)
			}
		}
	}
}

export const catAPI = new CatAPI()
