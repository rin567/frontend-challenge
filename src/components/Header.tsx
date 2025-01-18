import { NavLink } from 'react-router'
import '../styles/Header.css'
export const Header = () => {
	return (
		<header className='header'>
			<nav className='header__nav'>
				<NavLink to='.'>Все котики</NavLink>
				<NavLink to='favorites'>Любимые котики</NavLink>
			</nav>
		</header>
	)
}
