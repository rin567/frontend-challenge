import { Outlet } from 'react-router'
import { Header } from './components'
import './styles/App.css'

function App() {
	return (
		<>
			<Header />
			<Outlet />
		</>
	)
}

export default App
